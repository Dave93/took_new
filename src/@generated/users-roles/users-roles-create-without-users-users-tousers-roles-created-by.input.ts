import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { rolesCreateNestedOneWithoutUsers_rolesInput } from '../roles/roles-create-nested-one-without-users-roles.input';
import { usersCreateNestedOneWithoutUsers_roles_usersTousers_roles_updated_byInput } from '../users/users-create-nested-one-without-users-roles-users-tousers-roles-updated-by.input';
import { usersCreateNestedOneWithoutUsers_roles_usersTousers_roles_user_idInput } from '../users/users-create-nested-one-without-users-roles-users-tousers-roles-user-id.input';

@InputType()
export class users_rolesCreateWithoutUsers_usersTousers_roles_created_byInput {

    @Field(() => rolesCreateNestedOneWithoutUsers_rolesInput, {nullable:false})
    roles!: rolesCreateNestedOneWithoutUsers_rolesInput;

    @Field(() => usersCreateNestedOneWithoutUsers_roles_usersTousers_roles_updated_byInput, {nullable:true})
    users_usersTousers_roles_updated_by?: usersCreateNestedOneWithoutUsers_roles_usersTousers_roles_updated_byInput;

    @Field(() => usersCreateNestedOneWithoutUsers_roles_usersTousers_roles_user_idInput, {nullable:false})
    users_usersTousers_roles_user_id!: usersCreateNestedOneWithoutUsers_roles_usersTousers_roles_user_idInput;
}
