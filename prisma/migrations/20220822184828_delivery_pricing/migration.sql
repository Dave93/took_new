-- CreateEnum
CREATE TYPE "drive_type" AS ENUM ('car', 'bike', 'floot');

-- CreateTable
CREATE TABLE "delivery_pricing" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "active" BOOLEAN NOT NULL DEFAULT true,
    "default" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "drive_type" "drive_type" NOT NULL DEFAULT 'car',
    "days" TEXT[],
    "start_time" TEXT NOT NULL,
    "end_time" TEXT NOT NULL,
    "min_price" INTEGER,
    "rules" JSONB NOT NULL,
    "price_per_km" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "PK_delivery_pricing_id" PRIMARY KEY ("id")
);
