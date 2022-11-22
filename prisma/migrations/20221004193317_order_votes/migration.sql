-- CreateTable
CREATE TABLE "order_votes" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "order_id" UUID NOT NULL,
    "terminal_id" UUID NOT NULL,
    "courier_id" UUID NOT NULL,
    "is_voting" BOOL NOT NULL DEFAULT true,
    "is_chosen" BOOL NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,

    CONSTRAINT "PK_order_votes_id" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "order_votes_terminal_id_idx" ON "order_votes"("terminal_id");

-- CreateIndex
CREATE INDEX "order_votes_order_id_idx" ON "order_votes"("order_id");

-- AddForeignKey
ALTER TABLE "order_votes" ADD CONSTRAINT "FK_order_votes_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_votes" ADD CONSTRAINT "FK_order_votes_order_id" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_votes" ADD CONSTRAINT "FK_order_votes_terminal_id" FOREIGN KEY ("terminal_id") REFERENCES "terminals"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_votes" ADD CONSTRAINT "FK_order_votes_courier_id" FOREIGN KEY ("courier_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
