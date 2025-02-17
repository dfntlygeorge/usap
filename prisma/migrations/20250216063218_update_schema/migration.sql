/*
  Warnings:

  - Made the column `notes` on table `Consultation` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `zodiacSign` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Consultation" ALTER COLUMN "notes" SET NOT NULL;

-- AlterTable
ALTER TABLE "Professor" ADD COLUMN     "zodiacSign" TEXT NOT NULL;
