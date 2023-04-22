import { registerEnumType } from '@nestjs/graphql';

export enum Scheduled_reportsScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code",
    cron = "cron",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(Scheduled_reportsScalarFieldEnum, { name: 'Scheduled_reportsScalarFieldEnum', description: undefined })
