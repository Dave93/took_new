-- CreateEnum
CREATE TYPE "organization_payment_types" AS ENUM ('cash', 'card', 'client');

-- CreateEnum
CREATE TYPE "organization_system_type" AS ENUM ('iiko', 'r_keeper', 'jowi');

-- CreateEnum
CREATE TYPE "drive_type" AS ENUM ('car', 'bike', 'foot');

-- CreateEnum
CREATE TYPE "user_status" AS ENUM ('active', 'blocked', 'inactive');

-- CreateEnum
CREATE TYPE "price_type" AS ENUM ('fixed', 'perMonth');

-- CreateEnum
CREATE TYPE "status" AS ENUM ('draft', 'published', 'archived');

-- CreateEnum
CREATE TYPE "sale_type" AS ENUM ('buy', 'rent', 'new_building');

-- CreateEnum
CREATE TYPE "type" AS ENUM ('string', 'integer', 'float', 'boolean', 'date', 'datetime', 'enum', 'json');

-- CreateEnum
CREATE TYPE "work_schedule_entry_status" AS ENUM ('open', 'closed');

-- CreateTable
CREATE TABLE "migrations" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "timestamp" INT8 NOT NULL,
    "name" STRING NOT NULL,

    CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "otp" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "otp" STRING(6) NOT NULL,
    "expiry_date" TIMESTAMPTZ(5) NOT NULL,
    "verified" BOOL NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_32556d9d7b22031d7d0e1fd6723" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "permissions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "slug" STRING(160) NOT NULL,
    "description" STRING(60) NOT NULL,
    "active" BOOL NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_920331560282b8bd21bb02290df" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" STRING(50) NOT NULL,
    "code" STRING(50),
    "active" BOOL NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles_permissions" (
    "role_id" UUID NOT NULL,
    "permission_id" UUID NOT NULL,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_0cd11f0b35c4d348c6ebb9b36b7" PRIMARY KEY ("role_id","permission_id")
);

-- CreateTable
CREATE TABLE "typeorm_metadata" (
    "type" STRING NOT NULL,
    "database" STRING,
    "schema" STRING,
    "table" STRING,
    "name" STRING,
    "value" STRING
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "phone" STRING(20) NOT NULL,
    "first_name" STRING(100),
    "last_name" STRING(100),
    "password" STRING,
    "is_super_user" BOOL NOT NULL DEFAULT false,
    "status" "user_status" NOT NULL,
    "drive_type" "drive_type",
    "card_name" STRING(100),
    "card_number" STRING(100),
    "birth_date" TIMESTAMPTZ(5),
    "car_model" STRING(100),
    "car_number" STRING(100),
    "is_online" BOOL NOT NULL DEFAULT false,
    "latitude" FLOAT8 DEFAULT 0,
    "longitude" FLOAT8 DEFAULT 0,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_permissions" (
    "user_id" UUID NOT NULL,
    "permission_id" UUID NOT NULL,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_7f3736984cd8546a1e418005561" PRIMARY KEY ("user_id","permission_id")
);

-- CreateTable
CREATE TABLE "users_roles" (
    "user_id" UUID NOT NULL,
    "role_id" UUID NOT NULL,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_c525e9373d63035b9919e578a9c" PRIMARY KEY ("user_id","role_id")
);

