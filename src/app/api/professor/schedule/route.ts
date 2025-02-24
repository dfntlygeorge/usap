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

// export async function DELETE(req: NextRequest): Promise<NextResponse> {
//   try {
//     const { userId, day, timeBlock } = await req.json(); // ✅ Get data from request

//     if (!userId || !day || !timeBlock) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 },
//       );
//     }

//     // ✅ Find the professor
//     const professor = await prisma.professor.findUnique({
//       where: { userId },
//     });

//     if (!professor) {
//       return NextResponse.json(
//         { error: "Professor not found" },
//         { status: 404 },
//       );
//     }

//     // ✅ Get the current schedule
//     const schedule = professor.schedule as Record<
//       string,
//       { time: string; maxSlots: number }[]
//     >;

//     if (!schedule[day]) {
//       return NextResponse.json(
//         { error: "Day not found in schedule" },
//         { status: 404 },
//       );
//     }

//     // ✅ Filter out the timeBlock that matches
//     const updatedDaySchedule = schedule[day].filter(
//       (slot) => slot.time !== timeBlock,
//     );

//     // ✅ If the day is now empty, remove it completely
//     const updatedSchedule = { ...schedule };
//     if (updatedDaySchedule.length > 0) {
//       updatedSchedule[day] = updatedDaySchedule;
//     } else {
//       delete updatedSchedule[day];
//     }

//     // ✅ Update the professor's schedule in the database
//     await prisma.professor.update({
//       where: { userId },
//       data: { schedule: updatedSchedule },
//     });

//     return NextResponse.json(
//       { message: "Schedule updated successfully", schedule: updatedSchedule },
//       { status: 200 },
//     );
//   } catch (error) {
//     console.error("Delete Error:", error);
//     return NextResponse.json(
//       { error: "Failed to update schedule" },
//       { status: 500 },
//     );
//   }
// }
