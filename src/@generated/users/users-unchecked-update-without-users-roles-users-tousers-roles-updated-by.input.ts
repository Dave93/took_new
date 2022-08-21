import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { Enumuser_statusFieldUpdateOperationsInput } from '../prisma/enumuser-status-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { otpUncheckedUpdateManyWithoutUsersNestedInput } from '../otp/otp-unchecked-update-many-without-users-nested.input';
import { permissionsUncheckedUpdateManyWithoutUsers_permissions_created_byTousersNestedInput } from '../permissions/permissions-unchecked-update-many-without-users-permissions-created-by-tousers-nested.input';
import { permissionsUncheckedUpdateManyWithoutUsers_permissions_updated_byTousersNestedInput } from '../permissions/permissions-unchecked-update-many-without-users-permissions-updated-by-tousers-nested.input';
import { postUncheckedUpdateManyWithoutUsers_post_created_byTousersNestedInput } from '../post/post-unchecked-update-many-without-users-post-created-by-tousers-nested.input';
import { postUncheckedUpdateManyWithoutUsers_post_updated_byTousersNestedInput } from '../post/post-unchecked-update-many-without-users-post-updated-by-tousers-nested.input';
import { postUncheckedUpdateManyWithoutUsers_post_user_idTousersNestedInput } from '../post/post-unchecked-update-many-without-users-post-user-id-tousers-nested.input';
import { rolesUncheckedUpdateManyWithoutUsers_roles_created_byTousersNestedInput } from '../roles/roles-unchecked-update-many-without-users-roles-created-by-tousers-nested.input';
import { rolesUncheckedUpdateManyWithoutUsers_roles_updated_byTousersNestedInput } from '../roles/roles-unchecked-update-many-without-users-roles-updated-by-tousers-nested.input';
import { roles_permissionsUncheckedUpdateManyWithoutUsers_roles_permissions_created_byTousersNestedInput } from '../roles-permissions/roles-permissions-unchecked-update-many-without-users-roles-permissions-created-by-tousers-nested.input';
import { roles_permissionsUncheckedUpdateManyWithoutUsers_roles_permissions_updated_byTousersNestedInput } from '../roles-permissions/roles-permissions-unchecked-update-many-without-users-roles-permissions-updated-by-tousers-nested.input';
import { users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_created_byNestedInput } from '../users-permissions/users-permissions-unchecked-update-many-without-users-users-tousers-permissions-created-by-nested.input';
import { users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_updated_byNestedInput } from '../users-permissions/users-permissions-unchecked-update-many-without-users-users-tousers-permissions-updated-by-nested.input';
import { users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_user_idNestedInput } from '../users-permissions/users-permissions-unchecked-update-many-without-users-users-tousers-permissions-user-id-nested.input';
import { users_rolesUncheckedUpdateManyWithoutUsers_usersTousers_roles_created_byNestedInput } from '../users-roles/users-roles-unchecked-update-many-without-users-users-tousers-roles-created-by-nested.input';
import { users_rolesUncheckedUpdateManyWithoutUsers_usersTousers_roles_user_idNestedInput } from '../users-roles/users-roles-unchecked-update-many-without-users-users-tousers-roles-user-id-nested.input';
import { post_prop_typesUncheckedUpdateManyWithoutUsers_post_prop_types_created_byTousersNestedInput } from '../post-prop-types/post-prop-types-unchecked-update-many-without-users-post-prop-types-created-by-tousers-nested.input';
import { post_prop_typesUncheckedUpdateManyWithoutUsers_post_prop_types_updated_byTousersNestedInput } from '../post-prop-types/post-prop-types-unchecked-update-many-without-users-post-prop-types-updated-by-tousers-nested.input';
import { cityUncheckedUpdateManyWithoutUsers_city_created_byTousersNestedInput } from '../city/city-unchecked-update-many-without-users-city-created-by-tousers-nested.input';
import { cityUncheckedUpdateManyWithoutUsers_city_updated_byTousersNestedInput } from '../city/city-unchecked-update-many-without-users-city-updated-by-tousers-nested.input';

@InputType()
export class usersUncheckedUpdateWithoutUsers_roles_usersTousers_roles_updated_byInput {

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

