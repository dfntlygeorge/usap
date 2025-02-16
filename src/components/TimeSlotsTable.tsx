import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface TimeSlotsTableProps {
  filteredTimeBlocks: Array<{ time: string; maxSlots: number }>;
  selectedProfessor: string | null;
  setSelectedTimeBlock: (time: string) => void;
}

const TimeSlotsTable: React.FC<TimeSlotsTableProps> = ({
  filteredTimeBlocks,
  selectedProfessor,
  setSelectedTimeBlock,
}) => (
  <Table className="border border-gray-300">
    <TableHeader>
      <TableRow>
        <TableHead className="border-r text-center text-black">Time</TableHead>
        <TableHead className="text-center text-black">
          Available Slots
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {filteredTimeBlocks.length > 0 ? (
        filteredTimeBlocks.map((block, index) => (
          <TableRow key={index}>
            <TableCell className="border-r text-center">
              <Button
                onClick={() => setSelectedTimeBlock(block.time)}
                className="focus:outline-none focus:ring-2 focus:ring-slate-800"
              >
                {block.time}
              </Button>
            </TableCell>
            <TableCell className="text-center">{block.maxSlots}</TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={2} className="text-center">
            {!selectedProfessor
              ? "Please select a professor."
              : "No Available time slots."}
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  </Table>
);

export default TimeSlotsTable;
