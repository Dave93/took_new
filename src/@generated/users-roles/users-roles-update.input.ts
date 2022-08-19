import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutUsers_roles_usersTousers_roles_created_byNestedInput } from '../users/users-update-one-without-users-roles-users-tousers-roles-created-by-nested.input';
import { rolesUpdateOneRequiredWithoutUsers_rolesNestedInput } from '../roles/roles-update-one-required-without-users-roles-nested.input';
import { usersUpdateOneWithoutUsers_roles_usersTousers_roles_updated_byNestedInput } from '../users/users-update-one-without-users-roles-users-tousers-roles-updated-by-nested.input';
import { usersUpdateOneRequiredWithoutUsers_roles_usersTousers_roles_user_idNestedInput } from '../users/users-update-one-required-without-users-roles-users-tousers-roles-user-id-nested.input';

@InputType()
export class users_rolesUpdateInput {

    @Field(() => usersUpdateOneWithoutUsers_roles_usersTousers_roles_created_byNestedInput, {nullable:true})
    users_usersTousers_roles_created_by?: usersUpdateOneWithoutUsers_roles_usersTousers_roles_created_byNestedInput;

    @Field(() => rolesUpdateOneRequiredWithoutUsers_rolesNestedInput, {nullable:true})
    roles?: rolesUpdateOneRequiredWithoutUsers_rolesNestedInput;

    @Field(() => usersUpdateOneWithoutUsers_roles_usersTousers_roles_updated_byNestedInput, {nullable:true})
    users_usersTousers_roles_updated_by?: usersUpdateOneWithoutUsers_roles_usersTousers_roles_updated_byNestedInput;

    @Field(() => usersUpdateOneRequiredWithoutUsers_roles_usersTousers_roles_user_idNestedInput, {nullable:true})
    users_usersTousers_roles_user_id?: usersUpdateOneRequiredWithoutUsers_roles_usersTousers_roles_user_idNestedInput;
}
