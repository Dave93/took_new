import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { user_status } from '../prisma/user-status.enum';
import { drive_type } from '../prisma/drive-type.enum';
import { Float } from '@nestjs/graphql';
import { otpUncheckedUpdateManyWithoutUsersNestedInput } from '../otp/otp-unchecked-update-many-without-users-nested.input';
import { permissionsUncheckedUpdateManyWithoutUsers_permissions_created_byTousersNestedInput } from '../permissions/permissions-unchecked-update-many-without-users-permissions-created-by-tousers-nested.input';
import { permissionsUncheckedUpdateManyWithoutUsers_permissions_updated_byTousersNestedInput } from '../permissions/permissions-unchecked-update-many-without-users-permissions-updated-by-tousers-nested.input';
import { postUncheckedUpdateManyWithoutUsers_post_created_byTousersNestedInput } from '../post/post-unchecked-update-many-without-users-post-created-by-tousers-nested.input';
import { postUncheckedUpdateManyWithoutUsers_post_updated_byTousersNestedInput } from '../post/post-unchecked-update-many-without-users-post-updated-by-tousers-nested.input';
import { rolesUncheckedUpdateManyWithoutUsers_roles_created_byTousersNestedInput } from '../roles/roles-unchecked-update-many-without-users-roles-created-by-tousers-nested.input';
import { rolesUncheckedUpdateManyWithoutUsers_roles_updated_byTousersNestedInput } from '../roles/roles-unchecked-update-many-without-users-roles-updated-by-tousers-nested.input';
import { roles_permissionsUncheckedUpdateManyWithoutUsers_roles_permissions_created_byTousersNestedInput } from '../roles-permissions/roles-permissions-unchecked-update-many-without-users-roles-permissions-created-by-tousers-nested.input';
import { roles_permissionsUncheckedUpdateManyWithoutUsers_roles_permissions_updated_byTousersNestedInput } from '../roles-permissions/roles-permissions-unchecked-update-many-without-users-roles-permissions-updated-by-tousers-nested.input';
import { users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_created_byNestedInput } from '../users-permissions/users-permissions-unchecked-update-many-without-users-users-tousers-permissions-created-by-nested.input';
import { users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_updated_byNestedInput } from '../users-permissions/users-permissions-unchecked-update-many-without-users-users-tousers-permissions-updated-by-nested.input';
import { users_permissionsUncheckedUpdateManyWithoutUsers_usersTousers_permissions_user_idNestedInput } from '../users-permissions/users-permissions-unchecked-update-many-without-users-users-tousers-permissions-user-id-nested.input';
import { users_rolesUncheckedUpdateManyWithoutUsers_usersTousers_roles_created_byNestedInput } from '../users-roles/users-roles-unchecked-update-many-without-users-users-tousers-roles-created-by-nested.input';
import { users_rolesUncheckedUpdateManyWithoutUsers_usersTousers_roles_updated_byNestedInput } from '../users-roles/users-roles-unchecked-update-many-without-users-users-tousers-roles-updated-by-nested.input';
import { users_rolesUncheckedUpdateManyWithoutUsers_usersTousers_roles_user_idNestedInput } from '../users-roles/users-roles-unchecked-update-many-without-users-users-tousers-roles-user-id-nested.input';
import { post_prop_typesUncheckedUpdateManyWithoutUsers_post_prop_types_created_byTousersNestedInput } from '../post-prop-types/post-prop-types-unchecked-update-many-without-users-post-prop-types-created-by-tousers-nested.input';
import { post_prop_typesUncheckedUpdateManyWithoutUsers_post_prop_types_updated_byTousersNestedInput } from '../post-prop-types/post-prop-types-unchecked-update-many-without-users-post-prop-types-updated-by-tousers-nested.input';
import { delivery_pricingUncheckedUpdateManyWithoutUsers_delivery_pricing_created_byTousersNestedInput } from '../delivery-pricing/delivery-pricing-unchecked-update-many-without-users-delivery-pricing-created-by-tousers-nested.input';
import { delivery_pricingUncheckedUpdateManyWithoutUsers_delivery_pricing_updated_byTousersNestedInput } from '../delivery-pricing/delivery-pricing-unchecked-update-many-without-users-delivery-pricing-updated-by-tousers-nested.input';
import { cityUncheckedUpdateManyWithoutUsers_city_created_byTousersNestedInput } from '../city/city-unchecked-update-many-without-users-city-created-by-tousers-nested.input';
import { cityUncheckedUpdateManyWithoutUsers_city_updated_byTousersNestedInput } from '../city/city-unchecked-update-many-without-users-city-updated-by-tousers-nested.input';
import { organizationUncheckedUpdateManyWithoutOrganization_created_byTousersNestedInput } from '../organization/organization-unchecked-update-many-without-organization-created-by-tousers-nested.input';
import { organizationUncheckedUpdateManyWithoutOrganization_updated_byTousersNestedInput } from '../organization/organization-unchecked-update-many-without-organization-updated-by-tousers-nested.input';
import { work_schedulesUncheckedUpdateManyWithoutWork_schedules_created_byTousersNestedInput } from '../work-schedules/work-schedules-unchecked-update-many-without-work-schedules-created-by-tousers-nested.input';
import { work_schedulesUncheckedUpdateManyWithoutWork_schedules_updated_byTousersNestedInput } from '../work-schedules/work-schedules-unchecked-update-many-without-work-schedules-updated-by-tousers-nested.input';
import { terminalsUncheckedUpdateManyWithoutTerminals_created_byTousersNestedInput } from '../terminals/terminals-unchecked-update-many-without-terminals-created-by-tousers-nested.input';
import { terminalsUncheckedUpdateManyWithoutTerminals_updated_byTousersNestedInput } from '../terminals/terminals-unchecked-update-many-without-terminals-updated-by-tousers-nested.input';
import { users_terminalsUncheckedUpdateManyWithoutUsersNestedInput } from '../users-terminals/users-terminals-unchecked-update-many-without-users-nested.input';
import { users_work_schedulesUncheckedUpdateManyWithoutUsersNestedInput } from '../users-work-schedules/users-work-schedules-unchecked-update-many-without-users-nested.input';

