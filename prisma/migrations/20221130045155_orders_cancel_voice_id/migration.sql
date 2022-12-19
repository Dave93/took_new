-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "cancel_voice_id" UUID;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "FK_orders_voice_id" FOREIGN KEY ("cancel_voice_id") REFERENCES "assets"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