-- CreateTable
CREATE TABLE "city" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" STRING(255) NOT NULL,
    "parent_id" UUID,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_city_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,
    "price" INT4 NOT NULL DEFAULT 0,
    "price_type" "price_type" NOT NULL DEFAULT 'fixed',
    "status" "status" NOT NULL DEFAULT 'draft',
    "sale_type" "sale_type" NOT NULL DEFAULT 'buy',
    "latitude" FLOAT8 NOT NULL DEFAULT 0,
    "longitude" FLOAT8 NOT NULL DEFAULT 0,
    "address" STRING NOT NULL DEFAULT '',
    "comments_count" INT4 NOT NULL DEFAULT 0,
    "city_id" UUID NOT NULL,

    CONSTRAINT "PK_post_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post_prop_types" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "sale_type" "sale_type" NOT NULL DEFAULT 'buy',
    "name" STRING NOT NULL,
    "type" "type" NOT NULL DEFAULT 'string',
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_post_prop_types_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "delivery_pricing" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "active" BOOL NOT NULL DEFAULT true,
    "default" BOOL NOT NULL DEFAULT false,
    "name" STRING NOT NULL,
    "drive_type" "drive_type" NOT NULL DEFAULT 'car',
    "days" STRING[],
    "start_time" TIMETZ(5) NOT NULL,
    "end_time" TIMETZ(5) NOT NULL,
    "min_price" INT4,
    "rules" JSONB NOT NULL,
    "price_per_km" INT4 NOT NULL DEFAULT 0,
    "organization_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_delivery_pricing_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_schedules" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" STRING NOT NULL,
    "active" BOOL NOT NULL DEFAULT true,
    "organization_id" UUID NOT NULL,
    "days" STRING[],
    "start_time" TIMETZ(5) NOT NULL,
    "end_time" TIMETZ(5) NOT NULL,
    "max_start_time" TIMETZ(5) NOT NULL,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_work_schedules_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "terminals" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" STRING NOT NULL,
    "active" BOOL NOT NULL DEFAULT true,
    "phone" STRING,
    "address" STRING,
    "latitude" FLOAT8 NOT NULL DEFAULT 0,
    "longitude" FLOAT8 NOT NULL DEFAULT 0,
    "external_id" STRING NOT NULL,
    "organization_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_terminals_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organization" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" STRING NOT NULL,
    "external_id" STRING,
    "active" BOOL NOT NULL DEFAULT true,
    "system_type" "organization_system_type" NOT NULL DEFAULT 'iiko',
    "phone" STRING NOT NULL,
    "iiko_login" STRING,
    "webhook" STRING,
    "group_id" STRING,
    "apelsin_login" STRING,
    "apelsin_password" STRING,
    "sender_name" STRING,
    "sender_number" STRING,
    "description" STRING,
    "max_distance" INT4 NOT NULL DEFAULT 0,
    "max_active_order_count" INT4 NOT NULL DEFAULT 0,
    "payment_type" "organization_payment_types" NOT NULL DEFAULT 'client',
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_organization_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_terminals" (
    "user_id" UUID NOT NULL,
    "terminal_id" UUID NOT NULL,

    CONSTRAINT "PK_users_terminals_id" PRIMARY KEY ("user_id","terminal_id")
);

-- CreateTable
CREATE TABLE "users_work_schedules" (
    "user_id" UUID NOT NULL,
    "work_schedule_id" UUID NOT NULL,

    CONSTRAINT "PK_users_work_schedules_id" PRIMARY KEY ("user_id","work_schedule_id")
);

