import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { Enumuser_statusFieldUpdateOperationsInput } from '../prisma/enumuser-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { otpUncheckedUpdateManyWithoutUsersInput } from '../otp/otp-unchecked-update-many-without-users.input';
import { permissionsUncheckedUpdateManyWithoutUsers_permissions_created_byTousersInput } from '../permissions/permissions-unchecked-update-many-without-users-permissions-created-by-tousers.input';
import { permissionsUncheckedUpdateManyWithoutUsers_permissions_updated_byTousersInput } from '../permissions/permissions-unchecked-update-many-without-users-permissions-updated-by-tousers.input';
import { postUncheckedUpdateManyWithoutUsers_post_created_byTousersInput } from '../post/post-unchecked-update-many-without-users-post-created-by-tousers.input';
import { postUncheckedUpdateManyWithoutUsers_post_updated_byTousersInput } from '../post/post-unchecked-update-many-without-users-post-updated-by-tousers.input';
import { postUncheckedUpdateManyWithoutUsers_post_user_idTousersInput } from '../post/post-unchecked-update-many-without-users-post-user-id-tousers.input';
import { rolesUncheckedUpdateManyWithoutUsers_roles_created_byTousersInput } from '../roles/roles-unchecked-update-many-without-users-roles-created-by-tousers.input';
import { rolesUncheckedUpdateManyWithoutUsers_roles_updated_byTousersInput } from '../roles/roles-unchecked-update-many-without-users-roles-updated-by-tousers.input';
import { roles_permissionsUncheckedUpdateManyWithoutUsers_roles_permissions_created_byTousersInput } from '../roles-permissions/roles-permissions-unchecked-update-many-without-users-roles-permissions-created-by-tousers.input';
import { roles_permissionsUncheckedUpdateManyWithoutUsers_roles_permissions_updated_byTousersInput } from '../roles-permissions/roles-permissions-unchecked-update-many-without-users-roles-permissions-updated-by-tousers.input';
import { users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_created_byInput } from '../users-permissions/users-permissions-unchecked-update-many-without-users-users-tousers-permissions-created-by.input';
import { users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_updated_byInput } from '../users-permissions/users-permissions-unchecked-update-many-without-users-users-tousers-permissions-updated-by.input';
import { users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_user_idInput } from '../users-permissions/users-permissions-unchecked-update-many-without-users-users-tousers-permissions-user-id.input';
import { users_rolesUncheckedUpdateManyWithoutUsers_usersTousers_roles_created_byInput } from '../users-roles/users-roles-unchecked-update-many-without-users-users-tousers-roles-created-by.input';
import { users_rolesUncheckedUpdateManyWithoutUsers_usersTousers_roles_updated_byInput } from '../users-roles/users-roles-unchecked-update-many-without-users-users-tousers-roles-updated-by.input';
import { post_prop_typesUncheckedUpdateManyWithoutUsers_post_prop_types_created_byTousersInput } from '../post-prop-types/post-prop-types-unchecked-update-many-without-users-post-prop-types-created-by-tousers.input';
import { post_prop_typesUncheckedUpdateManyWithoutUsers_post_prop_types_updated_byTousersInput } from '../post-prop-types/post-prop-types-unchecked-update-many-without-users-post-prop-types-updated-by-tousers.input';
import { cityUncheckedUpdateManyWithoutUsers_city_created_byTousersInput } from '../city/city-unchecked-update-many-without-users-city-created-by-tousers.input';
import { cityUncheckedUpdateManyWithoutUsers_city_updated_byTousersInput } from '../city/city-unchecked-update-many-without-users-city-updated-by-tousers.input';

@InputType()
export class usersUncheckedUpdateWithoutUsers_roles_usersTousers_roles_user_idInput {

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

    @Field(() => otpUncheckedUpdateManyWithoutUsersInput, {nullable:true})
    otp?: otpUncheckedUpdateManyWithoutUsersInput;

    @Field(() => permissionsUncheckedUpdateManyWithoutUsers_permissions_created_byTousersInput, {nullable:true})
    permissions_permissions_created_byTousers?: permissionsUncheckedUpdateManyWithoutUsers_permissions_created_byTousersInput;

