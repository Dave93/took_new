-- CreateEnum
CREATE TYPE "organization_payment_types" AS ENUM ('cash', 'card', 'client');

-- AlterTable
ALTER TABLE "organization" ADD COLUMN     "payment_type" "organization_payment_types" NOT NULL DEFAULT 'client';
