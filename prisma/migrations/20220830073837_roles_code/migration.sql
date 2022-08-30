/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `roles` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "roles" ADD COLUMN     "code" VARCHAR(50);

-- CreateIndex
CREATE UNIQUE INDEX "UQ_0e2c0e1b4b0b0b0b0b0b0b0b0b0" ON "roles"("code");
