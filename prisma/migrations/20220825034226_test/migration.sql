/*
  Warnings:

  - Changed the type of `start_time` on the `work_schedules` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `end_time` on the `work_schedules` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `max_start_time` on the `work_schedules` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "work_schedules" DROP COLUMN "start_time",
ADD COLUMN     "start_time" TIME(5) NOT NULL,
DROP COLUMN "end_time",
ADD COLUMN     "end_time" TIME(5) NOT NULL,
DROP COLUMN "max_start_time",
ADD COLUMN     "max_start_time" TIME(5) NOT NULL,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(5),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMP(5);
