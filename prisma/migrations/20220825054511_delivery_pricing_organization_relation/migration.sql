-- AddForeignKey
ALTER TABLE "delivery_pricing" ADD CONSTRAINT "FK_delivery_pricing_organization_id" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
