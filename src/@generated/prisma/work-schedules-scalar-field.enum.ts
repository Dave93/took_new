import { registerEnumType } from '@nestjs/graphql';

export enum Work_schedulesScalarFieldEnum {
    id = "id",
    name = "name",
    active = "active",
    organization_id = "organization_id",
    days = "days",
    start_time = "start_time",
    end_time = "end_time",
    max_start_time = "max_start_time",
    bonus_price = "bonus_price",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by"
}


registerEnumType(Work_schedulesScalarFieldEnum, { name: 'Work_schedulesScalarFieldEnum', description: undefined })
