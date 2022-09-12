-- CreateIndex
CREATE INDEX "fki_order_actions_created_at" ON "order_actions"("created_at");

-- CreateIndex
CREATE INDEX "fki_orders_created_at" ON "orders"("created_at");
