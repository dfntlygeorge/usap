"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Textarea } from "./ui/textarea";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import * as React from "react";
import { useEffect } from "react";
import { formatDateTime } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 3 characters long.",
    })
    .max(50, {
      message: "Username must be at most 50 characters long.",
    }),
  subjectAndSection: z
    .string()
    .min(3, {
      message: "Subject & Section must be at least 3 characters long.",
    })
    .max(30, {
      message: "Subject & Section must be at most 30 characters long.",
    }),
  purpose: z
    .string()
    .min(10, {
      message: "Purpose must be at least 5 characters long.",
    })
    .max(50, {
      message: "Purpose must be at most 50 characters long.",
    }),
  consultationType: z.enum(["Face-to-face", "Online meet"], {
    errorMap: () => ({
      message:
        "Consultation Type must be either 'Face-to-face' or 'Online meet'.",
    }),
  }),
  additionalNotes: z
    .string()
    .min(10, {
      message: "Additional notes must be at least 20 characters long.",
    })
    .max(160, {
      message: "Additional notes must be at most 160 characters long.",
    }),
  professor: z
    .string()
    .min(2, {
      message: "Professor must be at least 3 characters long.",
    })
    .max(50, {
      message: "Professor must be at most 50 characters long.",
    }),
  dateAndTime: z
    .string()
    .min(2, {
      message: "Date and Time must be at least 3 characters long.",
    })
    .max(50, {
      message: "Date and Time must be at most 50 characters long.",
    }),
});

interface ConsultationFormTypes {
  selectedProfessor: string | null;
  date: Date | undefined;
  selectedTimeBlock: string | null;
}

export default function ConsultationForm({
  selectedProfessor,
  date,
  selectedTimeBlock,
}: ConsultationFormTypes) {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      subjectAndSection: "",
      purpose: "",
      consultationType: undefined, // we set this as undefined so the user can select.
      additionalNotes: "",
      professor: "",
      dateAndTime: "",
    },
  });

  useEffect(() => {
    form.setValue("professor", selectedProfessor || "");
  }, [selectedProfessor, form]);

  useEffect(() => {
    form.setValue(
      "dateAndTime",
      selectedTimeBlock
        ? `${formatDateTime(date)} at ${selectedTimeBlock}`
        : "",
    );
  }, [selectedTimeBlock, date, form]);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Submitted",
        description: "Your consultation is booked successfully.",
      });

      console.log(values);
    } catch (error) {
      console.log(error);
      toast({
        title: "Submission Failed",
        description:
          "There was an error booking your consultation. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-3 lg:w-5/6"
      >
        <div className="flex flex-col gap-3 md:flex-row md:gap-6">
          <div className="flex-1">
            <FormInput
              name="username"
              label="Name"
              placeholder='e.g. "Donayre, George Allen"'
              control={form.control}
            />
          </div>
          <div className="flex-1">
            <FormInput
              name="subjectAndSection"
              label="Subject & Section"
              placeholder='e.g. "Math 54 - QY"'
              control={form.control}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:gap-6">
          <div className="flex-1">
            <FormInput
              name="purpose"
              label="Purpose"
              placeholder="Enter your purpose"
              control={form.control}
            />
          </div>
          <div className="flex-1">
            <FormSelect
              name="consultationType"
              label="Consultation Type"
              control={form.control}
              options={["Face-to-face", "Online meet"]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:gap-6">
          <div className="flex-1">
            <FormInput
              name="professor"
              label="Professor"
              placeholder="Select a professor above"
              control={form.control}
              value={selectedProfessor || ""}
              readOnly
            />
          </div>
          <div className="flex-1">
            <FormInput
              name="dateAndTime"
              label="Date and Time"
              placeholder="Select a date and time"
              control={form.control}
              value={
                selectedTimeBlock
                  ? `${formatDateTime(date)} at ${selectedTimeBlock}`
                  : ""
              }
              readOnly
            />
          </div>
        </div>

        <FormInput
          name="additionalNotes"
          label="Additional Notes"
          placeholder="Tell us about your concern."
          control={form.control}
          as={Textarea}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
