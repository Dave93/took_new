import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsUpdateOneRequiredWithoutUsers_terminalsNestedInput } from '../terminals/terminals-update-one-required-without-users-terminals-nested.input';

@InputType()
export class users_terminalsUpdateWithoutUsersInput {

    @Field(() => terminalsUpdateOneRequiredWithoutUsers_terminalsNestedInput, {nullable:true})
    terminals?: terminalsUpdateOneRequiredWithoutUsers_terminalsNestedInput;
}
