import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_work_schedulesWhereInput } from '../users-work-schedules/users-work-schedules-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyusersWorkSchedulesArgs {

    @Field(() => users_work_schedulesWhereInput, {nullable:true})
    @Type(() => users_work_schedulesWhereInput)
    where?: users_work_schedulesWhereInput;
}
