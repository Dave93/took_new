-- RenameForeignKey
ALTER TABLE "orders" RENAME CONSTRAINT "FK_orders_terminal_id" TO "orders_terminal_id_fkey";
