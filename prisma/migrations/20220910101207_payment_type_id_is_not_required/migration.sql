/*
  Warnings:

  - You are about to drop the column `delivery_name` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `delivery_phone` on the `orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "delivery_name",
DROP COLUMN "delivery_phone";
