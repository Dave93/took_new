-- AlterTable
ALTER TABLE "customers_comments" ADD COLUMN     "image_id" UUID;
ALTER TABLE "customers_comments" ADD COLUMN     "voice_id" UUID;

-- CreateTable
CREATE TABLE "assets" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "model" STRING NOT NULL,
    "file_name" STRING NOT NULL,
    "model_id" STRING NOT NULL,

    CONSTRAINT "PK_assets_id" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "customers_comments" ADD CONSTRAINT "FK_customers_comments_voice_id" FOREIGN KEY ("voice_id") REFERENCES "assets"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers_comments" ADD CONSTRAINT "FK_customers_comments_image_id" FOREIGN KEY ("image_id") REFERENCES "assets"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
