-- AddForeignKey
ALTER TABLE "delivery_pricing" ADD CONSTRAINT "FK_delivery_pricing_updated_by" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
