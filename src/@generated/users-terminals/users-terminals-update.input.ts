import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneRequiredWithoutUsers_terminalsNestedInput } from '../users/users-update-one-required-without-users-terminals-nested.input';
import { terminalsUpdateOneRequiredWithoutUsers_terminalsNestedInput } from '../terminals/terminals-update-one-required-without-users-terminals-nested.input';

@InputType()
export class users_terminalsUpdateInput {

    @Field(() => usersUpdateOneRequiredWithoutUsers_terminalsNestedInput, {nullable:true})
    users?: usersUpdateOneRequiredWithoutUsers_terminalsNestedInput;

    @Field(() => terminalsUpdateOneRequiredWithoutUsers_terminalsNestedInput, {nullable:true})
    terminals?: terminalsUpdateOneRequiredWithoutUsers_terminalsNestedInput;
}
