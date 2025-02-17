/*
  Warnings:

  - The primary key for the `Professor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `SAISId` on the `Professor` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Professor` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Professor` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Professor` table. All the data in the column will be lost.
  - You are about to drop the column `profilePicture` on the `Professor` table. All the data in the column will be lost.
  - You are about to drop the column `zodiacSign` on the `Professor` table. All the data in the column will be lost.
  - The primary key for the `Student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `SAISId` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `profilePicture` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `zodiacSign` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the `Consultation` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Professor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[studentId]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Professor` table without a default value. This is not possible if the table is not empty.
  - Made the column `department` on table `Professor` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `userId` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Made the column `degreeProgram` on table `Student` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'PROFESSOR');

-- DropForeignKey
ALTER TABLE "Consultation" DROP CONSTRAINT "Consultation_professorId_fkey";

-- DropForeignKey
ALTER TABLE "Consultation" DROP CONSTRAINT "Consultation_studentId_fkey";

-- DropIndex
DROP INDEX "Professor_SAISId_key";

-- DropIndex
DROP INDEX "Professor_email_key";

-- DropIndex
DROP INDEX "Student_SAISId_key";

-- DropIndex
DROP INDEX "Student_email_key";

-- AlterTable
ALTER TABLE "Professor" DROP CONSTRAINT "Professor_pkey",
DROP COLUMN "SAISId",
DROP COLUMN "email",
DROP COLUMN "id",
DROP COLUMN "name",
DROP COLUMN "profilePicture",
DROP COLUMN "zodiacSign",
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "department" SET NOT NULL,
ADD CONSTRAINT "Professor_pkey" PRIMARY KEY ("userId");

-- AlterTable
ALTER TABLE "Student" DROP CONSTRAINT "Student_pkey",
DROP COLUMN "SAISId",
DROP COLUMN "email",
DROP COLUMN "name",
DROP COLUMN "profilePicture",
DROP COLUMN "zodiacSign",
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "degreeProgram" SET NOT NULL,
ADD CONSTRAINT "Student_pkey" PRIMARY KEY ("userId");

-- DropTable
DROP TABLE "Consultation";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profilePicture" TEXT,
    "SAISId" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_SAISId_key" ON "User"("SAISId");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_userId_key" ON "Professor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_userId_key" ON "Student"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_studentId_key" ON "Student"("studentId");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
