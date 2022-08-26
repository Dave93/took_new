import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_work_schedulesWhereUniqueInput } from '../users-work-schedules/users-work-schedules-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueusersWorkSchedulesArgs {

    @Field(() => users_work_schedulesWhereUniqueInput, {nullable:false})
    @Type(() => users_work_schedulesWhereUniqueInput)
    where!: users_work_schedulesWhereUniqueInput;
}
