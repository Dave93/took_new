-- CreateEnum
CREATE TYPE "work_schedule_entry_status" AS ENUM ('open', 'closed');

-- CreateTable
CREATE TABLE "work_schedule_entries" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "user_id" UUID NOT NULL,
    "work_schedule_id" UUID NOT NULL,
    "date_start" TIMESTAMP(5) NOT NULL,
    "date_finish" TIMESTAMP(5) NOT NULL,
    "duration" INTEGER NOT NULL DEFAULT 0,
    "ip_open" TEXT,
    "ip_close" TEXT,
    "lat_open" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "lat_close" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "lon_open" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "lon_close" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "current_status" "work_schedule_entry_status" NOT NULL DEFAULT 'open',
    "late" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(5) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    "updated_by" UUID,

    CONSTRAINT "PK_work_schedule_entries_id" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "work_schedule_entries" ADD CONSTRAINT "FK_work_schedule_entries_created_by" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_schedule_entries" ADD CONSTRAINT "FK_work_schedule_entries_updated_by" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_schedule_entries" ADD CONSTRAINT "FK_work_schedule_entries_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "work_schedule_entries" ADD CONSTRAINT "FK_work_schedule_entries_work_schedule_id" FOREIGN KEY ("work_schedule_id") REFERENCES "work_schedules"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
