-- AlterTable
ALTER TABLE "users" ADD COLUMN     "birth_date" TIMESTAMP(6),
ADD COLUMN     "car_model" VARCHAR(100),
ADD COLUMN     "car_number" VARCHAR(100),
ADD COLUMN     "card_name" VARCHAR(100),
ADD COLUMN     "card_number" VARCHAR(100),
ADD COLUMN     "drive_type" "drive_type",
ADD COLUMN     "is_online" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "latitude" DOUBLE PRECISION DEFAULT 0,
ADD COLUMN     "longitude" DOUBLE PRECISION DEFAULT 0;

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

-- AddForeignKey
ALTER TABLE "users_terminals" ADD CONSTRAINT "FK_users_terminals_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_terminals" ADD CONSTRAINT "FK_users_terminals_terminal_id" FOREIGN KEY ("terminal_id") REFERENCES "terminals"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_work_schedules" ADD CONSTRAINT "FK_users_work_schedules_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_work_schedules" ADD CONSTRAINT "FK_users_work_schedules_work_schedule_id" FOREIGN KEY ("work_schedule_id") REFERENCES "work_schedules"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
