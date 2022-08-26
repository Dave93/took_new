import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneRequiredWithoutUsers_terminalsNestedInput } from '../users/users-update-one-required-without-users-terminals-nested.input';

@InputType()
export class users_terminalsUpdateWithoutTerminalsInput {

    @Field(() => usersUpdateOneRequiredWithoutUsers_terminalsNestedInput, {nullable:true})
    users?: usersUpdateOneRequiredWithoutUsers_terminalsNestedInput;
}
