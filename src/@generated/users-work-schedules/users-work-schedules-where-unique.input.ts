import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { users_work_schedulesUser_idWork_schedule_idCompoundUniqueInput } from './users-work-schedules-user-id-work-schedule-id-compound-unique.input';

@InputType()
export class users_work_schedulesWhereUniqueInput {

    @Field(() => users_work_schedulesUser_idWork_schedule_idCompoundUniqueInput, {nullable:true})
    user_id_work_schedule_id?: users_work_schedulesUser_idWork_schedule_idCompoundUniqueInput;
}
