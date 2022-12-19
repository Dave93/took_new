-- CreateTable
CREATE TABLE "courier_terminal_balance" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "courier_id" UUID NOT NULL,
    "terminal_id" UUID NOT NULL,
    "balance" FLOAT8 NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,

    CONSTRAINT "PK_courier_terminal_balance_id" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "courier_terminal_balance_courier_id_idx" ON "courier_terminal_balance"("courier_id");

-- CreateIndex
CREATE INDEX "courier_terminal_balance_terminal_id_idx" ON "courier_terminal_balance"("terminal_id");

-- AddForeignKey
ALTER TABLE "courier_terminal_balance" ADD CONSTRAINT "FK_courier_terminal_balance_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courier_terminal_balance" ADD CONSTRAINT "FK_courier_terminal_balance_courier_id" FOREIGN KEY ("courier_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courier_terminal_balance" ADD CONSTRAINT "FK_courier_terminal_balance_terminal_id" FOREIGN KEY ("terminal_id") REFERENCES "terminals"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
