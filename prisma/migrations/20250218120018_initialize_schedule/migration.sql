/*
  Warnings:

  - Made the column `schedule` on table `Professor` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Professor" ALTER COLUMN "schedule" SET NOT NULL,
ALTER COLUMN "schedule" SET DEFAULT '{}';
