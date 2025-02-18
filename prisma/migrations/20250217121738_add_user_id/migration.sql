/*
  Warnings:

  - Added the required column `updatedAt` to the `Professor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Professor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Professor" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "name" DROP NOT NULL;
