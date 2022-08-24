import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { user_status } from '../prisma/user-status.enum';
import { otpUpdateManyWithoutUsersNestedInput } from '../otp/otp-update-many-without-users-nested.input';
import { permissionsUpdateManyWithoutUsers_permissions_updated_byTousersNestedInput } from '../permissions/permissions-update-many-without-users-permissions-updated-by-tousers-nested.input';
import { postUpdateManyWithoutUsers_post_created_byTousersNestedInput } from '../post/post-update-many-without-users-post-created-by-tousers-nested.input';
import { postUpdateManyWithoutUsers_post_updated_byTousersNestedInput } from '../post/post-update-many-without-users-post-updated-by-tousers-nested.input';
import { postUpdateManyWithoutUsers_post_user_idTousersNestedInput } from '../post/post-update-many-without-users-post-user-id-tousers-nested.input';
import { rolesUpdateManyWithoutUsers_roles_created_byTousersNestedInput } from '../roles/roles-update-many-without-users-roles-created-by-tousers-nested.input';
import { rolesUpdateManyWithoutUsers_roles_updated_byTousersNestedInput } from '../roles/roles-update-many-without-users-roles-updated-by-tousers-nested.input';
import { roles_permissionsUpdateManyWithoutUsers_roles_permissions_created_byTousersNestedInput } from '../roles-permissions/roles-permissions-update-many-without-users-roles-permissions-created-by-tousers-nested.input';
import { roles_permissionsUpdateManyWithoutUsers_roles_permissions_updated_byTousersNestedInput } from '../roles-permissions/roles-permissions-update-many-without-users-roles-permissions-updated-by-tousers-nested.input';
import { users_permissionsUpdateManyWithoutUsers_usersTousers_permissions_created_byNestedInput } from '../users-permissions/users-permissions-update-many-without-users-users-tousers-permissions-created-by-nested.input';
import { users_permissionsUpdateManyWithoutUsers_usersTousers_permissions_updated_byNestedInput } from '../users-permissions/users-permissions-update-many-without-users-users-tousers-permissions-updated-by-nested.input';
import { users_permissionsUpdateManyWithoutUsers_usersTousers_permissions_user_idNestedInput } from '../users-permissions/users-permissions-update-many-without-users-users-tousers-permissions-user-id-nested.input';
import { users_rolesUpdateManyWithoutUsers_usersTousers_roles_created_byNestedInput } from '../users-roles/users-roles-update-many-without-users-users-tousers-roles-created-by-nested.input';
import { users_rolesUpdateManyWithoutUsers_usersTousers_roles_updated_byNestedInput } from '../users-roles/users-roles-update-many-without-users-users-tousers-roles-updated-by-nested.input';
import { users_rolesUpdateManyWithoutUsers_usersTousers_roles_user_idNestedInput } from '../users-roles/users-roles-update-many-without-users-users-tousers-roles-user-id-nested.input';
import { post_prop_typesUpdateManyWithoutUsers_post_prop_types_created_byTousersNestedInput } from '../post-prop-types/post-prop-types-update-many-without-users-post-prop-types-created-by-tousers-nested.input';
import { post_prop_typesUpdateManyWithoutUsers_post_prop_types_updated_byTousersNestedInput } from '../post-prop-types/post-prop-types-update-many-without-users-post-prop-types-updated-by-tousers-nested.input';
import { delivery_pricingUpdateManyWithoutUsers_delivery_pricing_created_byTousersNestedInput } from '../delivery-pricing/delivery-pricing-update-many-without-users-delivery-pricing-created-by-tousers-nested.input';
import { delivery_pricingUpdateManyWithoutUsers_delivery_pricing_updated_byTousersNestedInput } from '../delivery-pricing/delivery-pricing-update-many-without-users-delivery-pricing-updated-by-tousers-nested.input';
import { cityUpdateManyWithoutUsers_city_created_byTousersNestedInput } from '../city/city-update-many-without-users-city-created-by-tousers-nested.input';
import { cityUpdateManyWithoutUsers_city_updated_byTousersNestedInput } from '../city/city-update-many-without-users-city-updated-by-tousers-nested.input';
import { organizationUpdateManyWithoutOrganization_created_byTousersNestedInput } from '../organization/organization-update-many-without-organization-created-by-tousers-nested.input';
import { organizationUpdateManyWithoutOrganization_updated_byTousersNestedInput } from '../organization/organization-update-many-without-organization-updated-by-tousers-nested.input';
import { work_schedulesUpdateManyWithoutWork_schedules_created_byTousersNestedInput } from '../work-schedules/work-schedules-update-many-without-work-schedules-created-by-tousers-nested.input';
import { work_schedulesUpdateManyWithoutWork_schedules_updated_byTousersNestedInput } from '../work-schedules/work-schedules-update-many-without-work-schedules-updated-by-tousers-nested.input';
import { delivery_pricingUpdateManyWithoutDelivery_pricing_organization_idTousersNestedInput } from '../delivery-pricing/delivery-pricing-update-many-without-delivery-pricing-organization-id-tousers-nested.input';

