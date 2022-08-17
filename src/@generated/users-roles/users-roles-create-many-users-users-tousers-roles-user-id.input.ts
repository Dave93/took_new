import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class users_rolesCreateManyUsers_usersTousers_roles_user_idInput {

    @Field(() => String, {nullable:false})
    role_id!: string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;
}
