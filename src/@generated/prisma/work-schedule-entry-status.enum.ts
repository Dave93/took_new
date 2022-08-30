import { registerEnumType } from '@nestjs/graphql';

export enum work_schedule_entry_status {
    open = "open",
    closed = "closed"
}


registerEnumType(work_schedule_entry_status, { name: 'work_schedule_entry_status', description: undefined })
