import { useState, useMemo } from "react";
import { professors } from "@/data";

const useConsultation = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedProfessor, setSelectedProfessor] = useState<string | null>(
    null,
  );

  const filteredTimeBlocks = useMemo(() => {
    if (!selectedProfessor || !date) return [];

    const professor = professors.find(
      (prof) => prof.name === selectedProfessor,
    );
    if (!professor) return [];

    const dayMap = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const selectedDay = dayMap[
      date.getDay()
    ] as keyof typeof professor.schedule;

    return professor.schedule[selectedDay] || [];
  }, [selectedProfessor, date]);

  return {
    date,
    setDate,
    selectedProfessor,
    setSelectedProfessor,
    filteredTimeBlocks,
  };
};

export default useConsultation;
