import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";
import { getUserId } from "@/lib/getUserId";
import { prisma } from "@/lib/prisma";
// import DeleteTimeBlock from "./DeleteTimeBlock";

type ScheduleItem = {
  room: string;
  maxSlots: number;
  timeBlock: string;
};

const ScheduleTable = async () => {
  // Get the userId from the session
  const userId = await getUserId();

  // Fetch professor schedule from the database
  const professor = await prisma.professor.findUnique({
    where: { userId: userId! },
  });

  // Check if the professor or schedule is null or empty
  if (!professor || !professor.schedule) {
    return <p>No schedule available or professor not found.</p>;
  }

  // Ensure the schedule is an object
  const scheduleObject = professor.schedule;

  return (
    <Table className="mt-8 max-w-4xl">
      <TableCaption>Your Schedule</TableCaption>
      <TableHeader>
        <TableRow className="bg-upGreen">
          <TableHead>Day</TableHead>
          <TableHead>Time Blocks</TableHead>
          <TableHead>Room</TableHead>
          <TableHead>Max Slots</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(scheduleObject).length === 0 ? (
          <TableRow>
            <TableCell colSpan={5}>No schedule available</TableCell>
          </TableRow>
        ) : (
          Object.entries(scheduleObject).map(([day, scheduleArray]) =>
            (scheduleArray as ScheduleItem[]).map((scheduleItem, itemIndex) => (
              <TableRow key={`${day}-${itemIndex}`}>
                <TableCell>{itemIndex === 0 ? day : ""}</TableCell>
                <TableCell>{scheduleItem.timeBlock}</TableCell>
                <TableCell>{scheduleItem.room}</TableCell>
                <TableCell>{scheduleItem.maxSlots}</TableCell>
                <TableCell>
                  {/* <DeleteTimeBlock
                    userId={userId!}
                    day={day}
                    timeBlock={scheduleItem.timeBlock}
                  /> */}
                  Delete
                </TableCell>
              </TableRow>
            )),
          )
        )}
      </TableBody>
    </Table>
  );
};

export default ScheduleTable;
