import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class users_work_schedulesCreateManyInput {

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    work_schedule_id!: string;
}
