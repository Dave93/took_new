import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutUsers_terminalsInput } from '../users/users-create-nested-one-without-users-terminals.input';

@InputType()
export class users_terminalsCreateWithoutTerminalsInput {

    @Field(() => usersCreateNestedOneWithoutUsers_terminalsInput, {nullable:false})
    users!: usersCreateNestedOneWithoutUsers_terminalsInput;
}
