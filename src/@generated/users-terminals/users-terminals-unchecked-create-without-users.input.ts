import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class users_terminalsUncheckedCreateWithoutUsersInput {

    @Field(() => String, {nullable:false})
    terminal_id!: string;
}
