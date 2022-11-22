/*
  Warnings:

  - Added the required column `organization_id` to the `order_transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order_transactions" ADD COLUMN     "organization_id" UUID NOT NULL;

-- CreateIndex
CREATE INDEX "order_transactions_organization_id_idx" ON "order_transactions"("organization_id");

-- AddForeignKey
ALTER TABLE "order_transactions" ADD CONSTRAINT "FK_order_transactions_organization_id" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
