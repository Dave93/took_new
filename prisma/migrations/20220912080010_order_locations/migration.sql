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

    CONSTRAINT "PK_order_locations_id" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "order_locations" ADD CONSTRAINT "FK_order_locations_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_locations" ADD CONSTRAINT "FK_order_locations_order_id" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_locations" ADD CONSTRAINT "FK_order_locations_terminal_id" FOREIGN KEY ("terminal_id") REFERENCES "terminals"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_locations" ADD CONSTRAINT "FK_order_locations_courier_id" FOREIGN KEY ("courier_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
