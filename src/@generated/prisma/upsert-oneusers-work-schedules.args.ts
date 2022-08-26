import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_work_schedulesWhereUniqueInput } from '../users-work-schedules/users-work-schedules-where-unique.input';
import { Type } from 'class-transformer';
import { users_work_schedulesCreateInput } from '../users-work-schedules/users-work-schedules-create.input';
import { users_work_schedulesUpdateInput } from '../users-work-schedules/users-work-schedules-update.input';

@ArgsType()
export class UpsertOneusersWorkSchedulesArgs {

    @Field(() => users_work_schedulesWhereUniqueInput, {nullable:false})
    @Type(() => users_work_schedulesWhereUniqueInput)
    where!: users_work_schedulesWhereUniqueInput;

    @Field(() => users_work_schedulesCreateInput, {nullable:false})
    @Type(() => users_work_schedulesCreateInput)
    create!: users_work_schedulesCreateInput;

    @Field(() => users_work_schedulesUpdateInput, {nullable:false})
    @Type(() => users_work_schedulesUpdateInput)
    update!: users_work_schedulesUpdateInput;
}
