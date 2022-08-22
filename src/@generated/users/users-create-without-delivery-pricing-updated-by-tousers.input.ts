import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { user_status } from '../prisma/user-status.enum';
import { otpCreateNestedManyWithoutUsersInput } from '../otp/otp-create-nested-many-without-users.input';
import { permissionsCreateNestedManyWithoutUsers_permissions_created_byTousersInput } from '../permissions/permissions-create-nested-many-without-users-permissions-created-by-tousers.input';
import { permissionsCreateNestedManyWithoutUsers_permissions_updated_byTousersInput } from '../permissions/permissions-create-nested-many-without-users-permissions-updated-by-tousers.input';
import { postCreateNestedManyWithoutUsers_post_created_byTousersInput } from '../post/post-create-nested-many-without-users-post-created-by-tousers.input';
import { postCreateNestedManyWithoutUsers_post_updated_byTousersInput } from '../post/post-create-nested-many-without-users-post-updated-by-tousers.input';
import { postCreateNestedManyWithoutUsers_post_user_idTousersInput } from '../post/post-create-nested-many-without-users-post-user-id-tousers.input';
import { rolesCreateNestedManyWithoutUsers_roles_created_byTousersInput } from '../roles/roles-create-nested-many-without-users-roles-created-by-tousers.input';
import { rolesCreateNestedManyWithoutUsers_roles_updated_byTousersInput } from '../roles/roles-create-nested-many-without-users-roles-updated-by-tousers.input';
import { roles_permissionsCreateNestedManyWithoutUsers_roles_permissions_created_byTousersInput } from '../roles-permissions/roles-permissions-create-nested-many-without-users-roles-permissions-created-by-tousers.input';
import { roles_permissionsCreateNestedManyWithoutUsers_roles_permissions_updated_byTousersInput } from '../roles-permissions/roles-permissions-create-nested-many-without-users-roles-permissions-updated-by-tousers.input';
import { users_permissionsCreateNestedManyWithoutUsers_usersTousers_permissions_created_byInput } from '../users-permissions/users-permissions-create-nested-many-without-users-users-tousers-permissions-created-by.input';
import { users_permissionsCreateNestedManyWithoutUsers_usersTousers_permissions_updated_byInput } from '../users-permissions/users-permissions-create-nested-many-without-users-users-tousers-permissions-updated-by.input';
import { users_permissionsCreateNestedManyWithoutUsers_usersTousers_permissions_user_idInput } from '../users-permissions/users-permissions-create-nested-many-without-users-users-tousers-permissions-user-id.input';
import { users_rolesCreateNestedManyWithoutUsers_usersTousers_roles_created_byInput } from '../users-roles/users-roles-create-nested-many-without-users-users-tousers-roles-created-by.input';
import { users_rolesCreateNestedManyWithoutUsers_usersTousers_roles_updated_byInput } from '../users-roles/users-roles-create-nested-many-without-users-users-tousers-roles-updated-by.input';
import { users_rolesCreateNestedManyWithoutUsers_usersTousers_roles_user_idInput } from '../users-roles/users-roles-create-nested-many-without-users-users-tousers-roles-user-id.input';
import { post_prop_typesCreateNestedManyWithoutUsers_post_prop_types_created_byTousersInput } from '../post-prop-types/post-prop-types-create-nested-many-without-users-post-prop-types-created-by-tousers.input';
import { post_prop_typesCreateNestedManyWithoutUsers_post_prop_types_updated_byTousersInput } from '../post-prop-types/post-prop-types-create-nested-many-without-users-post-prop-types-updated-by-tousers.input';
import { delivery_pricingCreateNestedManyWithoutUsers_delivery_pricing_created_byTousersInput } from '../delivery-pricing/delivery-pricing-create-nested-many-without-users-delivery-pricing-created-by-tousers.input';
import { cityCreateNestedManyWithoutUsers_city_created_byTousersInput } from '../city/city-create-nested-many-without-users-city-created-by-tousers.input';
import { cityCreateNestedManyWithoutUsers_city_updated_byTousersInput } from '../city/city-create-nested-many-without-users-city-updated-by-tousers.input';

