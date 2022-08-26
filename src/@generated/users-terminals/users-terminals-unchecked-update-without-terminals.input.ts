import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class users_terminalsUncheckedUpdateWithoutTerminalsInput {

    @Field(() => String, {nullable:true})
    user_id?: string;
}
