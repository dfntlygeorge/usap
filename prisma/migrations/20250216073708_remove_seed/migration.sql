-- AlterTable
ALTER TABLE "User" ADD COLUMN     "image" TEXT,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "SAISId" DROP NOT NULL,
ALTER COLUMN "role" SET DEFAULT 'STUDENT';
