import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { Enumuser_statusFieldUpdateOperationsInput } from '../prisma/enumuser-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { otpUpdateManyWithoutUsersInput } from '../otp/otp-update-many-without-users.input';
import { permissionsUpdateManyWithoutUsers_permissions_created_byTousersInput } from '../permissions/permissions-update-many-without-users-permissions-created-by-tousers.input';
import { permissionsUpdateManyWithoutUsers_permissions_updated_byTousersInput } from '../permissions/permissions-update-many-without-users-permissions-updated-by-tousers.input';
import { postUpdateManyWithoutUsers_post_updated_byTousersInput } from '../post/post-update-many-without-users-post-updated-by-tousers.input';
import { postUpdateManyWithoutUsers_post_user_idTousersInput } from '../post/post-update-many-without-users-post-user-id-tousers.input';
import { rolesUpdateManyWithoutUsers_roles_created_byTousersInput } from '../roles/roles-update-many-without-users-roles-created-by-tousers.input';
import { rolesUpdateManyWithoutUsers_roles_updated_byTousersInput } from '../roles/roles-update-many-without-users-roles-updated-by-tousers.input';
import { roles_permissionsUpdateManyWithoutUsers_roles_permissions_created_byTousersInput } from '../roles-permissions/roles-permissions-update-many-without-users-roles-permissions-created-by-tousers.input';
import { roles_permissionsUpdateManyWithoutUsers_roles_permissions_updated_byTousersInput } from '../roles-permissions/roles-permissions-update-many-without-users-roles-permissions-updated-by-tousers.input';
import { users_permissionsUpdateManyWithoutUsers_usersTousers_permissions_created_byInput } from '../users-permissions/users-permissions-update-many-without-users-users-tousers-permissions-created-by.input';
import { users_permissionsUpdateManyWithoutUsers_usersTousers_permissions_updated_byInput } from '../users-permissions/users-permissions-update-many-without-users-users-tousers-permissions-updated-by.input';
import { users_permissionsUpdateManyWithoutUsers_usersTousers_permissions_user_idInput } from '../users-permissions/users-permissions-update-many-without-users-users-tousers-permissions-user-id.input';
import { users_rolesUpdateManyWithoutUsers_usersTousers_roles_created_byInput } from '../users-roles/users-roles-update-many-without-users-users-tousers-roles-created-by.input';
import { users_rolesUpdateManyWithoutUsers_usersTousers_roles_updated_byInput } from '../users-roles/users-roles-update-many-without-users-users-tousers-roles-updated-by.input';
import { users_rolesUpdateManyWithoutUsers_usersTousers_roles_user_idInput } from '../users-roles/users-roles-update-many-without-users-users-tousers-roles-user-id.input';
import { post_prop_typesUpdateManyWithoutUsers_post_prop_types_created_byTousersInput } from '../post-prop-types/post-prop-types-update-many-without-users-post-prop-types-created-by-tousers.input';
import { post_prop_typesUpdateManyWithoutUsers_post_prop_types_updated_byTousersInput } from '../post-prop-types/post-prop-types-update-many-without-users-post-prop-types-updated-by-tousers.input';
import { cityUpdateManyWithoutUsers_city_created_byTousersInput } from '../city/city-update-many-without-users-city-created-by-tousers.input';
import { cityUpdateManyWithoutUsers_city_updated_byTousersInput } from '../city/city-update-many-without-users-city-updated-by-tousers.input';

