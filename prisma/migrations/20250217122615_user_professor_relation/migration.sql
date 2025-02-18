/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Professor` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `Professor` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Professor" ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Professor_userId_key" ON "Professor"("userId");

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
