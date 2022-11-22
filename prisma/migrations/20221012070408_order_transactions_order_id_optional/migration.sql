/*
  Warnings:

  - Changed the type of `transaction_type` on the `order_transactions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "order_transaction_payment_type" AS ENUM ('cash', 'card');

-- AlterTable
ALTER TABLE "order_transactions" ADD COLUMN     "comment" STRING;
ALTER TABLE "order_transactions" ADD COLUMN     "transaction_payment_type" "order_transaction_payment_type" NOT NULL DEFAULT 'cash';
ALTER TABLE "order_transactions" ALTER COLUMN "order_id" DROP NOT NULL;
ALTER TABLE "order_transactions" DROP COLUMN "transaction_type";
ALTER TABLE "order_transactions" ADD COLUMN     "transaction_type" STRING NOT NULL;

-- DropEnum
DROP TYPE "order_transaction_type";