-- CreateTable
CREATE TABLE "work_schedule_entries" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "work_schedule_id" UUID NOT NULL,
    "date_start" TIMESTAMPTZ(5) NOT NULL,
    "date_finish" TIMESTAMPTZ(5),
    "duration" INT4 NOT NULL DEFAULT 0,
    "ip_open" STRING,
    "ip_close" STRING,
    "lat_open" FLOAT8 NOT NULL DEFAULT 0,
    "lat_close" FLOAT8 NOT NULL DEFAULT 0,
    "lon_open" FLOAT8 NOT NULL DEFAULT 0,
    "lon_close" FLOAT8 NOT NULL DEFAULT 0,
    "current_status" "work_schedule_entry_status" NOT NULL DEFAULT 'open',
    "late" BOOL NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_work_schedule_entries_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" STRING NOT NULL,
    "phone" STRING NOT NULL,

    CONSTRAINT "PK_customer_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers_comments" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "customer_id" UUID NOT NULL,
    "comment" STRING NOT NULL,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,

    CONSTRAINT "PK_customers_comments_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_status" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" STRING NOT NULL,
    "sort" INT4 NOT NULL DEFAULT 0,
    "organization_id" UUID NOT NULL,
    "color" STRING,
    "finish" BOOL NOT NULL DEFAULT false,
    "cancel" BOOL NOT NULL DEFAULT false,
    "waiting" BOOL NOT NULL DEFAULT false,

    CONSTRAINT "PK_order_status_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "organization_id" UUID NOT NULL,
    "customer_id" UUID NOT NULL,
    "courier_id" UUID NOT NULL,
    "terminal_id" UUID NOT NULL,
    "order_status_id" UUID NOT NULL,
    "delivery_type" "drive_type" NOT NULL DEFAULT 'car',
    "from_lat" FLOAT8 NOT NULL DEFAULT 0,
    "from_lon" FLOAT8 NOT NULL DEFAULT 0,
    "to_lat" FLOAT8 NOT NULL DEFAULT 0,
    "to_lon" FLOAT8 NOT NULL DEFAULT 0,
    "pre_distance" FLOAT8 NOT NULL DEFAULT 0,
    "pre_duration" INT4 NOT NULL DEFAULT 0,
    "order_number" STRING NOT NULL,
    "distance" FLOAT8 DEFAULT 0,
    "duration" INT4 DEFAULT 0,
    "order_price" FLOAT8 NOT NULL DEFAULT 0,
    "delivery_price" FLOAT8 NOT NULL DEFAULT 0,
    "delivery_address" STRING NOT NULL,
    "delivery_date" TIMESTAMPTZ(5) NOT NULL,
    "finished_date" TIMESTAMPTZ(5),
    "delivery_comment" STRING,
    "payment_type" STRING NOT NULL,
    "cancel_reason" STRING,
    "order_items" JSONB,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_orders_id_terminal_id" PRIMARY KEY ("id","terminal_id")
);

-- CreateTable
CREATE TABLE "order_actions" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "order_id" UUID NOT NULL,
    "duration" INT4 NOT NULL DEFAULT 0,
    "action" STRING,
    "action_text" STRING NOT NULL,
    "terminal_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,

    CONSTRAINT "PK_order_actions_id_terminal_id" PRIMARY KEY ("id","terminal_id")
);