@InputType()
export class usersUpdateWithoutPermissions_permissions_created_byTousersInput {

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

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => otpUpdateManyWithoutUsersNestedInput, {nullable:true})
    otp?: otpUpdateManyWithoutUsersNestedInput;

    @Field(() => permissionsUpdateManyWithoutUsers_permissions_updated_byTousersNestedInput, {nullable:true})
    permissions_permissions_updated_byTousers?: permissionsUpdateManyWithoutUsers_permissions_updated_byTousersNestedInput;

    @Field(() => postUpdateManyWithoutUsers_post_created_byTousersNestedInput, {nullable:true})
    post_post_created_byTousers?: postUpdateManyWithoutUsers_post_created_byTousersNestedInput;

    @Field(() => postUpdateManyWithoutUsers_post_updated_byTousersNestedInput, {nullable:true})
    post_updated_byTousers?: postUpdateManyWithoutUsers_post_updated_byTousersNestedInput;

    @Field(() => postUpdateManyWithoutUsers_post_user_idTousersNestedInput, {nullable:true})
    post_post_user_idTousers?: postUpdateManyWithoutUsers_post_user_idTousersNestedInput;

    @Field(() => rolesUpdateManyWithoutUsers_roles_created_byTousersNestedInput, {nullable:true})
    roles_roles_created_byTousers?: rolesUpdateManyWithoutUsers_roles_created_byTousersNestedInput;

    @Field(() => rolesUpdateManyWithoutUsers_roles_updated_byTousersNestedInput, {nullable:true})
    roles_roles_updated_byTousers?: rolesUpdateManyWithoutUsers_roles_updated_byTousersNestedInput;

    @Field(() => roles_permissionsUpdateManyWithoutUsers_roles_permissions_created_byTousersNestedInput, {nullable:true})
    roles_permissions_roles_permissions_created_byTousers?: roles_permissionsUpdateManyWithoutUsers_roles_permissions_created_byTousersNestedInput;

    @Field(() => roles_permissionsUpdateManyWithoutUsers_roles_permissions_updated_byTousersNestedInput, {nullable:true})
    roles_permissions_roles_permissions_updated_byTousers?: roles_permissionsUpdateManyWithoutUsers_roles_permissions_updated_byTousersNestedInput;

    @Field(() => users_permissionsUpdateManyWithoutUsers_usersTousers_permissions_created_byNestedInput, {nullable:true})
    users_permissions_usersTousers_permissions_created_by?: users_permissionsUpdateManyWithoutUsers_usersTousers_permissions_created_byNestedInput;

    @Field(() => users_permissionsUpdateManyWithoutUsers_usersTousers_permissions_updated_byNestedInput, {nullable:true})
    users_permissions_usersTousers_permissions_updated_by?: users_permissionsUpdateManyWithoutUsers_usersTousers_permissions_updated_byNestedInput;

    @Field(() => users_permissionsUpdateManyWithoutUsers_usersTousers_permissions_user_idNestedInput, {nullable:true})
    users_permissions_usersTousers_permissions_user_id?: users_permissionsUpdateManyWithoutUsers_usersTousers_permissions_user_idNestedInput;

    @Field(() => users_rolesUpdateManyWithoutUsers_usersTousers_roles_created_byNestedInput, {nullable:true})
    users_roles_usersTousers_roles_created_by?: users_rolesUpdateManyWithoutUsers_usersTousers_roles_created_byNestedInput;

    @Field(() => users_rolesUpdateManyWithoutUsers_usersTousers_roles_updated_byNestedInput, {nullable:true})
    users_roles_usersTousers_roles_updated_by?: users_rolesUpdateManyWithoutUsers_usersTousers_roles_updated_byNestedInput;

    @Field(() => users_rolesUpdateManyWithoutUsers_usersTousers_roles_user_idNestedInput, {nullable:true})
    users_roles_usersTousers_roles_user_id?: users_rolesUpdateManyWithoutUsers_usersTousers_roles_user_idNestedInput;

    @Field(() => post_prop_typesUpdateManyWithoutUsers_post_prop_types_created_byTousersNestedInput, {nullable:true})
    post_prop_types_created_byTousers?: post_prop_typesUpdateManyWithoutUsers_post_prop_types_created_byTousersNestedInput;

    @Field(() => post_prop_typesUpdateManyWithoutUsers_post_prop_types_updated_byTousersNestedInput, {nullable:true})
    post_prop_types_updated_byTousers?: post_prop_typesUpdateManyWithoutUsers_post_prop_types_updated_byTousersNestedInput;

    @Field(() => delivery_pricingUpdateManyWithoutUsers_delivery_pricing_created_byTousersNestedInput, {nullable:true})
    delivery_pricing_created_byTousers?: delivery_pricingUpdateManyWithoutUsers_delivery_pricing_created_byTousersNestedInput;

    @Field(() => delivery_pricingUpdateManyWithoutUsers_delivery_pricing_updated_byTousersNestedInput, {nullable:true})
    delivery_pricing_updated_byTousers?: delivery_pricingUpdateManyWithoutUsers_delivery_pricing_updated_byTousersNestedInput;

    @Field(() => cityUpdateManyWithoutUsers_city_created_byTousersNestedInput, {nullable:true})
    city_created_byTousers?: cityUpdateManyWithoutUsers_city_created_byTousersNestedInput;

    @Field(() => cityUpdateManyWithoutUsers_city_updated_byTousersNestedInput, {nullable:true})
    city_updated_byTousers?: cityUpdateManyWithoutUsers_city_updated_byTousersNestedInput;

    @Field(() => organizationUpdateManyWithoutOrganization_created_byTousersNestedInput, {nullable:true})
    organization_created_byTousers?: organizationUpdateManyWithoutOrganization_created_byTousersNestedInput;

    @Field(() => organizationUpdateManyWithoutOrganization_updated_byTousersNestedInput, {nullable:true})
    organization_updated_byTousers?: organizationUpdateManyWithoutOrganization_updated_byTousersNestedInput;

    @Field(() => work_schedulesUpdateManyWithoutWork_schedules_created_byTousersNestedInput, {nullable:true})
    work_schedules_created_byTousers?: work_schedulesUpdateManyWithoutWork_schedules_created_byTousersNestedInput;

    @Field(() => work_schedulesUpdateManyWithoutWork_schedules_updated_byTousersNestedInput, {nullable:true})
    work_schedules_updated_byTousers?: work_schedulesUpdateManyWithoutWork_schedules_updated_byTousersNestedInput;

    @Field(() => delivery_pricingUpdateManyWithoutDelivery_pricing_organization_idTousersNestedInput, {nullable:true})
    delivery_pricing_organization_idTousers?: delivery_pricingUpdateManyWithoutDelivery_pricing_organization_idTousersNestedInput;
}
