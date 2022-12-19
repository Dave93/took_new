import { registerEnumType } from '@nestjs/graphql';

export enum TimesheetScalarFieldEnum {
    id = "id",
    user_id = "user_id",
    is_late = "is_late",
    date = "date",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(TimesheetScalarFieldEnum, { name: 'TimesheetScalarFieldEnum', description: undefined })
