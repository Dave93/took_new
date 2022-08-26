import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class users_terminalsUncheckedCreateWithoutTerminalsInput {

    @Field(() => String, {nullable:false})
    user_id!: string;
}
