import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class users_work_schedulesUncheckedUpdateManyWithoutUsers_work_schedulesInput {

    @Field(() => String, {nullable:true})
    work_schedule_id?: string;
}
