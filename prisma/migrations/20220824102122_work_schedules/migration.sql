/*
  Warnings:

  - Added the required column `organization_id` to the `delivery_pricing` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "organization_system_type" AS ENUM ('iiko', 'r_keeper', 'jowi');

-- AlterTable
ALTER TABLE "delivery_pricing" ADD COLUMN     "organization_id" UUID NOT NULL;

-- CreateTable
CREATE TABLE "organization" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "system_type" "organization_system_type" NOT NULL DEFAULT 'iiko',
    "phone" TEXT NOT NULL,
    "webhook" TEXT,
    "group_id" TEXT,
    "apelsin_login" TEXT,
    "apelsin_password" TEXT,
    "sender_name" TEXT,
    "sender_number" TEXT,
    "description" TEXT,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_organization_id" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "work_schedules" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "organization_id" UUID NOT NULL,
    "days" TEXT[],
    "start_time" TIME NOT NULL,
    "end_time" TIME NOT NULL,
    "max_start_time" TIME NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_work_schedules_id" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "delivery_pricing" ADD CONSTRAINT "FK_organization_id" FOREIGN KEY ("organization_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organization" ADD CONSTRAINT "FK_organization_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organization" ADD CONSTRAINT "FK_organization_updated_by" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_schedules" ADD CONSTRAINT "FK_work_schedules_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_schedules" ADD CONSTRAINT "FK_work_schedules_updated_by" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_schedules" ADD CONSTRAINT "FK_work_schedules_organization_id" FOREIGN KEY ("organization_id") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
