-- AlterTable
ALTER TABLE "city" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(5),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(5);

-- AlterTable
ALTER TABLE "delivery_pricing" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(5),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(5),
ALTER COLUMN "start_time" SET DATA TYPE TIMETZ(5),
ALTER COLUMN "end_time" SET DATA TYPE TIMETZ(5);

-- AlterTable
ALTER TABLE "organization" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(5),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(5);

-- AlterTable
ALTER TABLE "otp" ALTER COLUMN "expiry_date" SET DATA TYPE TIMESTAMPTZ(5),
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(5),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(5);

-- AlterTable
ALTER TABLE "permissions" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(5),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(5);

-- AlterTable
ALTER TABLE "post" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(5),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(5);

-- AlterTable
ALTER TABLE "post_prop_types" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(5),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(5);

-- AlterTable
ALTER TABLE "roles" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(5),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(5);

-- AlterTable
ALTER TABLE "terminals" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(5),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(5);

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(5),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(5),
ALTER COLUMN "birth_date" SET DATA TYPE TIMESTAMPTZ(5);

-- AlterTable
ALTER TABLE "work_schedule_entries" ALTER COLUMN "date_start" SET DATA TYPE TIMESTAMPTZ(5),
ALTER COLUMN "date_finish" SET DATA TYPE TIMESTAMPTZ(5);

-- AlterTable
ALTER TABLE "work_schedules" ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(5),
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(5),
ALTER COLUMN "start_time" SET DATA TYPE TIMETZ(5),
ALTER COLUMN "end_time" SET DATA TYPE TIMETZ(5),
ALTER COLUMN "max_start_time" SET DATA TYPE TIMETZ(5);
