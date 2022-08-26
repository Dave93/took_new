import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class users_work_schedulesUncheckedUpdateWithoutWork_schedulesInput {

    @Field(() => String, {nullable:true})
    user_id?: string;
}