@InputType()
export class usersCreateWithoutDelivery_pricing_updated_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:true})
    first_name?: string;

    @Field(() => String, {nullable:true})
    last_name?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Boolean, {nullable:true})
    is_super_user?: boolean;

    @Field(() => user_status, {nullable:false})
    status!: keyof typeof user_status;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => otpCreateNestedManyWithoutUsersInput, {nullable:true})
    otp?: otpCreateNestedManyWithoutUsersInput;

    @Field(() => permissionsCreateNestedManyWithoutUsers_permissions_created_byTousersInput, {nullable:true})
    permissions_permissions_created_byTousers?: permissionsCreateNestedManyWithoutUsers_permissions_created_byTousersInput;

    @Field(() => permissionsCreateNestedManyWithoutUsers_permissions_updated_byTousersInput, {nullable:true})
    permissions_permissions_updated_byTousers?: permissionsCreateNestedManyWithoutUsers_permissions_updated_byTousersInput;

    @Field(() => postCreateNestedManyWithoutUsers_post_created_byTousersInput, {nullable:true})
    post_post_created_byTousers?: postCreateNestedManyWithoutUsers_post_created_byTousersInput;

    @Field(() => postCreateNestedManyWithoutUsers_post_updated_byTousersInput, {nullable:true})
    post_updated_byTousers?: postCreateNestedManyWithoutUsers_post_updated_byTousersInput;

    @Field(() => postCreateNestedManyWithoutUsers_post_user_idTousersInput, {nullable:true})
    post_post_user_idTousers?: postCreateNestedManyWithoutUsers_post_user_idTousersInput;

    @Field(() => rolesCreateNestedManyWithoutUsers_roles_created_byTousersInput, {nullable:true})
    roles_roles_created_byTousers?: rolesCreateNestedManyWithoutUsers_roles_created_byTousersInput;

    @Field(() => rolesCreateNestedManyWithoutUsers_roles_updated_byTousersInput, {nullable:true})
    roles_roles_updated_byTousers?: rolesCreateNestedManyWithoutUsers_roles_updated_byTousersInput;

    @Field(() => roles_permissionsCreateNestedManyWithoutUsers_roles_permissions_created_byTousersInput, {nullable:true})
    roles_permissions_roles_permissions_created_byTousers?: roles_permissionsCreateNestedManyWithoutUsers_roles_permissions_created_byTousersInput;

    @Field(() => roles_permissionsCreateNestedManyWithoutUsers_roles_permissions_updated_byTousersInput, {nullable:true})
    roles_permissions_roles_permissions_updated_byTousers?: roles_permissionsCreateNestedManyWithoutUsers_roles_permissions_updated_byTousersInput;

    @Field(() => users_permissionsCreateNestedManyWithoutUsers_usersTousers_permissions_created_byInput, {nullable:true})
    users_permissions_usersTousers_permissions_created_by?: users_permissionsCreateNestedManyWithoutUsers_usersTousers_permissions_created_byInput;

    @Field(() => users_permissionsCreateNestedManyWithoutUsers_usersTousers_permissions_updated_byInput, {nullable:true})
    users_permissions_usersTousers_permissions_updated_by?: users_permissionsCreateNestedManyWithoutUsers_usersTousers_permissions_updated_byInput;

    @Field(() => users_permissionsCreateNestedManyWithoutUsers_usersTousers_permissions_user_idInput, {nullable:true})
    users_permissions_usersTousers_permissions_user_id?: users_permissionsCreateNestedManyWithoutUsers_usersTousers_permissions_user_idInput;

    @Field(() => users_rolesCreateNestedManyWithoutUsers_usersTousers_roles_created_byInput, {nullable:true})
    users_roles_usersTousers_roles_created_by?: users_rolesCreateNestedManyWithoutUsers_usersTousers_roles_created_byInput;

    @Field(() => users_rolesCreateNestedManyWithoutUsers_usersTousers_roles_updated_byInput, {nullable:true})
    users_roles_usersTousers_roles_updated_by?: users_rolesCreateNestedManyWithoutUsers_usersTousers_roles_updated_byInput;

    @Field(() => users_rolesCreateNestedManyWithoutUsers_usersTousers_roles_user_idInput, {nullable:true})
    users_roles_usersTousers_roles_user_id?: users_rolesCreateNestedManyWithoutUsers_usersTousers_roles_user_idInput;

    @Field(() => post_prop_typesCreateNestedManyWithoutUsers_post_prop_types_created_byTousersInput, {nullable:true})
    post_prop_types_created_byTousers?: post_prop_typesCreateNestedManyWithoutUsers_post_prop_types_created_byTousersInput;

    @Field(() => post_prop_typesCreateNestedManyWithoutUsers_post_prop_types_updated_byTousersInput, {nullable:true})
    post_prop_types_updated_byTousers?: post_prop_typesCreateNestedManyWithoutUsers_post_prop_types_updated_byTousersInput;

    @Field(() => delivery_pricingCreateNestedManyWithoutUsers_delivery_pricing_created_byTousersInput, {nullable:true})
    delivery_pricing_created_byTousers?: delivery_pricingCreateNestedManyWithoutUsers_delivery_pricing_created_byTousersInput;

    @Field(() => cityCreateNestedManyWithoutUsers_city_created_byTousersInput, {nullable:true})
    city_created_byTousers?: cityCreateNestedManyWithoutUsers_city_created_byTousersInput;

    @Field(() => cityCreateNestedManyWithoutUsers_city_updated_byTousersInput, {nullable:true})
    city_updated_byTousers?: cityCreateNestedManyWithoutUsers_city_updated_byTousersInput;
}
