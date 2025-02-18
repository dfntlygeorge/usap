"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormSelect from "./FormSelect";
import FormInput from "./FormInput";
import { auth } from "@/app/auth";

const formSchema = z.object({
  day: z.string().min(1, {
    message: "Day is required.",
  }),
  timeBlock: z.string().min(1, {
    message: "Time Block is required.",
  }),
  room: z.string().min(1, {
    message: "Room is required.",
  }),
  maxSlots: z
    .string()
    .max(100)
    .min(1, { message: "Max Slots is required." })
    .transform((value) => parseInt(value, 10)) // Transform string to number
    .refine((value) => !isNaN(value), {
      message: "Max Slots must be a valid number.",
    }),
});

export type FormInput = z.infer<typeof formSchema>;

export function ScheduleForm() {
  // Initialize the form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      day: "",
      timeBlock: "",
      room: "",
      maxSlots: 0,
    },
  });

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // const session = await auth();
      // const userId = session?.user.id;
      // console.log(`Hello this is the user id ${userId}`);
      const res: Response = await fetch("/api/professor/schedule", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to update schedule");
      }

      const data = await res.json();
      console.log("Schedule updated:", data);
    } catch (error) {
      console.log(error);
    }
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormSelect
          name="day"
          label="Day"
          control={form.control}
          options={[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ]}
        />
        <FormInput
          name="timeBlock"
          label="Time Block"
          placeholder="e.g., 9:00 AM - 12:00 PM"
          control={form.control}
        />
        <FormInput
          name="room"
          label="Room"
          placeholder="e.g., Room 101"
          control={form.control}
        />
        <FormInput
          name="maxSlots"
          label="Max Slots"
          placeholder="e.g., 20"
          control={form.control}
          type="number"
        />

        <Button type="submit">Save Schedule</Button>
      </form>
    </Form>
  );
}
