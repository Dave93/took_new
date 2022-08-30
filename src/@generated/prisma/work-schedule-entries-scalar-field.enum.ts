import { registerEnumType } from '@nestjs/graphql';

export enum Work_schedule_entriesScalarFieldEnum {
    id = "id",
    user_id = "user_id",
    work_schedule_id = "work_schedule_id",
    date_start = "date_start",
    date_finish = "date_finish",
    duration = "duration",
    ip_open = "ip_open",
    ip_close = "ip_close",
    lat_open = "lat_open",
    lat_close = "lat_close",
    lon_open = "lon_open",
    lon_close = "lon_close",
    current_status = "current_status",
    late = "late",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by"
}


registerEnumType(Work_schedule_entriesScalarFieldEnum, { name: 'Work_schedule_entriesScalarFieldEnum', description: undefined })
