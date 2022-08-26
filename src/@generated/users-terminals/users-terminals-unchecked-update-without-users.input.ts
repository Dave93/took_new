import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class users_terminalsUncheckedUpdateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    terminal_id?: string;
}
