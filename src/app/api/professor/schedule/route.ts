import { NextRequest, NextResponse } from "next/server";
import { FormInput } from "@/components/ScheduleForm";
import { prisma } from "@/lib/prisma";
import { getUserId } from "@/lib/getUserId";

export async function POST(req: NextRequest): Promise<NextResponse<unknown>> {
  //   const formData: FormInput = await req.json();
  try {
    const userId = await getUserId();
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    console.log(`Hello again this is the user id: ${userId}`);
    // I dont know why we need to parse it. Im not familiar with backend development. Im learning it as Im doing this project.
    const body: FormInput = await req.json();

    const professor = await prisma.professor.findUnique({
      where: { userId },
    });

    if (!professor) {
      return NextResponse.json(
        {
          message: "Professor not found",
        },
        { status: 404 },
      );
    }

    const schedule = (professor.schedule as Record<string, any>) || {}; // Ensure it's an object
    // Idk how this logic works.
    const updatedSchedule = {
      ...schedule, // Now TypeScript knows it's an object
      [body.day]: [
        ...(schedule[body.day] || []), // Ensure existing schedule entries are preserved
        {
          timeBlock: body.timeBlock,
          room: body.room,
          maxSlots: body.maxSlots,
        },
      ],
    };

    await prisma.professor.update({
      where: { userId },
      data: {
        schedule: updatedSchedule,
      },
    });

    return NextResponse.json({
      message: "Schedule updated successfully",
      schedule: updatedSchedule,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error processing request",
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 },
    );
  }
}
