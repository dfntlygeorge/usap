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
import Image from "next/image";
import { EditSchedule } from "./EditSchedule";

const ScheduleTable = () => {
  return (
    <>
      <Table className="mt-8 max-w-4xl">
        <TableCaption>A list of your recent invoices.</TableCaption>
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
          <TableRow>
            <TableCell>Monday</TableCell>
            <TableCell>12:00 - 1:00 PM</TableCell>
            <TableCell>KA402</TableCell>
            <TableCell>4</TableCell>
            <TableCell>
              <EditSchedule />
              <button>
                <Image
                  src={"/trash.svg"}
                  alt="delete button"
                  width={24}
                  height={24}
                />
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default ScheduleTable;
