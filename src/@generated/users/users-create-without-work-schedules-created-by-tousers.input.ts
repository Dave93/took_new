import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { user_status } from '../prisma/user-status.enum';
import { drive_type } from '../prisma/drive-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
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
import { delivery_pricingCreateNestedManyWithoutUsers_delivery_pricing_updated_byTousersInput } from '../delivery-pricing/delivery-pricing-create-nested-many-without-users-delivery-pricing-updated-by-tousers.input';
import { cityCreateNestedManyWithoutUsers_city_created_byTousersInput } from '../city/city-create-nested-many-without-users-city-created-by-tousers.input';
import { cityCreateNestedManyWithoutUsers_city_updated_byTousersInput } from '../city/city-create-nested-many-without-users-city-updated-by-tousers.input';
import { organizationCreateNestedManyWithoutOrganization_created_byTousersInput } from '../organization/organization-create-nested-many-without-organization-created-by-tousers.input';
import { organizationCreateNestedManyWithoutOrganization_updated_byTousersInput } from '../organization/organization-create-nested-many-without-organization-updated-by-tousers.input';
import { work_schedulesCreateNestedManyWithoutWork_schedules_updated_byTousersInput } from '../work-schedules/work-schedules-create-nested-many-without-work-schedules-updated-by-tousers.input';
import { users_terminalsCreateNestedManyWithoutUsersInput } from '../users-terminals/users-terminals-create-nested-many-without-users.input';
import { users_work_schedulesCreateNestedManyWithoutUsersInput } from '../users-work-schedules/users-work-schedules-create-nested-many-without-users.input';
import { work_schedule_entriesCreateNestedManyWithoutWork_schedule_entries_created_byTousersInput } from '../work-schedule-entries/work-schedule-entries-create-nested-many-without-work-schedule-entries-created-by-tousers.input';
import { work_schedule_entriesCreateNestedManyWithoutWork_schedule_entries_updated_byTousersInput } from '../work-schedule-entries/work-schedule-entries-create-nested-many-without-work-schedule-entries-updated-by-tousers.input';
import { work_schedule_entriesCreateNestedManyWithoutWork_schedule_entries_usersInput } from '../work-schedule-entries/work-schedule-entries-create-nested-many-without-work-schedule-entries-users.input';
import { customers_commentsCreateNestedManyWithoutCustomers_comments_created_byTousersInput } from '../customers-comments/customers-comments-create-nested-many-without-customers-comments-created-by-tousers.input';
import { ordersCreateNestedManyWithoutOrders_created_byTousersInput } from '../orders/orders-create-nested-many-without-orders-created-by-tousers.input';
import { ordersCreateNestedManyWithoutOrders_updated_byTousersInput } from '../orders/orders-create-nested-many-without-orders-updated-by-tousers.input';
import { ordersCreateNestedManyWithoutOrders_couriersInput } from '../orders/orders-create-nested-many-without-orders-couriers.input';
import { order_actionsCreateNestedManyWithoutOrder_actions_created_byTousersInput } from '../order-actions/order-actions-create-nested-many-without-order-actions-created-by-tousers.input';
import { order_locationsCreateNestedManyWithoutOrder_locations_created_byTousersInput } from '../order-locations/order-locations-create-nested-many-without-order-locations-created-by-tousers.input';
import { order_locationsCreateNestedManyWithoutOrder_locations_couriersInput } from '../order-locations/order-locations-create-nested-many-without-order-locations-couriers.input';
import { api_tokensCreateNestedManyWithoutApi_tokens_created_byTousersInput } from '../api-tokens/api-tokens-create-nested-many-without-api-tokens-created-by-tousers.input';
import { api_tokensCreateNestedManyWithoutApi_tokens_updated_byTousersInput } from '../api-tokens/api-tokens-create-nested-many-without-api-tokens-updated-by-tousers.input';
import { order_votesCreateNestedManyWithoutOrder_votes_created_byTousersInput } from '../order-votes/order-votes-create-nested-many-without-order-votes-created-by-tousers.input';
import { order_votesCreateNestedManyWithoutOrder_votes_couriersInput } from '../order-votes/order-votes-create-nested-many-without-order-votes-couriers.input';
import { order_transactionsCreateNestedManyWithoutOrder_transactions_created_byTousersInput } from '../order-transactions/order-transactions-create-nested-many-without-order-transactions-created-by-tousers.input';
import { order_transactionsCreateNestedManyWithoutOrder_transactions_couriersInput } from '../order-transactions/order-transactions-create-nested-many-without-order-transactions-couriers.input';
import { outside_requestsCreateNestedManyWithoutOutside_requests_created_byTousersInput } from '../outside-requests/outside-requests-create-nested-many-without-outside-requests-created-by-tousers.input';
import { outside_requestsCreateNestedManyWithoutOutside_requests_updated_byTousersInput } from '../outside-requests/outside-requests-create-nested-many-without-outside-requests-updated-by-tousers.input';

