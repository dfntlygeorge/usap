/*
  Warnings:

  - You are about to drop the column `profilePicture` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Professor" ADD COLUMN     "profilePicture" TEXT;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "profilePicture" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "profilePicture";
