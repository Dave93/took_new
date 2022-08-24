/*
  Warnings:

  - The values [floot] on the enum `drive_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "drive_type_new" AS ENUM ('car', 'bike', 'foot');
ALTER TABLE "delivery_pricing" ALTER COLUMN "drive_type" DROP DEFAULT;
ALTER TABLE "delivery_pricing" ALTER COLUMN "drive_type" TYPE "drive_type_new" USING ("drive_type"::text::"drive_type_new");
ALTER TYPE "drive_type" RENAME TO "drive_type_old";
ALTER TYPE "drive_type_new" RENAME TO "drive_type";
DROP TYPE "drive_type_old";
ALTER TABLE "delivery_pricing" ALTER COLUMN "drive_type" SET DEFAULT 'car';
COMMIT;

-- DropForeignKey
ALTER TABLE "delivery_pricing" DROP CONSTRAINT "FK_delivery_pricing_updated_by";
