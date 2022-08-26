import { registerEnumType } from '@nestjs/graphql';

export enum Users_work_schedulesScalarFieldEnum {
    user_id = "user_id",
    work_schedule_id = "work_schedule_id"
}


registerEnumType(Users_work_schedulesScalarFieldEnum, { name: 'Users_work_schedulesScalarFieldEnum', description: undefined })
