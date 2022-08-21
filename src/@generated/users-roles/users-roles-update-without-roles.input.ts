import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutUsers_roles_usersTousers_roles_created_byNestedInput } from '../users/users-update-one-without-users-roles-users-tousers-roles-created-by-nested.input';
import { usersUpdateOneWithoutUsers_roles_usersTousers_roles_updated_byNestedInput } from '../users/users-update-one-without-users-roles-users-tousers-roles-updated-by-nested.input';
import { usersUpdateOneRequiredWithoutUsers_roles_usersTousers_roles_user_idNestedInput } from '../users/users-update-one-required-without-users-roles-users-tousers-roles-user-id-nested.input';

@InputType()
export class users_rolesUpdateWithoutRolesInput {

    @Field(() => usersUpdateOneWithoutUsers_roles_usersTousers_roles_created_byNestedInput, {nullable:true})
    users_usersTousers_roles_created_by?: usersUpdateOneWithoutUsers_roles_usersTousers_roles_created_byNestedInput;

    @Field(() => usersUpdateOneWithoutUsers_roles_usersTousers_roles_updated_byNestedInput, {nullable:true})
    users_usersTousers_roles_updated_by?: usersUpdateOneWithoutUsers_roles_usersTousers_roles_updated_byNestedInput;

    @Field(() => usersUpdateOneRequiredWithoutUsers_roles_usersTousers_roles_user_idNestedInput, {nullable:true})
    users_usersTousers_roles_user_id?: usersUpdateOneRequiredWithoutUsers_roles_usersTousers_roles_user_idNestedInput;
}
