-- CreateTable
CREATE TABLE "Consultation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "professorId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "consultationType" TEXT NOT NULL,
    "subjectAndSection" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Pending',
    "locationOrLink" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Consultation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "schedule" JSONB NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