    @Field(() => permissionsUncheckedUpdateManyWithoutUsers_permissions_updated_byTousersInput, {nullable:true})
    permissions_permissions_updated_byTousers?: permissionsUncheckedUpdateManyWithoutUsers_permissions_updated_byTousersInput;

    @Field(() => postUncheckedUpdateManyWithoutUsers_post_created_byTousersInput, {nullable:true})
    post_post_created_byTousers?: postUncheckedUpdateManyWithoutUsers_post_created_byTousersInput;

    @Field(() => postUncheckedUpdateManyWithoutUsers_post_updated_byTousersInput, {nullable:true})
    post_updated_byTousers?: postUncheckedUpdateManyWithoutUsers_post_updated_byTousersInput;

    @Field(() => postUncheckedUpdateManyWithoutUsers_post_user_idTousersInput, {nullable:true})
    post_post_user_idTousers?: postUncheckedUpdateManyWithoutUsers_post_user_idTousersInput;

    @Field(() => rolesUncheckedUpdateManyWithoutUsers_roles_created_byTousersInput, {nullable:true})
    roles_roles_created_byTousers?: rolesUncheckedUpdateManyWithoutUsers_roles_created_byTousersInput;

    @Field(() => rolesUncheckedUpdateManyWithoutUsers_roles_updated_byTousersInput, {nullable:true})
    roles_roles_updated_byTousers?: rolesUncheckedUpdateManyWithoutUsers_roles_updated_byTousersInput;

    @Field(() => roles_permissionsUncheckedUpdateManyWithoutUsers_roles_permissions_created_byTousersInput, {nullable:true})
    roles_permissions_roles_permissions_created_byTousers?: roles_permissionsUncheckedUpdateManyWithoutUsers_roles_permissions_created_byTousersInput;

    @Field(() => roles_permissionsUncheckedUpdateManyWithoutUsers_roles_permissions_updated_byTousersInput, {nullable:true})
    roles_permissions_roles_permissions_updated_byTousers?: roles_permissionsUncheckedUpdateManyWithoutUsers_roles_permissions_updated_byTousersInput;

    @Field(() => users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_created_byInput, {nullable:true})
    users_permissions_usersTousers_permissions_created_by?: users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_created_byInput;

    @Field(() => users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_updated_byInput, {nullable:true})
    users_permissions_usersTousers_permissions_updated_by?: users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_updated_byInput;

    @Field(() => users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_user_idInput, {nullable:true})
    users_permissions_usersTousers_permissions_user_id?: users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_user_idInput;

    @Field(() => users_rolesUncheckedUpdateManyWithoutUsers_usersTousers_roles_created_byInput, {nullable:true})
    users_roles_usersTousers_roles_created_by?: users_rolesUncheckedUpdateManyWithoutUsers_usersTousers_roles_created_byInput;

    @Field(() => users_rolesUncheckedUpdateManyWithoutUsers_usersTousers_roles_updated_byInput, {nullable:true})
    users_roles_usersTousers_roles_updated_by?: users_rolesUncheckedUpdateManyWithoutUsers_usersTousers_roles_updated_byInput;

    @Field(() => post_prop_typesUncheckedUpdateManyWithoutUsers_post_prop_types_created_byTousersInput, {nullable:true})
    post_prop_types_created_byTousers?: post_prop_typesUncheckedUpdateManyWithoutUsers_post_prop_types_created_byTousersInput;

    @Field(() => post_prop_typesUncheckedUpdateManyWithoutUsers_post_prop_types_updated_byTousersInput, {nullable:true})
    post_prop_types_updated_byTousers?: post_prop_typesUncheckedUpdateManyWithoutUsers_post_prop_types_updated_byTousersInput;

    @Field(() => cityUncheckedUpdateManyWithoutUsers_city_created_byTousersInput, {nullable:true})
    city_created_byTousers?: cityUncheckedUpdateManyWithoutUsers_city_created_byTousersInput;

    @Field(() => cityUncheckedUpdateManyWithoutUsers_city_updated_byTousersInput, {nullable:true})
    city_updated_byTousers?: cityUncheckedUpdateManyWithoutUsers_city_updated_byTousersInput;
}
