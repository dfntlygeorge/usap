import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Consultation } from "@/types";
import Link from "next/link";
import { formatDateAndTime } from "@/lib/utils";

// type Prop = {
//   consultations: Consultation[];
// };

const statusStyles: Record<string, string> = {
  Approved: "bg-[#EBF9F1] text-[#1F9254]",
  Pending: "bg-[#FEF2E5] text-[#CD6200]",
  Cancelled: "bg-[#FBE7E8] text-[#A30D11]",
};

const DashboardTable = ({
  consultations,
}: {
  consultations: Consultation[];
}) => {
  return (
    <Table>
      <TableCaption>A list of your consultations.</TableCaption>
      <TableHeader>
        <TableRow className="bg-upGreen">
          <TableHead>Date & Time</TableHead>
          <TableHead>Professor</TableHead>
          <TableHead className="">Subject & Section</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Location/Link</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {consultations.map((consultation) => (
          <TableRow key={consultation.id}>
            <TableCell>
              {formatDateAndTime(consultation.date, consultation.time)}
            </TableCell>
            <TableCell className="flex items-center gap-2">
              <Image src={"/prof-icon.svg"} alt="icon" width={27} height={27} />
              {consultation.professor}
            </TableCell>
            <TableCell className="uppercase">
              {consultation.subjectAndSection}
            </TableCell>
            <TableCell>{consultation.consultationType}</TableCell>
            <TableCell>
              {consultation.locationOrLink?.startsWith("http") ? (
                <Link
                  href={consultation.locationOrLink}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meeting link
                </Link>
              ) : (
                consultation.locationOrLink || "Awaiting details"
              )}
            </TableCell>
            <TableCell>
              <span
                className={`rounded-full px-3 py-2 ${statusStyles[consultation.status] || "bg-gray-100 text-gray-700"}`}
              >
                {consultation.status}
              </span>
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                {/* TODO: DELETE request for deleting a row in consultation table. */}
                <button>
                  <Image
                    src={"/trash.svg"}
                    alt="delete button"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DashboardTable;
