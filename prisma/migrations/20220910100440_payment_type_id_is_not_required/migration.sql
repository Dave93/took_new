/*
  Warnings:

  - You are about to drop the column `payment_type_id` on the `orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "payment_type_id";
