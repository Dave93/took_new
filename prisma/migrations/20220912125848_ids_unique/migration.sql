-- CreateTable
CREATE TABLE "orders" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "organization_id" UUID NOT NULL,
    "customer_id" UUID NOT NULL,
    "courier_id" UUID NOT NULL,
    "terminal_id" UUID NOT NULL,
    "order_status_id" UUID NOT NULL,
    "delivery_type" "drive_type" NOT NULL DEFAULT 'car',
    "from_lat" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "from_lon" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "to_lat" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "to_lon" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "pre_distance" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "pre_duration" INTEGER NOT NULL DEFAULT 0,
    "order_number" TEXT NOT NULL,
    "distance" DOUBLE PRECISION DEFAULT 0,
    "duration" INTEGER DEFAULT 0,
    "order_price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "delivery_price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "delivery_address" TEXT NOT NULL,
    "delivery_date" TIMESTAMPTZ(5) NOT NULL,
    "finished_date" TIMESTAMPTZ(5),
    "delivery_comment" TEXT,
    "payment_type" TEXT NOT NULL,
    "cancel_reason" TEXT,
    "order_items" JSONB,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_orders_id_terminal_id" PRIMARY KEY ("id","terminal_id")
);

-- CreateTable
CREATE TABLE "order_actions" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "order_id" UUID NOT NULL,
    "duration" INTEGER NOT NULL DEFAULT 0,
    "action" TEXT,
    "action_text" TEXT NOT NULL,
    "terminal_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,

    CONSTRAINT "PK_order_actions_id_terminal_id" PRIMARY KEY ("id","terminal_id")
);

-- CreateTable
CREATE TABLE "order_locations" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "order_id" UUID NOT NULL,
    "terminal_id" UUID NOT NULL,
    "courier_id" UUID NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "lon" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,

    CONSTRAINT "PK_order_locations_id_terminal_id" PRIMARY KEY ("id","terminal_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "orders_id_key" ON "orders"("id");

-- CreateIndex
CREATE UNIQUE INDEX "order_actions_id_key" ON "order_actions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "order_locations_id_key" ON "order_locations"("id");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "FK_orders_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "FK_orders_updated_by" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "FK_orders_customer_id" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "FK_orders_courier_id" FOREIGN KEY ("courier_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "FK_orders_order_status_id" FOREIGN KEY ("order_status_id") REFERENCES "order_status"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "FK_orders_organization_id" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_terminal_id_fkey" FOREIGN KEY ("terminal_id") REFERENCES "terminals"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_actions" ADD CONSTRAINT "FK_order_actions_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_actions" ADD CONSTRAINT "FK_order_actions_order_id" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_actions" ADD CONSTRAINT "FK_order_actions_terminal_id" FOREIGN KEY ("terminal_id") REFERENCES "terminals"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_locations" ADD CONSTRAINT "FK_order_locations_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_locations" ADD CONSTRAINT "FK_order_locations_order_id" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_locations" ADD CONSTRAINT "FK_order_locations_terminal_id" FOREIGN KEY ("terminal_id") REFERENCES "terminals"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_locations" ADD CONSTRAINT "FK_order_locations_courier_id" FOREIGN KEY ("courier_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