@InputType()
export class usersUncheckedUpdateWithoutPost_post_user_idTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    first_name?: string;

    @Field(() => String, {nullable:true})
    last_name?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Boolean, {nullable:true})
    is_super_user?: boolean;

    @Field(() => user_status, {nullable:true})
    status?: keyof typeof user_status;

    @Field(() => drive_type, {nullable:true})
    drive_type?: keyof typeof drive_type;

    @Field(() => String, {nullable:true})
    card_name?: string;

    @Field(() => String, {nullable:true})
    card_number?: string;

    @Field(() => Date, {nullable:true})
    birth_date?: Date | string;

    @Field(() => String, {nullable:true})
    car_model?: string;

    @Field(() => String, {nullable:true})
    car_number?: string;

    @Field(() => Boolean, {nullable:true})
    is_online?: boolean;

    @Field(() => Float, {nullable:true})
    latitude?: number;

    @Field(() => Float, {nullable:true})
    longitude?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

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

    @Field(() => users_rolesUncheckedUpdateManyWithoutUsers_usersTousers_roles_updated_byNestedInput, {nullable:true})
    users_roles_usersTousers_roles_updated_by?: users_rolesUncheckedUpdateManyWithoutUsers_usersTousers_roles_updated_byNestedInput;

    @Field(() => users_rolesUncheckedUpdateManyWithoutUsers_usersTousers_roles_user_idNestedInput, {nullable:true})
    users_roles_usersTousers_roles_user_id?: users_rolesUncheckedUpdateManyWithoutUsers_usersTousers_roles_user_idNestedInput;

    @Field(() => post_prop_typesUncheckedUpdateManyWithoutUsers_post_prop_types_created_byTousersNestedInput, {nullable:true})
    post_prop_types_created_byTousers?: post_prop_typesUncheckedUpdateManyWithoutUsers_post_prop_types_created_byTousersNestedInput;

    @Field(() => post_prop_typesUncheckedUpdateManyWithoutUsers_post_prop_types_updated_byTousersNestedInput, {nullable:true})
    post_prop_types_updated_byTousers?: post_prop_typesUncheckedUpdateManyWithoutUsers_post_prop_types_updated_byTousersNestedInput;

    @Field(() => delivery_pricingUncheckedUpdateManyWithoutUsers_delivery_pricing_created_byTousersNestedInput, {nullable:true})
    delivery_pricing_created_byTousers?: delivery_pricingUncheckedUpdateManyWithoutUsers_delivery_pricing_created_byTousersNestedInput;

    @Field(() => delivery_pricingUncheckedUpdateManyWithoutUsers_delivery_pricing_updated_byTousersNestedInput, {nullable:true})
    delivery_pricing_updated_byTousers?: delivery_pricingUncheckedUpdateManyWithoutUsers_delivery_pricing_updated_byTousersNestedInput;

    @Field(() => cityUncheckedUpdateManyWithoutUsers_city_created_byTousersNestedInput, {nullable:true})
    city_created_byTousers?: cityUncheckedUpdateManyWithoutUsers_city_created_byTousersNestedInput;

    @Field(() => cityUncheckedUpdateManyWithoutUsers_city_updated_byTousersNestedInput, {nullable:true})
    city_updated_byTousers?: cityUncheckedUpdateManyWithoutUsers_city_updated_byTousersNestedInput;

    @Field(() => organizationUncheckedUpdateManyWithoutOrganization_created_byTousersNestedInput, {nullable:true})
    organization_created_byTousers?: organizationUncheckedUpdateManyWithoutOrganization_created_byTousersNestedInput;

    @Field(() => organizationUncheckedUpdateManyWithoutOrganization_updated_byTousersNestedInput, {nullable:true})
    organization_updated_byTousers?: organizationUncheckedUpdateManyWithoutOrganization_updated_byTousersNestedInput;

    @Field(() => work_schedulesUncheckedUpdateManyWithoutWork_schedules_created_byTousersNestedInput, {nullable:true})
    work_schedules_created_byTousers?: work_schedulesUncheckedUpdateManyWithoutWork_schedules_created_byTousersNestedInput;

    @Field(() => work_schedulesUncheckedUpdateManyWithoutWork_schedules_updated_byTousersNestedInput, {nullable:true})
    work_schedules_updated_byTousers?: work_schedulesUncheckedUpdateManyWithoutWork_schedules_updated_byTousersNestedInput;

    @Field(() => terminalsUncheckedUpdateManyWithoutTerminals_created_byTousersNestedInput, {nullable:true})
    terminals_created_byTousers?: terminalsUncheckedUpdateManyWithoutTerminals_created_byTousersNestedInput;

    @Field(() => terminalsUncheckedUpdateManyWithoutTerminals_updated_byTousersNestedInput, {nullable:true})
    terminals_updated_byTousers?: terminalsUncheckedUpdateManyWithoutTerminals_updated_byTousersNestedInput;

    @Field(() => users_terminalsUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    users_terminals?: users_terminalsUncheckedUpdateManyWithoutUsersNestedInput;

    @Field(() => users_work_schedulesUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    users_work_schedules?: users_work_schedulesUncheckedUpdateManyWithoutUsersNestedInput;
}