@InputType()
export class usersUpdateWithoutPost_post_created_byTousersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    first_name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    last_name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_super_user?: BoolFieldUpdateOperationsInput;

    @Field(() => Enumuser_statusFieldUpdateOperationsInput, {nullable:true})
    status?: Enumuser_statusFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => otpUpdateManyWithoutUsersInput, {nullable:true})
    otp?: otpUpdateManyWithoutUsersInput;

    @Field(() => permissionsUpdateManyWithoutUsers_permissions_created_byTousersInput, {nullable:true})
    permissions_permissions_created_byTousers?: permissionsUpdateManyWithoutUsers_permissions_created_byTousersInput;

    @Field(() => permissionsUpdateManyWithoutUsers_permissions_updated_byTousersInput, {nullable:true})
    permissions_permissions_updated_byTousers?: permissionsUpdateManyWithoutUsers_permissions_updated_byTousersInput;

    @Field(() => postUpdateManyWithoutUsers_post_updated_byTousersInput, {nullable:true})
    post_updated_byTousers?: postUpdateManyWithoutUsers_post_updated_byTousersInput;

    @Field(() => postUpdateManyWithoutUsers_post_user_idTousersInput, {nullable:true})
    post_post_user_idTousers?: postUpdateManyWithoutUsers_post_user_idTousersInput;

    @Field(() => rolesUpdateManyWithoutUsers_roles_created_byTousersInput, {nullable:true})
    roles_roles_created_byTousers?: rolesUpdateManyWithoutUsers_roles_created_byTousersInput;

    @Field(() => rolesUpdateManyWithoutUsers_roles_updated_byTousersInput, {nullable:true})
    roles_roles_updated_byTousers?: rolesUpdateManyWithoutUsers_roles_updated_byTousersInput;

    @Field(() => roles_permissionsUpdateManyWithoutUsers_roles_permissions_created_byTousersInput, {nullable:true})
    roles_permissions_roles_permissions_created_byTousers?: roles_permissionsUpdateManyWithoutUsers_roles_permissions_created_byTousersInput;

    @Field(() => roles_permissionsUpdateManyWithoutUsers_roles_permissions_updated_byTousersInput, {nullable:true})
    roles_permissions_roles_permissions_updated_byTousers?: roles_permissionsUpdateManyWithoutUsers_roles_permissions_updated_byTousersInput;

    @Field(() => users_permissionsUpdateManyWithoutUsers_usersTousers_permissions_created_byInput, {nullable:true})
    users_permissions_usersTousers_permissions_created_by?: users_permissionsUpdateManyWithoutUsers_usersTousers_permissions_created_byInput;

    @Field(() => users_permissionsUpdateManyWithoutUsers_usersTousers_permissions_updated_byInput, {nullable:true})
    users_permissions_usersTousers_permissions_updated_by?: users_permissionsUpdateManyWithoutUsers_usersTousers_permissions_updated_byInput;

    @Field(() => users_permissionsUpdateManyWithoutUsers_usersTousers_permissions_user_idInput, {nullable:true})
    users_permissions_usersTousers_permissions_user_id?: users_permissionsUpdateManyWithoutUsers_usersTousers_permissions_user_idInput;

    @Field(() => users_rolesUpdateManyWithoutUsers_usersTousers_roles_created_byInput, {nullable:true})
    users_roles_usersTousers_roles_created_by?: users_rolesUpdateManyWithoutUsers_usersTousers_roles_created_byInput;

    @Field(() => users_rolesUpdateManyWithoutUsers_usersTousers_roles_updated_byInput, {nullable:true})
    users_roles_usersTousers_roles_updated_by?: users_rolesUpdateManyWithoutUsers_usersTousers_roles_updated_byInput;

    @Field(() => users_rolesUpdateManyWithoutUsers_usersTousers_roles_user_idInput, {nullable:true})
    users_roles_usersTousers_roles_user_id?: users_rolesUpdateManyWithoutUsers_usersTousers_roles_user_idInput;

    @Field(() => post_prop_typesUpdateManyWithoutUsers_post_prop_types_created_byTousersInput, {nullable:true})
    post_prop_types_created_byTousers?: post_prop_typesUpdateManyWithoutUsers_post_prop_types_created_byTousersInput;

    @Field(() => post_prop_typesUpdateManyWithoutUsers_post_prop_types_updated_byTousersInput, {nullable:true})
    post_prop_types_updated_byTousers?: post_prop_typesUpdateManyWithoutUsers_post_prop_types_updated_byTousersInput;

    @Field(() => cityUpdateManyWithoutUsers_city_created_byTousersInput, {nullable:true})
    city_created_byTousers?: cityUpdateManyWithoutUsers_city_created_byTousersInput;

    @Field(() => cityUpdateManyWithoutUsers_city_updated_byTousersInput, {nullable:true})
    city_updated_byTousers?: cityUpdateManyWithoutUsers_city_updated_byTousersInput;
}
