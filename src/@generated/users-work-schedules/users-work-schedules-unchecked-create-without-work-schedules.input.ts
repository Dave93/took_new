import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class users_work_schedulesUncheckedCreateWithoutWork_schedulesInput {

    @Field(() => String, {nullable:false})
    user_id!: string;
}
