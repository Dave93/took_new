/*
  Warnings:

  - You are about to drop the `order_actions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `order_locations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `orders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "order_actions" DROP CONSTRAINT "FK_order_actions_created_by";

-- DropForeignKey
ALTER TABLE "order_actions" DROP CONSTRAINT "FK_order_actions_order_id";

-- DropForeignKey
ALTER TABLE "order_actions" DROP CONSTRAINT "FK_order_actions_terminal_id";

-- DropForeignKey
ALTER TABLE "order_locations" DROP CONSTRAINT "FK_order_locations_courier_id";

-- DropForeignKey
ALTER TABLE "order_locations" DROP CONSTRAINT "FK_order_locations_created_by";

-- DropForeignKey
ALTER TABLE "order_locations" DROP CONSTRAINT "FK_order_locations_order_id";

-- DropForeignKey
ALTER TABLE "order_locations" DROP CONSTRAINT "FK_order_locations_terminal_id";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "FK_orders_courier_id";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "FK_orders_created_by";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "FK_orders_customer_id";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "FK_orders_order_status_id";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "FK_orders_organization_id";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "FK_orders_updated_by";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_terminal_id_fkey";

-- DropTable
DROP TABLE "order_actions";

-- DropTable
DROP TABLE "order_locations";

-- DropTable
DROP TABLE "orders";
