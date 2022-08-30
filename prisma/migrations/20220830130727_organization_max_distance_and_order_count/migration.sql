-- AlterTable
ALTER TABLE "organization" ADD COLUMN     "max_active_order_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "max_distance" INTEGER NOT NULL DEFAULT 0;
