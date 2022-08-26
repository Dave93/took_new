import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class users_work_schedulesUncheckedUpdateManyInput {

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => String, {nullable:true})
    work_schedule_id?: string;
}
