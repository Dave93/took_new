-- CreateTable
CREATE TABLE "order_actions" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "order_id" UUID NOT NULL,
    "action" TEXT,
    "action_text" TEXT NOT NULL,
    "terminal_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,

    CONSTRAINT "PK_order_actions_id" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "order_actions" ADD CONSTRAINT "FK_order_actions_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_actions" ADD CONSTRAINT "FK_order_actions_order_id" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_actions" ADD CONSTRAINT "FK_order_actions_terminal_id" FOREIGN KEY ("terminal_id") REFERENCES "terminals"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
