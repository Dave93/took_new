import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { user_status } from '../prisma/user-status.enum';
import { drive_type } from '../prisma/drive-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { otpUncheckedCreateNestedManyWithoutUsersInput } from '../otp/otp-unchecked-create-nested-many-without-users.input';
import { permissionsUncheckedCreateNestedManyWithoutUsers_permissions_created_byTousersInput } from '../permissions/permissions-unchecked-create-nested-many-without-users-permissions-created-by-tousers.input';
import { permissionsUncheckedCreateNestedManyWithoutUsers_permissions_updated_byTousersInput } from '../permissions/permissions-unchecked-create-nested-many-without-users-permissions-updated-by-tousers.input';
import { postUncheckedCreateNestedManyWithoutUsers_post_created_byTousersInput } from '../post/post-unchecked-create-nested-many-without-users-post-created-by-tousers.input';
import { postUncheckedCreateNestedManyWithoutUsers_post_updated_byTousersInput } from '../post/post-unchecked-create-nested-many-without-users-post-updated-by-tousers.input';
import { postUncheckedCreateNestedManyWithoutUsers_post_user_idTousersInput } from '../post/post-unchecked-create-nested-many-without-users-post-user-id-tousers.input';
import { rolesUncheckedCreateNestedManyWithoutUsers_roles_created_byTousersInput } from '../roles/roles-unchecked-create-nested-many-without-users-roles-created-by-tousers.input';
import { rolesUncheckedCreateNestedManyWithoutUsers_roles_updated_byTousersInput } from '../roles/roles-unchecked-create-nested-many-without-users-roles-updated-by-tousers.input';
import { roles_permissionsUncheckedCreateNestedManyWithoutUsers_roles_permissions_created_byTousersInput } from '../roles-permissions/roles-permissions-unchecked-create-nested-many-without-users-roles-permissions-created-by-tousers.input';
import { roles_permissionsUncheckedCreateNestedManyWithoutUsers_roles_permissions_updated_byTousersInput } from '../roles-permissions/roles-permissions-unchecked-create-nested-many-without-users-roles-permissions-updated-by-tousers.input';
import { users_permissionsUncheckedCreateNestedManyWithoutUsers_usersTousers_permissions_created_byInput } from '../users-permissions/users-permissions-unchecked-create-nested-many-without-users-users-tousers-permissions-created-by.input';
import { users_permissionsUncheckedCreateNestedManyWithoutUsers_usersTousers_permissions_updated_byInput } from '../users-permissions/users-permissions-unchecked-create-nested-many-without-users-users-tousers-permissions-updated-by.input';
import { users_permissionsUncheckedCreateNestedManyWithoutUsers_usersTousers_permissions_user_idInput } from '../users-permissions/users-permissions-unchecked-create-nested-many-without-users-users-tousers-permissions-user-id.input';
import { users_rolesUncheckedCreateNestedManyWithoutUsers_usersTousers_roles_created_byInput } from '../users-roles/users-roles-unchecked-create-nested-many-without-users-users-tousers-roles-created-by.input';
import { users_rolesUncheckedCreateNestedManyWithoutUsers_usersTousers_roles_updated_byInput } from '../users-roles/users-roles-unchecked-create-nested-many-without-users-users-tousers-roles-updated-by.input';
import { users_rolesUncheckedCreateNestedManyWithoutUsers_usersTousers_roles_user_idInput } from '../users-roles/users-roles-unchecked-create-nested-many-without-users-users-tousers-roles-user-id.input';
import { post_prop_typesUncheckedCreateNestedManyWithoutUsers_post_prop_types_created_byTousersInput } from '../post-prop-types/post-prop-types-unchecked-create-nested-many-without-users-post-prop-types-created-by-tousers.input';
import { post_prop_typesUncheckedCreateNestedManyWithoutUsers_post_prop_types_updated_byTousersInput } from '../post-prop-types/post-prop-types-unchecked-create-nested-many-without-users-post-prop-types-updated-by-tousers.input';
import { delivery_pricingUncheckedCreateNestedManyWithoutUsers_delivery_pricing_created_byTousersInput } from '../delivery-pricing/delivery-pricing-unchecked-create-nested-many-without-users-delivery-pricing-created-by-tousers.input';
import { delivery_pricingUncheckedCreateNestedManyWithoutUsers_delivery_pricing_updated_byTousersInput } from '../delivery-pricing/delivery-pricing-unchecked-create-nested-many-without-users-delivery-pricing-updated-by-tousers.input';
import { cityUncheckedCreateNestedManyWithoutUsers_city_created_byTousersInput } from '../city/city-unchecked-create-nested-many-without-users-city-created-by-tousers.input';
import { cityUncheckedCreateNestedManyWithoutUsers_city_updated_byTousersInput } from '../city/city-unchecked-create-nested-many-without-users-city-updated-by-tousers.input';
import { organizationUncheckedCreateNestedManyWithoutOrganization_created_byTousersInput } from '../organization/organization-unchecked-create-nested-many-without-organization-created-by-tousers.input';
import { organizationUncheckedCreateNestedManyWithoutOrganization_updated_byTousersInput } from '../organization/organization-unchecked-create-nested-many-without-organization-updated-by-tousers.input';
import { work_schedulesUncheckedCreateNestedManyWithoutWork_schedules_created_byTousersInput } from '../work-schedules/work-schedules-unchecked-create-nested-many-without-work-schedules-created-by-tousers.input';
import { work_schedulesUncheckedCreateNestedManyWithoutWork_schedules_updated_byTousersInput } from '../work-schedules/work-schedules-unchecked-create-nested-many-without-work-schedules-updated-by-tousers.input';
import { users_terminalsUncheckedCreateNestedManyWithoutUsersInput } from '../users-terminals/users-terminals-unchecked-create-nested-many-without-users.input';
import { users_work_schedulesUncheckedCreateNestedManyWithoutUsersInput } from '../users-work-schedules/users-work-schedules-unchecked-create-nested-many-without-users.input';
import { work_schedule_entriesUncheckedCreateNestedManyWithoutWork_schedule_entries_created_byTousersInput } from '../work-schedule-entries/work-schedule-entries-unchecked-create-nested-many-without-work-schedule-entries-created-by-tousers.input';
import { work_schedule_entriesUncheckedCreateNestedManyWithoutWork_schedule_entries_updated_byTousersInput } from '../work-schedule-entries/work-schedule-entries-unchecked-create-nested-many-without-work-schedule-entries-updated-by-tousers.input';
import { work_schedule_entriesUncheckedCreateNestedManyWithoutWork_schedule_entries_usersInput } from '../work-schedule-entries/work-schedule-entries-unchecked-create-nested-many-without-work-schedule-entries-users.input';
import { customers_commentsUncheckedCreateNestedManyWithoutCustomers_comments_created_byTousersInput } from '../customers-comments/customers-comments-unchecked-create-nested-many-without-customers-comments-created-by-tousers.input';
import { ordersUncheckedCreateNestedManyWithoutOrders_created_byTousersInput } from '../orders/orders-unchecked-create-nested-many-without-orders-created-by-tousers.input';
import { ordersUncheckedCreateNestedManyWithoutOrders_updated_byTousersInput } from '../orders/orders-unchecked-create-nested-many-without-orders-updated-by-tousers.input';
import { ordersUncheckedCreateNestedManyWithoutOrders_couriersInput } from '../orders/orders-unchecked-create-nested-many-without-orders-couriers.input';
import { order_locationsUncheckedCreateNestedManyWithoutOrder_locations_created_byTousersInput } from '../order-locations/order-locations-unchecked-create-nested-many-without-order-locations-created-by-tousers.input';
import { order_locationsUncheckedCreateNestedManyWithoutOrder_locations_couriersInput } from '../order-locations/order-locations-unchecked-create-nested-many-without-order-locations-couriers.input';
import { api_tokensUncheckedCreateNestedManyWithoutApi_tokens_created_byTousersInput } from '../api-tokens/api-tokens-unchecked-create-nested-many-without-api-tokens-created-by-tousers.input';
import { api_tokensUncheckedCreateNestedManyWithoutApi_tokens_updated_byTousersInput } from '../api-tokens/api-tokens-unchecked-create-nested-many-without-api-tokens-updated-by-tousers.input';
import { order_votesUncheckedCreateNestedManyWithoutOrder_votes_created_byTousersInput } from '../order-votes/order-votes-unchecked-create-nested-many-without-order-votes-created-by-tousers.input';
import { order_votesUncheckedCreateNestedManyWithoutOrder_votes_couriersInput } from '../order-votes/order-votes-unchecked-create-nested-many-without-order-votes-couriers.input';
import { order_transactionsUncheckedCreateNestedManyWithoutOrder_transactions_created_byTousersInput } from '../order-transactions/order-transactions-unchecked-create-nested-many-without-order-transactions-created-by-tousers.input';
import { order_transactionsUncheckedCreateNestedManyWithoutOrder_transactions_couriersInput } from '../order-transactions/order-transactions-unchecked-create-nested-many-without-order-transactions-couriers.input';
import { outside_requestsUncheckedCreateNestedManyWithoutOutside_requests_created_byTousersInput } from '../outside-requests/outside-requests-unchecked-create-nested-many-without-outside-requests-created-by-tousers.input';
import { outside_requestsUncheckedCreateNestedManyWithoutOutside_requests_updated_byTousersInput } from '../outside-requests/outside-requests-unchecked-create-nested-many-without-outside-requests-updated-by-tousers.input';
import { courier_terminal_balanceUncheckedCreateNestedManyWithoutCourier_terminal_balance_couriersInput } from '../courier-terminal-balance/courier-terminal-balance-unchecked-create-nested-many-without-courier-terminal-balance-couriers.input';
import { courier_terminal_balanceUncheckedCreateNestedManyWithoutCourier_terminal_balance_created_byTousersInput } from '../courier-terminal-balance/courier-terminal-balance-unchecked-create-nested-many-without-courier-terminal-balance-created-by-tousers.input';
import { manager_withdrawUncheckedCreateNestedManyWithoutManager_withdraw_created_byTousersInput } from '../manager-withdraw/manager-withdraw-unchecked-create-nested-many-without-manager-withdraw-created-by-tousers.input';
import { manager_withdrawUncheckedCreateNestedManyWithoutManager_withdraw_managersInput } from '../manager-withdraw/manager-withdraw-unchecked-create-nested-many-without-manager-withdraw-managers.input';
import { manager_withdrawUncheckedCreateNestedManyWithoutManager_withdraw_couriersInput } from '../manager-withdraw/manager-withdraw-unchecked-create-nested-many-without-manager-withdraw-couriers.input';
import { timesheetUncheckedCreateNestedManyWithoutTimesheet_usersInput } from '../timesheet/timesheet-unchecked-create-nested-many-without-timesheet-users.input';
import { scheduled_reports_subscriptionUncheckedCreateNestedManyWithoutScheduled_reports_subscription_usersInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-unchecked-create-nested-many-without-scheduled-reports-subscription-users.input';
import { order_bonus_pricingUncheckedCreateNestedManyWithoutUsers_order_bonus_pricing_created_byTousersInput } from '../order-bonus-pricing/order-bonus-pricing-unchecked-create-nested-many-without-users-order-bonus-pricing-created-by-tousers.input';
import { order_bonus_pricingUncheckedCreateNestedManyWithoutUsers_order_bonus_pricing_updated_byTousersInput } from '../order-bonus-pricing/order-bonus-pricing-unchecked-create-nested-many-without-users-order-bonus-pricing-updated-by-tousers.input';
import { order_bonus_pricingUncheckedCreateNestedManyWithoutCourierInput } from '../order-bonus-pricing/order-bonus-pricing-unchecked-create-nested-many-without-courier.input';

@InputType()
export class usersUncheckedCreateWithoutOrder_actions_created_byTousersInput {

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

    @Field(() => [String], {nullable:true})
    doc_files?: Array<string>;

    @Field(() => Date, {nullable:true})
    order_start_date?: Date | string;

    @Field(() => String, {nullable:true})
    app_version?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => otpUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    otp?: otpUncheckedCreateNestedManyWithoutUsersInput;

    @Field(() => String, {nullable:true})
    api_token?: string;

    @Field(() => String, {nullable:true})
    tg_id?: string;

    @Field(() => permissionsUncheckedCreateNestedManyWithoutUsers_permissions_created_byTousersInput, {nullable:true})
    permissions_permissions_created_byTousers?: permissionsUncheckedCreateNestedManyWithoutUsers_permissions_created_byTousersInput;

    @Field(() => permissionsUncheckedCreateNestedManyWithoutUsers_permissions_updated_byTousersInput, {nullable:true})
    permissions_permissions_updated_byTousers?: permissionsUncheckedCreateNestedManyWithoutUsers_permissions_updated_byTousersInput;

    @Field(() => postUncheckedCreateNestedManyWithoutUsers_post_created_byTousersInput, {nullable:true})
    post_post_created_byTousers?: postUncheckedCreateNestedManyWithoutUsers_post_created_byTousersInput;

    @Field(() => postUncheckedCreateNestedManyWithoutUsers_post_updated_byTousersInput, {nullable:true})
    post_updated_byTousers?: postUncheckedCreateNestedManyWithoutUsers_post_updated_byTousersInput;

    @Field(() => postUncheckedCreateNestedManyWithoutUsers_post_user_idTousersInput, {nullable:true})
    post_post_user_idTousers?: postUncheckedCreateNestedManyWithoutUsers_post_user_idTousersInput;

    @Field(() => rolesUncheckedCreateNestedManyWithoutUsers_roles_created_byTousersInput, {nullable:true})
    roles_roles_created_byTousers?: rolesUncheckedCreateNestedManyWithoutUsers_roles_created_byTousersInput;

    @Field(() => rolesUncheckedCreateNestedManyWithoutUsers_roles_updated_byTousersInput, {nullable:true})
    roles_roles_updated_byTousers?: rolesUncheckedCreateNestedManyWithoutUsers_roles_updated_byTousersInput;

    @Field(() => roles_permissionsUncheckedCreateNestedManyWithoutUsers_roles_permissions_created_byTousersInput, {nullable:true})
    roles_permissions_roles_permissions_created_byTousers?: roles_permissionsUncheckedCreateNestedManyWithoutUsers_roles_permissions_created_byTousersInput;

    @Field(() => roles_permissionsUncheckedCreateNestedManyWithoutUsers_roles_permissions_updated_byTousersInput, {nullable:true})
    roles_permissions_roles_permissions_updated_byTousers?: roles_permissionsUncheckedCreateNestedManyWithoutUsers_roles_permissions_updated_byTousersInput;

    @Field(() => users_permissionsUncheckedCreateNestedManyWithoutUsers_usersTousers_permissions_created_byInput, {nullable:true})
    users_permissions_usersTousers_permissions_created_by?: users_permissionsUncheckedCreateNestedManyWithoutUsers_usersTousers_permissions_created_byInput;

    @Field(() => users_permissionsUncheckedCreateNestedManyWithoutUsers_usersTousers_permissions_updated_byInput, {nullable:true})
    users_permissions_usersTousers_permissions_updated_by?: users_permissionsUncheckedCreateNestedManyWithoutUsers_usersTousers_permissions_updated_byInput;

    @Field(() => users_permissionsUncheckedCreateNestedManyWithoutUsers_usersTousers_permissions_user_idInput, {nullable:true})
    users_permissions_usersTousers_permissions_user_id?: users_permissionsUncheckedCreateNestedManyWithoutUsers_usersTousers_permissions_user_idInput;

    @Field(() => users_rolesUncheckedCreateNestedManyWithoutUsers_usersTousers_roles_created_byInput, {nullable:true})
    users_roles_usersTousers_roles_created_by?: users_rolesUncheckedCreateNestedManyWithoutUsers_usersTousers_roles_created_byInput;

    @Field(() => users_rolesUncheckedCreateNestedManyWithoutUsers_usersTousers_roles_updated_byInput, {nullable:true})
    users_roles_usersTousers_roles_updated_by?: users_rolesUncheckedCreateNestedManyWithoutUsers_usersTousers_roles_updated_byInput;

    @Field(() => users_rolesUncheckedCreateNestedManyWithoutUsers_usersTousers_roles_user_idInput, {nullable:true})
    users_roles_usersTousers_roles_user_id?: users_rolesUncheckedCreateNestedManyWithoutUsers_usersTousers_roles_user_idInput;

    @Field(() => post_prop_typesUncheckedCreateNestedManyWithoutUsers_post_prop_types_created_byTousersInput, {nullable:true})
    post_prop_types_created_byTousers?: post_prop_typesUncheckedCreateNestedManyWithoutUsers_post_prop_types_created_byTousersInput;

    @Field(() => post_prop_typesUncheckedCreateNestedManyWithoutUsers_post_prop_types_updated_byTousersInput, {nullable:true})
    post_prop_types_updated_byTousers?: post_prop_typesUncheckedCreateNestedManyWithoutUsers_post_prop_types_updated_byTousersInput;

    @Field(() => delivery_pricingUncheckedCreateNestedManyWithoutUsers_delivery_pricing_created_byTousersInput, {nullable:true})
    delivery_pricing_created_byTousers?: delivery_pricingUncheckedCreateNestedManyWithoutUsers_delivery_pricing_created_byTousersInput;

    @Field(() => delivery_pricingUncheckedCreateNestedManyWithoutUsers_delivery_pricing_updated_byTousersInput, {nullable:true})
    delivery_pricing_updated_byTousers?: delivery_pricingUncheckedCreateNestedManyWithoutUsers_delivery_pricing_updated_byTousersInput;

    @Field(() => cityUncheckedCreateNestedManyWithoutUsers_city_created_byTousersInput, {nullable:true})
    city_created_byTousers?: cityUncheckedCreateNestedManyWithoutUsers_city_created_byTousersInput;

    @Field(() => cityUncheckedCreateNestedManyWithoutUsers_city_updated_byTousersInput, {nullable:true})
    city_updated_byTousers?: cityUncheckedCreateNestedManyWithoutUsers_city_updated_byTousersInput;

    @Field(() => organizationUncheckedCreateNestedManyWithoutOrganization_created_byTousersInput, {nullable:true})
    organization_created_byTousers?: organizationUncheckedCreateNestedManyWithoutOrganization_created_byTousersInput;

    @Field(() => organizationUncheckedCreateNestedManyWithoutOrganization_updated_byTousersInput, {nullable:true})
    organization_updated_byTousers?: organizationUncheckedCreateNestedManyWithoutOrganization_updated_byTousersInput;

    @Field(() => work_schedulesUncheckedCreateNestedManyWithoutWork_schedules_created_byTousersInput, {nullable:true})
    work_schedules_created_byTousers?: work_schedulesUncheckedCreateNestedManyWithoutWork_schedules_created_byTousersInput;

    @Field(() => work_schedulesUncheckedCreateNestedManyWithoutWork_schedules_updated_byTousersInput, {nullable:true})
    work_schedules_updated_byTousers?: work_schedulesUncheckedCreateNestedManyWithoutWork_schedules_updated_byTousersInput;

    @Field(() => users_terminalsUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    users_terminals?: users_terminalsUncheckedCreateNestedManyWithoutUsersInput;

    @Field(() => users_work_schedulesUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    users_work_schedules?: users_work_schedulesUncheckedCreateNestedManyWithoutUsersInput;

    @Field(() => work_schedule_entriesUncheckedCreateNestedManyWithoutWork_schedule_entries_created_byTousersInput, {nullable:true})
    work_schedule_entries_created_byTousers?: work_schedule_entriesUncheckedCreateNestedManyWithoutWork_schedule_entries_created_byTousersInput;

    @Field(() => work_schedule_entriesUncheckedCreateNestedManyWithoutWork_schedule_entries_updated_byTousersInput, {nullable:true})
    work_schedule_entries_updated_byTousers?: work_schedule_entriesUncheckedCreateNestedManyWithoutWork_schedule_entries_updated_byTousersInput;

    @Field(() => work_schedule_entriesUncheckedCreateNestedManyWithoutWork_schedule_entries_usersInput, {nullable:true})
    work_schedule_entries_users?: work_schedule_entriesUncheckedCreateNestedManyWithoutWork_schedule_entries_usersInput;

    @Field(() => customers_commentsUncheckedCreateNestedManyWithoutCustomers_comments_created_byTousersInput, {nullable:true})
    customers_comments_created_byTousers?: customers_commentsUncheckedCreateNestedManyWithoutCustomers_comments_created_byTousersInput;

    @Field(() => ordersUncheckedCreateNestedManyWithoutOrders_created_byTousersInput, {nullable:true})
    orders_created_byTousers?: ordersUncheckedCreateNestedManyWithoutOrders_created_byTousersInput;

    @Field(() => ordersUncheckedCreateNestedManyWithoutOrders_updated_byTousersInput, {nullable:true})
    orders_updated_byTousers?: ordersUncheckedCreateNestedManyWithoutOrders_updated_byTousersInput;

    @Field(() => ordersUncheckedCreateNestedManyWithoutOrders_couriersInput, {nullable:true})
    orders_couriers?: ordersUncheckedCreateNestedManyWithoutOrders_couriersInput;

    @Field(() => order_locationsUncheckedCreateNestedManyWithoutOrder_locations_created_byTousersInput, {nullable:true})
    order_locations_created_byTousers?: order_locationsUncheckedCreateNestedManyWithoutOrder_locations_created_byTousersInput;

    @Field(() => order_locationsUncheckedCreateNestedManyWithoutOrder_locations_couriersInput, {nullable:true})
    order_locations_couriers?: order_locationsUncheckedCreateNestedManyWithoutOrder_locations_couriersInput;

    @Field(() => api_tokensUncheckedCreateNestedManyWithoutApi_tokens_created_byTousersInput, {nullable:true})
    api_tokens_created_byTousers?: api_tokensUncheckedCreateNestedManyWithoutApi_tokens_created_byTousersInput;

    @Field(() => api_tokensUncheckedCreateNestedManyWithoutApi_tokens_updated_byTousersInput, {nullable:true})
    api_tokens_updated_byTousers?: api_tokensUncheckedCreateNestedManyWithoutApi_tokens_updated_byTousersInput;

    @Field(() => order_votesUncheckedCreateNestedManyWithoutOrder_votes_created_byTousersInput, {nullable:true})
    order_votes_created_byTousers?: order_votesUncheckedCreateNestedManyWithoutOrder_votes_created_byTousersInput;

    @Field(() => order_votesUncheckedCreateNestedManyWithoutOrder_votes_couriersInput, {nullable:true})
    order_votes_couriers?: order_votesUncheckedCreateNestedManyWithoutOrder_votes_couriersInput;

    @Field(() => order_transactionsUncheckedCreateNestedManyWithoutOrder_transactions_created_byTousersInput, {nullable:true})
    order_transactions_created_byTousers?: order_transactionsUncheckedCreateNestedManyWithoutOrder_transactions_created_byTousersInput;

    @Field(() => order_transactionsUncheckedCreateNestedManyWithoutOrder_transactions_couriersInput, {nullable:true})
    order_transactions_couriers?: order_transactionsUncheckedCreateNestedManyWithoutOrder_transactions_couriersInput;

    @Field(() => outside_requestsUncheckedCreateNestedManyWithoutOutside_requests_created_byTousersInput, {nullable:true})
    outside_requests_created_byTousers?: outside_requestsUncheckedCreateNestedManyWithoutOutside_requests_created_byTousersInput;

    @Field(() => outside_requestsUncheckedCreateNestedManyWithoutOutside_requests_updated_byTousersInput, {nullable:true})
    outside_requests_updated_byTousers?: outside_requestsUncheckedCreateNestedManyWithoutOutside_requests_updated_byTousersInput;

    @Field(() => courier_terminal_balanceUncheckedCreateNestedManyWithoutCourier_terminal_balance_couriersInput, {nullable:true})
    courier_terminal_balance_couriers?: courier_terminal_balanceUncheckedCreateNestedManyWithoutCourier_terminal_balance_couriersInput;

    @Field(() => courier_terminal_balanceUncheckedCreateNestedManyWithoutCourier_terminal_balance_created_byTousersInput, {nullable:true})
    courier_terminal_balance_created_byTousers?: courier_terminal_balanceUncheckedCreateNestedManyWithoutCourier_terminal_balance_created_byTousersInput;

    @Field(() => manager_withdrawUncheckedCreateNestedManyWithoutManager_withdraw_created_byTousersInput, {nullable:true})
    manager_withdraw_created_byTousers?: manager_withdrawUncheckedCreateNestedManyWithoutManager_withdraw_created_byTousersInput;

    @Field(() => manager_withdrawUncheckedCreateNestedManyWithoutManager_withdraw_managersInput, {nullable:true})
    manager_withdraw_managers?: manager_withdrawUncheckedCreateNestedManyWithoutManager_withdraw_managersInput;

    @Field(() => manager_withdrawUncheckedCreateNestedManyWithoutManager_withdraw_couriersInput, {nullable:true})
    manager_withdraw_couriers?: manager_withdrawUncheckedCreateNestedManyWithoutManager_withdraw_couriersInput;

    @Field(() => timesheetUncheckedCreateNestedManyWithoutTimesheet_usersInput, {nullable:true})
    timesheet_users?: timesheetUncheckedCreateNestedManyWithoutTimesheet_usersInput;

    @Field(() => scheduled_reports_subscriptionUncheckedCreateNestedManyWithoutScheduled_reports_subscription_usersInput, {nullable:true})
    scheduled_reports_subscription_users?: scheduled_reports_subscriptionUncheckedCreateNestedManyWithoutScheduled_reports_subscription_usersInput;

    @Field(() => order_bonus_pricingUncheckedCreateNestedManyWithoutUsers_order_bonus_pricing_created_byTousersInput, {nullable:true})
    order_bonus_pricing_created_byTousers?: order_bonus_pricingUncheckedCreateNestedManyWithoutUsers_order_bonus_pricing_created_byTousersInput;

    @Field(() => order_bonus_pricingUncheckedCreateNestedManyWithoutUsers_order_bonus_pricing_updated_byTousersInput, {nullable:true})
    order_bonus_pricing_updated_byTousers?: order_bonus_pricingUncheckedCreateNestedManyWithoutUsers_order_bonus_pricing_updated_byTousersInput;

    @Field(() => order_bonus_pricingUncheckedCreateNestedManyWithoutCourierInput, {nullable:true})
    order_bonus_pricing_courier_idTusers?: order_bonus_pricingUncheckedCreateNestedManyWithoutCourierInput;
}