    @Field(() => otpUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    otp?: otpUncheckedUpdateManyWithoutUsersNestedInput;

    @Field(() => permissionsUncheckedUpdateManyWithoutUsers_permissions_created_byTousersNestedInput, {nullable:true})
    permissions_permissions_created_byTousers?: permissionsUncheckedUpdateManyWithoutUsers_permissions_created_byTousersNestedInput;

    @Field(() => permissionsUncheckedUpdateManyWithoutUsers_permissions_updated_byTousersNestedInput, {nullable:true})
    permissions_permissions_updated_byTousers?: permissionsUncheckedUpdateManyWithoutUsers_permissions_updated_byTousersNestedInput;

    @Field(() => postUncheckedUpdateManyWithoutUsers_post_created_byTousersNestedInput, {nullable:true})
    post_post_created_byTousers?: postUncheckedUpdateManyWithoutUsers_post_created_byTousersNestedInput;

    @Field(() => postUncheckedUpdateManyWithoutUsers_post_updated_byTousersNestedInput, {nullable:true})
    post_updated_byTousers?: postUncheckedUpdateManyWithoutUsers_post_updated_byTousersNestedInput;

    @Field(() => postUncheckedUpdateManyWithoutUsers_post_user_idTousersNestedInput, {nullable:true})
    post_post_user_idTousers?: postUncheckedUpdateManyWithoutUsers_post_user_idTousersNestedInput;

    @Field(() => rolesUncheckedUpdateManyWithoutUsers_roles_created_byTousersNestedInput, {nullable:true})
    roles_roles_created_byTousers?: rolesUncheckedUpdateManyWithoutUsers_roles_created_byTousersNestedInput;

    @Field(() => rolesUncheckedUpdateManyWithoutUsers_roles_updated_byTousersNestedInput, {nullable:true})
    roles_roles_updated_byTousers?: rolesUncheckedUpdateManyWithoutUsers_roles_updated_byTousersNestedInput;

    @Field(() => roles_permissionsUncheckedUpdateManyWithoutUsers_roles_permissions_created_byTousersNestedInput, {nullable:true})
    roles_permissions_roles_permissions_created_byTousers?: roles_permissionsUncheckedUpdateManyWithoutUsers_roles_permissions_created_byTousersNestedInput;

    @Field(() => roles_permissionsUncheckedUpdateManyWithoutUsers_roles_permissions_updated_byTousersNestedInput, {nullable:true})
    roles_permissions_roles_permissions_updated_byTousers?: roles_permissionsUncheckedUpdateManyWithoutUsers_roles_permissions_updated_byTousersNestedInput;

    @Field(() => users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_created_byNestedInput, {nullable:true})
    users_permissions_usersTousers_permissions_created_by?: users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_created_byNestedInput;

    @Field(() => users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_updated_byNestedInput, {nullable:true})
    users_permissions_usersTousers_permissions_updated_by?: users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_updated_byNestedInput;

    @Field(() => users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_user_idNestedInput, {nullable:true})
    users_permissions_usersTousers_permissions_user_id?: users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_user_idNestedInput;

    @Field(() => users_rolesUncheckedUpdateManyWithoutUsers_usersTousers_roles_created_byNestedInput, {nullable:true})
    users_roles_usersTousers_roles_created_by?: users_rolesUncheckedUpdateManyWithoutUsers_usersTousers_roles_created_byNestedInput;

    @Field(() => users_rolesUncheckedUpdateManyWithoutUsers_usersTousers_roles_user_idNestedInput, {nullable:true})
    users_roles_usersTousers_roles_user_id?: users_rolesUncheckedUpdateManyWithoutUsers_usersTousers_roles_user_idNestedInput;

    @Field(() => post_prop_typesUncheckedUpdateManyWithoutUsers_post_prop_types_created_byTousersNestedInput, {nullable:true})
    post_prop_types_created_byTousers?: post_prop_typesUncheckedUpdateManyWithoutUsers_post_prop_types_created_byTousersNestedInput;

    @Field(() => post_prop_typesUncheckedUpdateManyWithoutUsers_post_prop_types_updated_byTousersNestedInput, {nullable:true})
    post_prop_types_updated_byTousers?: post_prop_typesUncheckedUpdateManyWithoutUsers_post_prop_types_updated_byTousersNestedInput;

    @Field(() => cityUncheckedUpdateManyWithoutUsers_city_created_byTousersNestedInput, {nullable:true})
    city_created_byTousers?: cityUncheckedUpdateManyWithoutUsers_city_created_byTousersNestedInput;

    @Field(() => cityUncheckedUpdateManyWithoutUsers_city_updated_byTousersNestedInput, {nullable:true})
    city_updated_byTousers?: cityUncheckedUpdateManyWithoutUsers_city_updated_byTousersNestedInput;
}
