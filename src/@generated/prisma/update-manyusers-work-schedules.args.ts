import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { users_work_schedulesUncheckedUpdateManyInput } from '../users-work-schedules/users-work-schedules-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { users_work_schedulesWhereInput } from '../users-work-schedules/users-work-schedules-where.input';

@ArgsType()
export class UpdateManyusersWorkSchedulesArgs {

    @Field(() => users_work_schedulesUncheckedUpdateManyInput, {nullable:false})
    @Type(() => users_work_schedulesUncheckedUpdateManyInput)
    data!: users_work_schedulesUncheckedUpdateManyInput;

    @Field(() => users_work_schedulesWhereInput, {nullable:true})
    @Type(() => users_work_schedulesWhereInput)
    where?: users_work_schedulesWhereInput;
}
