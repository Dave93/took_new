-- AlterTable
ALTER TABLE "delivery_pricing" ADD COLUMN     "payment_type" "organization_payment_types" DEFAULT 'client';
