import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutUsers_roles_usersTousers_roles_created_byInput } from '../users/users-update-one-without-users-roles-users-tousers-roles-created-by.input';
import { usersUpdateOneWithoutUsers_roles_usersTousers_roles_updated_byInput } from '../users/users-update-one-without-users-roles-users-tousers-roles-updated-by.input';
import { usersUpdateOneRequiredWithoutUsers_roles_usersTousers_roles_user_idInput } from '../users/users-update-one-required-without-users-roles-users-tousers-roles-user-id.input';

@InputType()
export class users_rolesUpdateWithoutRolesInput {

    @Field(() => usersUpdateOneWithoutUsers_roles_usersTousers_roles_created_byInput, {nullable:true})
    users_usersTousers_roles_created_by?: usersUpdateOneWithoutUsers_roles_usersTousers_roles_created_byInput;

    @Field(() => usersUpdateOneWithoutUsers_roles_usersTousers_roles_updated_byInput, {nullable:true})
    users_usersTousers_roles_updated_by?: usersUpdateOneWithoutUsers_roles_usersTousers_roles_updated_byInput;

    @Field(() => usersUpdateOneRequiredWithoutUsers_roles_usersTousers_roles_user_idInput, {nullable:true})
    users_usersTousers_roles_user_id?: usersUpdateOneRequiredWithoutUsers_roles_usersTousers_roles_user_idInput;
}
