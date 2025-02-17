-- CreateEnum
CREATE TYPE "ConsultationStatus" AS ENUM ('Pending', 'Approved', 'Cancelled');

-- CreateTable
CREATE TABLE "Consultation" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "consultationType" TEXT NOT NULL,
    "subjectAndSection" TEXT NOT NULL,
    "status" "ConsultationStatus" NOT NULL,
    "locationOrLink" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "professorId" TEXT NOT NULL,

    CONSTRAINT "Consultation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
