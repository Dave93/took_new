import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { user_status } from '../prisma/user-status.enum';
import { drive_type } from '../prisma/drive-type.enum';
import { Float } from '@nestjs/graphql';
import { otpCreateNestedManyWithoutUsersInput } from '../otp/otp-create-nested-many-without-users.input';
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
import { delivery_pricingCreateNestedManyWithoutUsers_delivery_pricing_updated_byTousersInput } from '../delivery-pricing/delivery-pricing-create-nested-many-without-users-delivery-pricing-updated-by-tousers.input';
import { cityCreateNestedManyWithoutUsers_city_created_byTousersInput } from '../city/city-create-nested-many-without-users-city-created-by-tousers.input';
import { cityCreateNestedManyWithoutUsers_city_updated_byTousersInput } from '../city/city-create-nested-many-without-users-city-updated-by-tousers.input';
import { organizationCreateNestedManyWithoutOrganization_created_byTousersInput } from '../organization/organization-create-nested-many-without-organization-created-by-tousers.input';
import { organizationCreateNestedManyWithoutOrganization_updated_byTousersInput } from '../organization/organization-create-nested-many-without-organization-updated-by-tousers.input';
import { work_schedulesCreateNestedManyWithoutWork_schedules_created_byTousersInput } from '../work-schedules/work-schedules-create-nested-many-without-work-schedules-created-by-tousers.input';
import { work_schedulesCreateNestedManyWithoutWork_schedules_updated_byTousersInput } from '../work-schedules/work-schedules-create-nested-many-without-work-schedules-updated-by-tousers.input';
import { terminalsCreateNestedManyWithoutTerminals_created_byTousersInput } from '../terminals/terminals-create-nested-many-without-terminals-created-by-tousers.input';
import { terminalsCreateNestedManyWithoutTerminals_updated_byTousersInput } from '../terminals/terminals-create-nested-many-without-terminals-updated-by-tousers.input';
import { users_terminalsCreateNestedManyWithoutUsersInput } from '../users-terminals/users-terminals-create-nested-many-without-users.input';
import { users_work_schedulesCreateNestedManyWithoutUsersInput } from '../users-work-schedules/users-work-schedules-create-nested-many-without-users.input';
import { work_schedule_entriesCreateNestedManyWithoutWork_schedule_entries_created_byTousersInput } from '../work-schedule-entries/work-schedule-entries-create-nested-many-without-work-schedule-entries-created-by-tousers.input';
import { work_schedule_entriesCreateNestedManyWithoutWork_schedule_entries_updated_byTousersInput } from '../work-schedule-entries/work-schedule-entries-create-nested-many-without-work-schedule-entries-updated-by-tousers.input';
import { work_schedule_entriesCreateNestedManyWithoutWork_schedule_entries_usersInput } from '../work-schedule-entries/work-schedule-entries-create-nested-many-without-work-schedule-entries-users.input';

@InputType()
export class usersCreateWithoutPermissions_permissions_created_byTousersInput {

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

    @Field(() => otpCreateNestedManyWithoutUsersInput, {nullable:true})
    otp?: otpCreateNestedManyWithoutUsersInput;

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

    @Field(() => delivery_pricingCreateNestedManyWithoutUsers_delivery_pricing_updated_byTousersInput, {nullable:true})
    delivery_pricing_updated_byTousers?: delivery_pricingCreateNestedManyWithoutUsers_delivery_pricing_updated_byTousersInput;

    @Field(() => cityCreateNestedManyWithoutUsers_city_created_byTousersInput, {nullable:true})
    city_created_byTousers?: cityCreateNestedManyWithoutUsers_city_created_byTousersInput;

    @Field(() => cityCreateNestedManyWithoutUsers_city_updated_byTousersInput, {nullable:true})
    city_updated_byTousers?: cityCreateNestedManyWithoutUsers_city_updated_byTousersInput;

    @Field(() => organizationCreateNestedManyWithoutOrganization_created_byTousersInput, {nullable:true})
    organization_created_byTousers?: organizationCreateNestedManyWithoutOrganization_created_byTousersInput;

    @Field(() => organizationCreateNestedManyWithoutOrganization_updated_byTousersInput, {nullable:true})
    organization_updated_byTousers?: organizationCreateNestedManyWithoutOrganization_updated_byTousersInput;

    @Field(() => work_schedulesCreateNestedManyWithoutWork_schedules_created_byTousersInput, {nullable:true})
    work_schedules_created_byTousers?: work_schedulesCreateNestedManyWithoutWork_schedules_created_byTousersInput;

    @Field(() => work_schedulesCreateNestedManyWithoutWork_schedules_updated_byTousersInput, {nullable:true})
    work_schedules_updated_byTousers?: work_schedulesCreateNestedManyWithoutWork_schedules_updated_byTousersInput;

    @Field(() => terminalsCreateNestedManyWithoutTerminals_created_byTousersInput, {nullable:true})
    terminals_created_byTousers?: terminalsCreateNestedManyWithoutTerminals_created_byTousersInput;

    @Field(() => terminalsCreateNestedManyWithoutTerminals_updated_byTousersInput, {nullable:true})
    terminals_updated_byTousers?: terminalsCreateNestedManyWithoutTerminals_updated_byTousersInput;

    @Field(() => users_terminalsCreateNestedManyWithoutUsersInput, {nullable:true})
    users_terminals?: users_terminalsCreateNestedManyWithoutUsersInput;

    @Field(() => users_work_schedulesCreateNestedManyWithoutUsersInput, {nullable:true})
    users_work_schedules?: users_work_schedulesCreateNestedManyWithoutUsersInput;

    @Field(() => work_schedule_entriesCreateNestedManyWithoutWork_schedule_entries_created_byTousersInput, {nullable:true})
    work_schedule_entries_created_byTousers?: work_schedule_entriesCreateNestedManyWithoutWork_schedule_entries_created_byTousersInput;

    @Field(() => work_schedule_entriesCreateNestedManyWithoutWork_schedule_entries_updated_byTousersInput, {nullable:true})
    work_schedule_entries_updated_byTousers?: work_schedule_entriesCreateNestedManyWithoutWork_schedule_entries_updated_byTousersInput;

    @Field(() => work_schedule_entriesCreateNestedManyWithoutWork_schedule_entries_usersInput, {nullable:true})
    work_schedule_entries_users?: work_schedule_entriesCreateNestedManyWithoutWork_schedule_entries_usersInput;
}
