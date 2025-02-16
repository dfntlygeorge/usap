import SearchProf from "./SearchProf";
import { Label } from "./ui/label";

interface ProfessorSelectionProps {
  setSelectedProfessor: (professor: string | null) => void;
}

const ProfessorSelection: React.FC<ProfessorSelectionProps> = ({
  setSelectedProfessor,
}) => {
  return (
    <div className="flex flex-col gap-3 md:w-1/2">
      <Label htmlFor="professor">Who would you like to consult?</Label>
      <SearchProf setSelectedProfessor={setSelectedProfessor} />
    </div>
  );
};

export default ProfessorSelection;
