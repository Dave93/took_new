/*
  Warnings:

  - A unique constraint covering the columns `[external_id]` on the table `terminals` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "terminals_external_id_key" ON "terminals"("external_id");
