import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class users_terminalsCreateManyInput {

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;
}
