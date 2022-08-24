/*
  Warnings:

  - Added the required column `name` to the `work_schedules` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "organization" ADD COLUMN     "external_id" TEXT;

-- AlterTable
ALTER TABLE "work_schedules" ADD COLUMN     "name" TEXT NOT NULL;
