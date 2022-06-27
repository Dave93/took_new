import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutUsers_roles_usersTousers_roles_created_byInput } from '../users/users-create-nested-one-without-users-roles-users-tousers-roles-created-by.input';
import { rolesCreateNestedOneWithoutUsers_rolesInput } from '../roles/roles-create-nested-one-without-users-roles.input';
import { usersCreateNestedOneWithoutUsers_roles_usersTousers_roles_updated_byInput } from '../users/users-create-nested-one-without-users-roles-users-tousers-roles-updated-by.input';

@InputType()
export class users_rolesCreateWithoutUsers_usersTousers_roles_user_idInput {

    @Field(() => usersCreateNestedOneWithoutUsers_roles_usersTousers_roles_created_byInput, {nullable:true})
    users_usersTousers_roles_created_by?: usersCreateNestedOneWithoutUsers_roles_usersTousers_roles_created_byInput;

    @Field(() => rolesCreateNestedOneWithoutUsers_rolesInput, {nullable:false})
    roles!: rolesCreateNestedOneWithoutUsers_rolesInput;

    @Field(() => usersCreateNestedOneWithoutUsers_roles_usersTousers_roles_updated_byInput, {nullable:true})
    users_usersTousers_roles_updated_by?: usersCreateNestedOneWithoutUsers_roles_usersTousers_roles_updated_byInput;
}
