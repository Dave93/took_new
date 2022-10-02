-- AlterTable
ALTER TABLE "delivery_pricing" ADD COLUMN     "terminal_id" UUID;

-- AddForeignKey
ALTER TABLE "delivery_pricing" ADD CONSTRAINT "FK_delivery_pricing_terminal_id" FOREIGN KEY ("terminal_id") REFERENCES "terminals"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
