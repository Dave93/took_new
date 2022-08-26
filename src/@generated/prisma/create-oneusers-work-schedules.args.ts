import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_work_schedulesCreateInput } from '../users-work-schedules/users-work-schedules-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneusersWorkSchedulesArgs {

    @Field(() => users_work_schedulesCreateInput, {nullable:false})
    @Type(() => users_work_schedulesCreateInput)
    data!: users_work_schedulesCreateInput;
}
