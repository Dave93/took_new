-- CreateTable
CREATE TABLE "manager_withdraw" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "manager_id" UUID NOT NULL,
    "courier_id" UUID NOT NULL,
    "terminal_id" UUID NOT NULL,
    "organization_id" UUID NOT NULL,
    "amount" FLOAT8 NOT NULL DEFAULT 0,
    "amount_before" FLOAT8 NOT NULL DEFAULT 0,
    "amount_after" FLOAT8 NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,

    CONSTRAINT "PK_manager_withdraw_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "manager_withdraw_transactions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "withdraw_id" UUID NOT NULL,
    "transaction_id" UUID NOT NULL,
    "amount" FLOAT8 NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_manager_withdraw_transactions_id" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "manager_withdraw_manager_id_idx" ON "manager_withdraw"("manager_id");

-- CreateIndex
CREATE INDEX "manager_withdraw_terminal_id_idx" ON "manager_withdraw"("terminal_id");

-- CreateIndex
CREATE INDEX "manager_withdraw_organization_id_idx" ON "manager_withdraw"("organization_id");

-- AddForeignKey
ALTER TABLE "manager_withdraw" ADD CONSTRAINT "FK_manager_withdraw_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manager_withdraw" ADD CONSTRAINT "FK_manager_withdraw_manager_id" FOREIGN KEY ("manager_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manager_withdraw" ADD CONSTRAINT "FK_manager_withdraw_organization_id" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manager_withdraw" ADD CONSTRAINT "FK_manager_withdraw_courier_id" FOREIGN KEY ("courier_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manager_withdraw" ADD CONSTRAINT "FK_manager_withdraw_terminal_id" FOREIGN KEY ("terminal_id") REFERENCES "terminals"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manager_withdraw_transactions" ADD CONSTRAINT "FK_manager_withdraw_transactions_withdraw_id" FOREIGN KEY ("withdraw_id") REFERENCES "manager_withdraw"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manager_withdraw_transactions" ADD CONSTRAINT "FK_manager_withdraw_transactions_transaction_id" FOREIGN KEY ("transaction_id") REFERENCES "order_transactions"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
