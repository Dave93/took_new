-- AlterTable
ALTER TABLE "delivery_pricing" ADD COLUMN     "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" UUID,
ADD COLUMN     "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_by" UUID;

-- CreateIndex
CREATE INDEX "fki_FK_delivery_pricing_created_by" ON "delivery_pricing"("created_by");

-- CreateIndex
CREATE INDEX "fki_FK_delivery_pricing_updated_by" ON "delivery_pricing"("updated_by");

-- AddForeignKey
ALTER TABLE "delivery_pricing" ADD CONSTRAINT "FK_delivery_pricing_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_pricing" ADD CONSTRAINT "FK_delivery_pricing_updated_by" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
