export type Consultation = {
  id: string;
  date: string;
  time: string;
  consultationType: "Face-to-face" | "Online meet";
  subjectAndSection: string;
  professor: string;
  status: "Approved" | "Cancelled" | "Pending";
  locationOrLink?: string;
};

export interface SearchProfProps {
  setSelectedProfessor: (professorName: string | null) => void;
}
