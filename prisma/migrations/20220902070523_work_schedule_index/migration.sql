-- CreateIndex
CREATE INDEX "fki_work_schedule_entries_current_status" ON "work_schedule_entries"("current_status");

-- CreateIndex
CREATE INDEX "fki_work_schedule_entries_user_id" ON "work_schedule_entries"("user_id");