-- CreateTable
CREATE TABLE "order_locations" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "order_id" UUID NOT NULL,
    "terminal_id" UUID NOT NULL,
    "courier_id" UUID NOT NULL,
    "lat" FLOAT8 NOT NULL DEFAULT 0,
    "lon" FLOAT8 NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,

    CONSTRAINT "PK_order_locations_id_terminal_id" PRIMARY KEY ("id","terminal_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UQ_d090ad82a0e97ce764c06c7b312" ON "permissions"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "UQ_648e3f5447f725579d7d4ffdfb7" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UQ_0e2c0e1b4b0b0b0b0b0b0b0b0b0" ON "roles"("code");

-- CreateIndex
CREATE UNIQUE INDEX "UQ_a000cca60bcf04454e727699490" ON "users"("phone");

-- CreateIndex
CREATE INDEX "fki_FK_city_created_by" ON "city"("created_by");

-- CreateIndex
CREATE INDEX "fki_FK_city_updated_by" ON "city"("updated_by");

-- CreateIndex
CREATE INDEX "fki_FK_post_created_by" ON "post"("created_by");

-- CreateIndex
CREATE INDEX "fki_FK_post_updated_by" ON "post"("updated_by");

-- CreateIndex
CREATE INDEX "fki_FK_post_prop_types_created_by" ON "post_prop_types"("created_by");

-- CreateIndex
CREATE INDEX "fki_FK_delivery_pricing_created_by" ON "delivery_pricing"("created_by");

-- CreateIndex
CREATE INDEX "fki_FK_delivery_pricing_updated_by" ON "delivery_pricing"("updated_by");

-- CreateIndex
CREATE UNIQUE INDEX "terminals_external_id_key" ON "terminals"("external_id");

-- CreateIndex
CREATE INDEX "fki_work_schedule_entries_current_status" ON "work_schedule_entries"("current_status");

-- CreateIndex
CREATE INDEX "fki_work_schedule_entries_user_id" ON "work_schedule_entries"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "orders_id_key" ON "orders"("id");

-- CreateIndex
CREATE UNIQUE INDEX "order_actions_id_key" ON "order_actions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "order_locations_id_key" ON "order_locations"("id");

-- AddForeignKey
ALTER TABLE "otp" ADD CONSTRAINT "fk_otp_user" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permissions" ADD CONSTRAINT "FK_c398f7100db3e0d9b6a6cd6beaf" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permissions" ADD CONSTRAINT "FK_58fae278276b7c2c6dde2bc19a5" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles" ADD CONSTRAINT "FK_4a39f3095781cdd9d6061afaae5" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles" ADD CONSTRAINT "FK_747b580d73db0ad78963d78b076" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_permissions" ADD CONSTRAINT "FK_a3f5b9874c55ee69fdd01531e14" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_permissions" ADD CONSTRAINT "FK_337aa8dba227a1fe6b73998307b" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_permissions" ADD CONSTRAINT "FK_7d2dad9f14eddeb09c256fea719" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_permissions" ADD CONSTRAINT "FK_d1ba552f47d08621fdd2bbb0124" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_permissions" ADD CONSTRAINT "FK_1139f007de51cfe686c4b2abb43" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_permissions" ADD CONSTRAINT "FK_b09b9a210c60f41ec7b453758e9" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_permissions" ADD CONSTRAINT "FK_997b44464224900ee2727190813" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_permissions" ADD CONSTRAINT "FK_4de7d0b175f702be3be55270023" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_roles" ADD CONSTRAINT "FK_471c7c874c2a37052f53d920803" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_roles" ADD CONSTRAINT "FK_1cf664021f00b9cc1ff95e17de4" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_roles" ADD CONSTRAINT "FK_88da3fa85d1220b0ac18b08ce47" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_roles" ADD CONSTRAINT "FK_e4435209df12bc1f001e5360174" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "city" ADD CONSTRAINT "FK_city_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "city" ADD CONSTRAINT "FK_city_updated_by" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "city" ADD CONSTRAINT "FK_city_parent_id" FOREIGN KEY ("parent_id") REFERENCES "city"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "FK_post_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "FK_post_updated_by" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "FK_post_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "FK_post_city_id" FOREIGN KEY ("city_id") REFERENCES "city"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_prop_types" ADD CONSTRAINT "FK_post_prop_types_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_prop_types" ADD CONSTRAINT "FK_post_prop_types_updated_by" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_pricing" ADD CONSTRAINT "FK_delivery_pricing_organization_id" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_pricing" ADD CONSTRAINT "FK_delivery_pricing_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "delivery_pricing" ADD CONSTRAINT "FK_delivery_pricing_updated_by" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_schedules" ADD CONSTRAINT "FK_work_schedules_organization_id" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_schedules" ADD CONSTRAINT "FK_work_schedules_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_schedules" ADD CONSTRAINT "FK_work_schedules_updated_by" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "terminals" ADD CONSTRAINT "FK_terminals_organization_id" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organization" ADD CONSTRAINT "FK_organization_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organization" ADD CONSTRAINT "FK_organization_updated_by" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_terminals" ADD CONSTRAINT "FK_users_terminals_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_terminals" ADD CONSTRAINT "FK_users_terminals_terminal_id" FOREIGN KEY ("terminal_id") REFERENCES "terminals"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_work_schedules" ADD CONSTRAINT "FK_users_work_schedules_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_work_schedules" ADD CONSTRAINT "FK_users_work_schedules_work_schedule_id" FOREIGN KEY ("work_schedule_id") REFERENCES "work_schedules"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_schedule_entries" ADD CONSTRAINT "FK_work_schedule_entries_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_schedule_entries" ADD CONSTRAINT "FK_work_schedule_entries_updated_by" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_schedule_entries" ADD CONSTRAINT "FK_work_schedule_entries_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_schedule_entries" ADD CONSTRAINT "FK_work_schedule_entries_work_schedule_id" FOREIGN KEY ("work_schedule_id") REFERENCES "work_schedules"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers_comments" ADD CONSTRAINT "FK_customers_comments_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers_comments" ADD CONSTRAINT "FK_customers_comments_customer_id" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_status" ADD CONSTRAINT "FK_order_status_organization_id" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

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
