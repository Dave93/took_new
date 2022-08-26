import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class users_terminalsUncheckedUpdateManyWithoutUsers_terminalsInput {

    @Field(() => String, {nullable:true})
    terminal_id?: string;
}
