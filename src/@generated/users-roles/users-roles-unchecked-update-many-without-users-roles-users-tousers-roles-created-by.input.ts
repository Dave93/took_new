import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class users_rolesUncheckedUpdateManyWithoutUsers_roles_usersTousers_roles_created_byInput {

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => String, {nullable:true})
    role_id?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;
}
