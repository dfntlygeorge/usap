import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";

interface ConsultationCalendarProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

const ConsultationCalendar: React.FC<ConsultationCalendarProps> = ({
  date,
  setDate,
}) => (
  <div className="space-y-3">
    <Label htmlFor="date">
      Please select your preferred time and date of consultation.
    </Label>
    <Calendar
      id="date"
      mode="single"
      selected={date}
      onSelect={setDate}
      className="max-w-[255px] items-center rounded-md border"
      disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
    />
  </div>
);

export default ConsultationCalendar;
