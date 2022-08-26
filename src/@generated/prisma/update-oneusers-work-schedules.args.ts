import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_work_schedulesUpdateInput } from '../users-work-schedules/users-work-schedules-update.input';
import { Type } from 'class-transformer';
import { users_work_schedulesWhereUniqueInput } from '../users-work-schedules/users-work-schedules-where-unique.input';

@ArgsType()
export class UpdateOneusersWorkSchedulesArgs {

    @Field(() => users_work_schedulesUpdateInput, {nullable:false})
    @Type(() => users_work_schedulesUpdateInput)
    data!: users_work_schedulesUpdateInput;

    @Field(() => users_work_schedulesWhereUniqueInput, {nullable:false})
    @Type(() => users_work_schedulesWhereUniqueInput)
    where!: users_work_schedulesWhereUniqueInput;
}
