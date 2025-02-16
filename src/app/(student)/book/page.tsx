"use client";

import React, { useEffect, useState } from "react";
import useConsultation from "@/hooks/useConsultation";
import ProfessorSelection from "@/components/ProfessorSelection";
import ConsultationCalendar from "@/components/ConsultationCalendar";
import TimeSlotsTable from "@/components/TimeSlotsTable";
import ConsultationForm from "@/components/ConsultationForm";
import { formatDateTime } from "@/lib/utils";

const Page = () => {
  const {
    date,
    setDate,
    selectedProfessor,
    setSelectedProfessor,
    filteredTimeBlocks,
  } = useConsultation();

  const [selectedTimeBlock, setSelectedTimeBlock] = useState<string | null>(
    null,
  );

  useEffect(() => {
    setSelectedTimeBlock(null);
  }, [date]);

  return (
    <section className="space-y-6 px-6 py-2 md:px-12 md:py-3">
      <ProfessorSelection setSelectedProfessor={setSelectedProfessor} />
      <ConsultationCalendar date={date} setDate={setDate} />
      <div className="w-full lg:w-5/6">
        <p className="bg-primary py-1 text-center font-semibold text-primary-foreground">
          {formatDateTime(date)}
        </p>
        <TimeSlotsTable
          filteredTimeBlocks={filteredTimeBlocks}
          selectedProfessor={selectedProfessor}
          setSelectedTimeBlock={setSelectedTimeBlock}
        />
      </div>
      <div>
        <ConsultationForm
          selectedProfessor={selectedProfessor}
          date={date}
          selectedTimeBlock={selectedTimeBlock}
        />
      </div>
    </section>
  );
};

export default Page;
