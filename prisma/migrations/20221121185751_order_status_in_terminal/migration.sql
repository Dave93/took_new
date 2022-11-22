-- AlterTable
ALTER TABLE "order_status" ADD COLUMN     "in_terminal" BOOL NOT NULL DEFAULT false;
ALTER TABLE "order_status" ADD COLUMN     "on_way" BOOL NOT NULL DEFAULT false;
