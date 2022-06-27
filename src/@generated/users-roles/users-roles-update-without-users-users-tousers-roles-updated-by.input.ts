import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutUsers_roles_usersTousers_roles_created_byInput } from '../users/users-update-one-without-users-roles-users-tousers-roles-created-by.input';
import { rolesUpdateOneRequiredWithoutUsers_rolesInput } from '../roles/roles-update-one-required-without-users-roles.input';
import { usersUpdateOneRequiredWithoutUsers_roles_usersTousers_roles_user_idInput } from '../users/users-update-one-required-without-users-roles-users-tousers-roles-user-id.input';

@InputType()
export class users_rolesUpdateWithoutUsers_usersTousers_roles_updated_byInput {

    @Field(() => usersUpdateOneWithoutUsers_roles_usersTousers_roles_created_byInput, {nullable:true})
    users_usersTousers_roles_created_by?: usersUpdateOneWithoutUsers_roles_usersTousers_roles_created_byInput;

    @Field(() => rolesUpdateOneRequiredWithoutUsers_rolesInput, {nullable:true})
    roles?: rolesUpdateOneRequiredWithoutUsers_rolesInput;

    @Field(() => usersUpdateOneRequiredWithoutUsers_roles_usersTousers_roles_user_idInput, {nullable:true})
    users_usersTousers_roles_user_id?: usersUpdateOneRequiredWithoutUsers_roles_usersTousers_roles_user_idInput;
}
