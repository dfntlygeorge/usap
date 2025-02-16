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

export const professors = [
  {
    id: "prof-001",
    name: "Dr. Juan Dela Cruz",
    schedule: {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [{ time: "2:00-4:00PM", maxSlots: 10 }],
      Friday: [
        { time: "12:00-1:00PM", maxSlots: 15 },
        { time: "9:00-10:00AM", maxSlots: 10 },
      ],
    },
  },
  {
    id: "prof-002",
    name: "Prof. Maria Santos",
    schedule: {
      Monday: [{ time: "8:00-9:30AM", maxSlots: 20 }],
      Tuesday: [{ time: "10:00-11:30AM", maxSlots: 15 }],
      Wednesday: [{ time: "8:00-9:30AM", maxSlots: 20 }],
      Thursday: [{ time: "10:00-11:30AM", maxSlots: 15 }],
      Friday: [],
    },
  },
  {
    id: "prof-003",
    name: "Engr. Ricardo Mendoza",
    schedule: {
      Monday: [{ time: "1:00-2:30PM", maxSlots: 12 }],
      Tuesday: [{ time: "3:00-4:30PM", maxSlots: 10 }],
      Wednesday: [{ time: "1:00-2:30PM", maxSlots: 12 }],
      Thursday: [{ time: "3:00-4:30PM", maxSlots: 10 }],
      Friday: [{ time: "10:00-11:00AM", maxSlots: 5 }],
    },
  },
];

export default professors;
