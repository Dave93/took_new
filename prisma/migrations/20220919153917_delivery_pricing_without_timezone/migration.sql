/*
  Warnings:

  - Changed the type of `start_time` on the `delivery_pricing` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `end_time` on the `delivery_pricing` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
-- ALTER TABLE "delivery_pricing" DROP COLUMN "start_time";
-- ALTER TABLE "delivery_pricing" ADD COLUMN     "start_time" TIME NOT NULL;
-- ALTER TABLE "delivery_pricing" DROP COLUMN "end_time";
-- ALTER TABLE "delivery_pricing" ADD COLUMN     "end_time" TIME NOT NULL;