@InputType()
export class usersCreateWithoutWork_schedules_created_byTousersInput {

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

    @Field(() => String, {nullable:true})
    fcm_token?: string;

    @Field(() => Float, {nullable:true})
    wallet_balance?: number;

    @Field(() => Int, {nullable:true})
    max_active_order_count?: number;

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

    @Field(() => work_schedulesCreateNestedManyWithoutWork_schedules_updated_byTousersInput, {nullable:true})
    work_schedules_updated_byTousers?: work_schedulesCreateNestedManyWithoutWork_schedules_updated_byTousersInput;

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

    @Field(() => customers_commentsCreateNestedManyWithoutCustomers_comments_created_byTousersInput, {nullable:true})
    customers_comments_created_byTousers?: customers_commentsCreateNestedManyWithoutCustomers_comments_created_byTousersInput;

    @Field(() => ordersCreateNestedManyWithoutOrders_created_byTousersInput, {nullable:true})
    orders_created_byTousers?: ordersCreateNestedManyWithoutOrders_created_byTousersInput;

    @Field(() => ordersCreateNestedManyWithoutOrders_updated_byTousersInput, {nullable:true})
    orders_updated_byTousers?: ordersCreateNestedManyWithoutOrders_updated_byTousersInput;

    @Field(() => ordersCreateNestedManyWithoutOrders_couriersInput, {nullable:true})
    orders_couriers?: ordersCreateNestedManyWithoutOrders_couriersInput;

    @Field(() => order_actionsCreateNestedManyWithoutOrder_actions_created_byTousersInput, {nullable:true})
    order_actions_created_byTousers?: order_actionsCreateNestedManyWithoutOrder_actions_created_byTousersInput;

    @Field(() => order_locationsCreateNestedManyWithoutOrder_locations_created_byTousersInput, {nullable:true})
    order_locations_created_byTousers?: order_locationsCreateNestedManyWithoutOrder_locations_created_byTousersInput;

    @Field(() => order_locationsCreateNestedManyWithoutOrder_locations_couriersInput, {nullable:true})
    order_locations_couriers?: order_locationsCreateNestedManyWithoutOrder_locations_couriersInput;

    @Field(() => api_tokensCreateNestedManyWithoutApi_tokens_created_byTousersInput, {nullable:true})
    api_tokens_created_byTousers?: api_tokensCreateNestedManyWithoutApi_tokens_created_byTousersInput;

    @Field(() => api_tokensCreateNestedManyWithoutApi_tokens_updated_byTousersInput, {nullable:true})
    api_tokens_updated_byTousers?: api_tokensCreateNestedManyWithoutApi_tokens_updated_byTousersInput;

    @Field(() => order_votesCreateNestedManyWithoutOrder_votes_created_byTousersInput, {nullable:true})
    order_votes_created_byTousers?: order_votesCreateNestedManyWithoutOrder_votes_created_byTousersInput;

    @Field(() => order_votesCreateNestedManyWithoutOrder_votes_couriersInput, {nullable:true})
    order_votes_couriers?: order_votesCreateNestedManyWithoutOrder_votes_couriersInput;

    @Field(() => order_transactionsCreateNestedManyWithoutOrder_transactions_created_byTousersInput, {nullable:true})
    order_transactions_created_byTousers?: order_transactionsCreateNestedManyWithoutOrder_transactions_created_byTousersInput;

    @Field(() => order_transactionsCreateNestedManyWithoutOrder_transactions_couriersInput, {nullable:true})
    order_transactions_couriers?: order_transactionsCreateNestedManyWithoutOrder_transactions_couriersInput;

    @Field(() => outside_requestsCreateNestedManyWithoutOutside_requests_created_byTousersInput, {nullable:true})
    outside_requests_created_byTousers?: outside_requestsCreateNestedManyWithoutOutside_requests_created_byTousersInput;

    @Field(() => outside_requestsCreateNestedManyWithoutOutside_requests_updated_byTousersInput, {nullable:true})
    outside_requests_updated_byTousers?: outside_requestsCreateNestedManyWithoutOutside_requests_updated_byTousersInput;
}
