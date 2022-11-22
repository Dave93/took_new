-- CreateEnum
CREATE TYPE "order_transaction_type" AS ENUM ('cash', 'card');

-- CreateEnum
CREATE TYPE "order_transaction_status" AS ENUM ('pending', 'success', 'failed');

-- CreateTable
CREATE TABLE "order_transactions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "order_id" UUID NOT NULL,
    "terminal_id" UUID NOT NULL,
    "courier_id" UUID NOT NULL,
    "card_number" STRING,
    "amount" FLOAT8 NOT NULL DEFAULT 0,
    "status" "order_transaction_status" NOT NULL DEFAULT 'pending',
    "transaction_type" "order_transaction_type" NOT NULL DEFAULT 'cash',
    "error_text" STRING,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,

    CONSTRAINT "PK_order_transactions_id" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "order_transactions_terminal_id_idx" ON "order_transactions"("terminal_id");

-- CreateIndex
CREATE INDEX "order_transactions_order_id_idx" ON "order_transactions"("order_id");

-- CreateIndex
CREATE INDEX "order_transactions_courier_id_idx" ON "order_transactions"("courier_id");

-- AddForeignKey
ALTER TABLE "order_transactions" ADD CONSTRAINT "FK_order_transactions_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_transactions" ADD CONSTRAINT "FK_order_transactions_order_id" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_transactions" ADD CONSTRAINT "FK_order_transactions_terminal_id" FOREIGN KEY ("terminal_id") REFERENCES "terminals"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_transactions" ADD CONSTRAINT "FK_order_transactions_courier_id" FOREIGN KEY ("courier_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
