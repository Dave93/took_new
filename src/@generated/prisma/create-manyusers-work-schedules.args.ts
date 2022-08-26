import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_work_schedulesCreateManyInput } from '../users-work-schedules/users-work-schedules-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyusersWorkSchedulesArgs {

    @Field(() => [users_work_schedulesCreateManyInput], {nullable:false})
    @Type(() => users_work_schedulesCreateManyInput)
    data!: Array<users_work_schedulesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
