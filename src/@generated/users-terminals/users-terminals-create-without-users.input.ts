import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateNestedOneWithoutUsers_terminalsInput } from '../terminals/terminals-create-nested-one-without-users-terminals.input';

@InputType()
export class users_terminalsCreateWithoutUsersInput {

    @Field(() => terminalsCreateNestedOneWithoutUsers_terminalsInput, {nullable:false})
    terminals!: terminalsCreateNestedOneWithoutUsers_terminalsInput;
}
