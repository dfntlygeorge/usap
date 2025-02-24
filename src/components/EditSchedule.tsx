import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScheduleForm } from "./ScheduleForm"; // Import the ScheduleForm component

export function EditSchedule() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add block</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Schedule</DialogTitle>
          <DialogDescription>
            Make changes to your schedule here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        {/* ScheduleForm is included inside the modal */}
        <ScheduleForm />
        {/* <DialogFooter>
          <Button type="submit">Save Schedule</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
