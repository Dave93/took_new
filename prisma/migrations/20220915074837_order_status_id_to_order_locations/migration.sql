/*
  Warnings:

  - Added the required column `order_status_id` to the `order_locations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order_locations" ADD COLUMN     "order_status_id" UUID NOT NULL;
