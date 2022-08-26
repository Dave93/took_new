import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutUsers_terminalsInput } from '../users/users-create-nested-one-without-users-terminals.input';
import { terminalsCreateNestedOneWithoutUsers_terminalsInput } from '../terminals/terminals-create-nested-one-without-users-terminals.input';

@InputType()
export class users_terminalsCreateInput {

    @Field(() => usersCreateNestedOneWithoutUsers_terminalsInput, {nullable:false})
    users!: usersCreateNestedOneWithoutUsers_terminalsInput;

    @Field(() => terminalsCreateNestedOneWithoutUsers_terminalsInput, {nullable:false})
    terminals!: terminalsCreateNestedOneWithoutUsers_terminalsInput;
}
