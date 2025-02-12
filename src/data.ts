import { Consultation } from "./types";

export const consultations: Consultation[] = [
  {
    id: "c1",
    date: "2025-02-15",
    time: "10:00",
    consultationType: "Face-to-face",
    subjectAndSection: "MATH 54 - QY",
    professor: "Alec",
    status: "Approved",
    locationOrLink: "KA402",
  },
  {
    id: "c2",
    date: "2025-03-15",
    time: "14:00",
    consultationType: "Face-to-face",
    subjectAndSection: "MATH 55 - QY",
    professor: "Izzy",
    status: "Pending",
    locationOrLink: "KA401",
  },
  {
    id: "c3",
    date: "2025-03-15",
    time: "14:00",
    consultationType: "Face-to-face",
    subjectAndSection: "MATH 55 - QY",
    professor: "Izzy",
    status: "Cancelled",
    locationOrLink: "",
  },
  {
    id: "c4",
    date: "2025-03-15",
    time: "14:00",
    consultationType: "Online meet",
    subjectAndSection: "MATH 55 - QY",
    professor: "Izzy",
    status: "Pending",
    locationOrLink: "https://www.youtube.com/watch?v=s-WD0yjjiJc",
  },
];
