-- DropForeignKey
ALTER TABLE "delivery_pricing" DROP CONSTRAINT "FK_delivery_pricing_created_by";

-- DropForeignKey
ALTER TABLE "delivery_pricing" DROP CONSTRAINT "FK_delivery_pricing_updated_by";

-- DropIndex
DROP INDEX "fki_FK_delivery_pricing_created_by";

-- DropIndex
DROP INDEX "fki_FK_delivery_pricing_updated_by";
