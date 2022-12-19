/*
  Warnings:

  - Added the required column `organization_id` to the `courier_terminal_balance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courier_terminal_balance" ADD COLUMN     "organization_id" UUID NOT NULL;

-- CreateIndex
CREATE INDEX "courier_terminal_balance_organization_id_idx" ON "courier_terminal_balance"("organization_id");

-- AddForeignKey
ALTER TABLE "courier_terminal_balance" ADD CONSTRAINT "FK_courier_terminal_balance_organization_id" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
