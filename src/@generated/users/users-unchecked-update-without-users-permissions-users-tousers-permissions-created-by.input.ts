import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { user_status } from '../prisma/user-status.enum';
import { drive_type } from '../prisma/drive-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
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
import { users_terminalsUncheckedUpdateManyWithoutUsersNestedInput } from '../users-terminals/users-terminals-unchecked-update-many-without-users-nested.input';
import { users_work_schedulesUncheckedUpdateManyWithoutUsersNestedInput } from '../users-work-schedules/users-work-schedules-unchecked-update-many-without-users-nested.input';
import { work_schedule_entriesUncheckedUpdateManyWithoutWork_schedule_entries_created_byTousersNestedInput } from '../work-schedule-entries/work-schedule-entries-unchecked-update-many-without-work-schedule-entries-created-by-tousers-nested.input';
import { work_schedule_entriesUncheckedUpdateManyWithoutWork_schedule_entries_updated_byTousersNestedInput } from '../work-schedule-entries/work-schedule-entries-unchecked-update-many-without-work-schedule-entries-updated-by-tousers-nested.input';
import { work_schedule_entriesUncheckedUpdateManyWithoutWork_schedule_entries_usersNestedInput } from '../work-schedule-entries/work-schedule-entries-unchecked-update-many-without-work-schedule-entries-users-nested.input';
import { customers_commentsUncheckedUpdateManyWithoutCustomers_comments_created_byTousersNestedInput } from '../customers-comments/customers-comments-unchecked-update-many-without-customers-comments-created-by-tousers-nested.input';
import { ordersUncheckedUpdateManyWithoutOrders_created_byTousersNestedInput } from '../orders/orders-unchecked-update-many-without-orders-created-by-tousers-nested.input';
import { ordersUncheckedUpdateManyWithoutOrders_updated_byTousersNestedInput } from '../orders/orders-unchecked-update-many-without-orders-updated-by-tousers-nested.input';
import { ordersUncheckedUpdateManyWithoutOrders_couriersNestedInput } from '../orders/orders-unchecked-update-many-without-orders-couriers-nested.input';
import { order_actionsUncheckedUpdateManyWithoutOrder_actions_created_byTousersNestedInput } from '../order-actions/order-actions-unchecked-update-many-without-order-actions-created-by-tousers-nested.input';
import { order_locationsUncheckedUpdateManyWithoutOrder_locations_created_byTousersNestedInput } from '../order-locations/order-locations-unchecked-update-many-without-order-locations-created-by-tousers-nested.input';
import { order_locationsUncheckedUpdateManyWithoutOrder_locations_couriersNestedInput } from '../order-locations/order-locations-unchecked-update-many-without-order-locations-couriers-nested.input';
import { api_tokensUncheckedUpdateManyWithoutApi_tokens_created_byTousersNestedInput } from '../api-tokens/api-tokens-unchecked-update-many-without-api-tokens-created-by-tousers-nested.input';
import { api_tokensUncheckedUpdateManyWithoutApi_tokens_updated_byTousersNestedInput } from '../api-tokens/api-tokens-unchecked-update-many-without-api-tokens-updated-by-tousers-nested.input';
import { order_votesUncheckedUpdateManyWithoutOrder_votes_created_byTousersNestedInput } from '../order-votes/order-votes-unchecked-update-many-without-order-votes-created-by-tousers-nested.input';
import { order_votesUncheckedUpdateManyWithoutOrder_votes_couriersNestedInput } from '../order-votes/order-votes-unchecked-update-many-without-order-votes-couriers-nested.input';
import { order_transactionsUncheckedUpdateManyWithoutOrder_transactions_created_byTousersNestedInput } from '../order-transactions/order-transactions-unchecked-update-many-without-order-transactions-created-by-tousers-nested.input';
import { order_transactionsUncheckedUpdateManyWithoutOrder_transactions_couriersNestedInput } from '../order-transactions/order-transactions-unchecked-update-many-without-order-transactions-couriers-nested.input';
import { outside_requestsUncheckedUpdateManyWithoutOutside_requests_created_byTousersNestedInput } from '../outside-requests/outside-requests-unchecked-update-many-without-outside-requests-created-by-tousers-nested.input';
import { outside_requestsUncheckedUpdateManyWithoutOutside_requests_updated_byTousersNestedInput } from '../outside-requests/outside-requests-unchecked-update-many-without-outside-requests-updated-by-tousers-nested.input';
import { courier_terminal_balanceUncheckedUpdateManyWithoutCourier_terminal_balance_couriersNestedInput } from '../courier-terminal-balance/courier-terminal-balance-unchecked-update-many-without-courier-terminal-balance-couriers-nested.input';
import { courier_terminal_balanceUncheckedUpdateManyWithoutCourier_terminal_balance_created_byTousersNestedInput } from '../courier-terminal-balance/courier-terminal-balance-unchecked-update-many-without-courier-terminal-balance-created-by-tousers-nested.input';
import { manager_withdrawUncheckedUpdateManyWithoutManager_withdraw_created_byTousersNestedInput } from '../manager-withdraw/manager-withdraw-unchecked-update-many-without-manager-withdraw-created-by-tousers-nested.input';
import { manager_withdrawUncheckedUpdateManyWithoutManager_withdraw_managersNestedInput } from '../manager-withdraw/manager-withdraw-unchecked-update-many-without-manager-withdraw-managers-nested.input';
import { manager_withdrawUncheckedUpdateManyWithoutManager_withdraw_couriersNestedInput } from '../manager-withdraw/manager-withdraw-unchecked-update-many-without-manager-withdraw-couriers-nested.input';
import { timesheetUncheckedUpdateManyWithoutTimesheet_usersNestedInput } from '../timesheet/timesheet-unchecked-update-many-without-timesheet-users-nested.input';
import { scheduled_reports_subscriptionUncheckedUpdateManyWithoutScheduled_reports_subscription_usersNestedInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-unchecked-update-many-without-scheduled-reports-subscription-users-nested.input';
import { order_bonus_pricingUncheckedUpdateManyWithoutUsers_order_bonus_pricing_created_byTousersNestedInput } from '../order-bonus-pricing/order-bonus-pricing-unchecked-update-many-without-users-order-bonus-pricing-created-by-tousers-nested.input';
import { order_bonus_pricingUncheckedUpdateManyWithoutUsers_order_bonus_pricing_updated_byTousersNestedInput } from '../order-bonus-pricing/order-bonus-pricing-unchecked-update-many-without-users-order-bonus-pricing-updated-by-tousers-nested.input';
import { order_bonus_pricingUncheckedUpdateManyWithoutCourierNestedInput } from '../order-bonus-pricing/order-bonus-pricing-unchecked-update-many-without-courier-nested.input';

@InputType()
export class usersUncheckedUpdateWithoutUsers_permissions_usersTousers_permissions_created_byInput {

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

    @Field(() => otpUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    otp?: otpUncheckedUpdateManyWithoutUsersNestedInput;

    @Field(() => String, {nullable:true})
    api_token?: string;

    @Field(() => String, {nullable:true})
    tg_id?: string;

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

    @Field(() => users_terminalsUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    users_terminals?: users_terminalsUncheckedUpdateManyWithoutUsersNestedInput;

    @Field(() => users_work_schedulesUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    users_work_schedules?: users_work_schedulesUncheckedUpdateManyWithoutUsersNestedInput;

    @Field(() => work_schedule_entriesUncheckedUpdateManyWithoutWork_schedule_entries_created_byTousersNestedInput, {nullable:true})
    work_schedule_entries_created_byTousers?: work_schedule_entriesUncheckedUpdateManyWithoutWork_schedule_entries_created_byTousersNestedInput;

    @Field(() => work_schedule_entriesUncheckedUpdateManyWithoutWork_schedule_entries_updated_byTousersNestedInput, {nullable:true})
    work_schedule_entries_updated_byTousers?: work_schedule_entriesUncheckedUpdateManyWithoutWork_schedule_entries_updated_byTousersNestedInput;

    @Field(() => work_schedule_entriesUncheckedUpdateManyWithoutWork_schedule_entries_usersNestedInput, {nullable:true})
    work_schedule_entries_users?: work_schedule_entriesUncheckedUpdateManyWithoutWork_schedule_entries_usersNestedInput;

    @Field(() => customers_commentsUncheckedUpdateManyWithoutCustomers_comments_created_byTousersNestedInput, {nullable:true})
    customers_comments_created_byTousers?: customers_commentsUncheckedUpdateManyWithoutCustomers_comments_created_byTousersNestedInput;

    @Field(() => ordersUncheckedUpdateManyWithoutOrders_created_byTousersNestedInput, {nullable:true})
    orders_created_byTousers?: ordersUncheckedUpdateManyWithoutOrders_created_byTousersNestedInput;

    @Field(() => ordersUncheckedUpdateManyWithoutOrders_updated_byTousersNestedInput, {nullable:true})
    orders_updated_byTousers?: ordersUncheckedUpdateManyWithoutOrders_updated_byTousersNestedInput;

    @Field(() => ordersUncheckedUpdateManyWithoutOrders_couriersNestedInput, {nullable:true})
    orders_couriers?: ordersUncheckedUpdateManyWithoutOrders_couriersNestedInput;

    @Field(() => order_actionsUncheckedUpdateManyWithoutOrder_actions_created_byTousersNestedInput, {nullable:true})
    order_actions_created_byTousers?: order_actionsUncheckedUpdateManyWithoutOrder_actions_created_byTousersNestedInput;

    @Field(() => order_locationsUncheckedUpdateManyWithoutOrder_locations_created_byTousersNestedInput, {nullable:true})
    order_locations_created_byTousers?: order_locationsUncheckedUpdateManyWithoutOrder_locations_created_byTousersNestedInput;

    @Field(() => order_locationsUncheckedUpdateManyWithoutOrder_locations_couriersNestedInput, {nullable:true})
    order_locations_couriers?: order_locationsUncheckedUpdateManyWithoutOrder_locations_couriersNestedInput;

    @Field(() => api_tokensUncheckedUpdateManyWithoutApi_tokens_created_byTousersNestedInput, {nullable:true})
    api_tokens_created_byTousers?: api_tokensUncheckedUpdateManyWithoutApi_tokens_created_byTousersNestedInput;

    @Field(() => api_tokensUncheckedUpdateManyWithoutApi_tokens_updated_byTousersNestedInput, {nullable:true})
    api_tokens_updated_byTousers?: api_tokensUncheckedUpdateManyWithoutApi_tokens_updated_byTousersNestedInput;

    @Field(() => order_votesUncheckedUpdateManyWithoutOrder_votes_created_byTousersNestedInput, {nullable:true})
    order_votes_created_byTousers?: order_votesUncheckedUpdateManyWithoutOrder_votes_created_byTousersNestedInput;

    @Field(() => order_votesUncheckedUpdateManyWithoutOrder_votes_couriersNestedInput, {nullable:true})
    order_votes_couriers?: order_votesUncheckedUpdateManyWithoutOrder_votes_couriersNestedInput;

    @Field(() => order_transactionsUncheckedUpdateManyWithoutOrder_transactions_created_byTousersNestedInput, {nullable:true})
    order_transactions_created_byTousers?: order_transactionsUncheckedUpdateManyWithoutOrder_transactions_created_byTousersNestedInput;

    @Field(() => order_transactionsUncheckedUpdateManyWithoutOrder_transactions_couriersNestedInput, {nullable:true})
    order_transactions_couriers?: order_transactionsUncheckedUpdateManyWithoutOrder_transactions_couriersNestedInput;

    @Field(() => outside_requestsUncheckedUpdateManyWithoutOutside_requests_created_byTousersNestedInput, {nullable:true})
    outside_requests_created_byTousers?: outside_requestsUncheckedUpdateManyWithoutOutside_requests_created_byTousersNestedInput;

    @Field(() => outside_requestsUncheckedUpdateManyWithoutOutside_requests_updated_byTousersNestedInput, {nullable:true})
    outside_requests_updated_byTousers?: outside_requestsUncheckedUpdateManyWithoutOutside_requests_updated_byTousersNestedInput;

    @Field(() => courier_terminal_balanceUncheckedUpdateManyWithoutCourier_terminal_balance_couriersNestedInput, {nullable:true})
    courier_terminal_balance_couriers?: courier_terminal_balanceUncheckedUpdateManyWithoutCourier_terminal_balance_couriersNestedInput;

    @Field(() => courier_terminal_balanceUncheckedUpdateManyWithoutCourier_terminal_balance_created_byTousersNestedInput, {nullable:true})
    courier_terminal_balance_created_byTousers?: courier_terminal_balanceUncheckedUpdateManyWithoutCourier_terminal_balance_created_byTousersNestedInput;

    @Field(() => manager_withdrawUncheckedUpdateManyWithoutManager_withdraw_created_byTousersNestedInput, {nullable:true})
    manager_withdraw_created_byTousers?: manager_withdrawUncheckedUpdateManyWithoutManager_withdraw_created_byTousersNestedInput;

    @Field(() => manager_withdrawUncheckedUpdateManyWithoutManager_withdraw_managersNestedInput, {nullable:true})
    manager_withdraw_managers?: manager_withdrawUncheckedUpdateManyWithoutManager_withdraw_managersNestedInput;

    @Field(() => manager_withdrawUncheckedUpdateManyWithoutManager_withdraw_couriersNestedInput, {nullable:true})
    manager_withdraw_couriers?: manager_withdrawUncheckedUpdateManyWithoutManager_withdraw_couriersNestedInput;

    @Field(() => timesheetUncheckedUpdateManyWithoutTimesheet_usersNestedInput, {nullable:true})
    timesheet_users?: timesheetUncheckedUpdateManyWithoutTimesheet_usersNestedInput;

    @Field(() => scheduled_reports_subscriptionUncheckedUpdateManyWithoutScheduled_reports_subscription_usersNestedInput, {nullable:true})
    scheduled_reports_subscription_users?: scheduled_reports_subscriptionUncheckedUpdateManyWithoutScheduled_reports_subscription_usersNestedInput;

    @Field(() => order_bonus_pricingUncheckedUpdateManyWithoutUsers_order_bonus_pricing_created_byTousersNestedInput, {nullable:true})
    order_bonus_pricing_created_byTousers?: order_bonus_pricingUncheckedUpdateManyWithoutUsers_order_bonus_pricing_created_byTousersNestedInput;

    @Field(() => order_bonus_pricingUncheckedUpdateManyWithoutUsers_order_bonus_pricing_updated_byTousersNestedInput, {nullable:true})
    order_bonus_pricing_updated_byTousers?: order_bonus_pricingUncheckedUpdateManyWithoutUsers_order_bonus_pricing_updated_byTousersNestedInput;

    @Field(() => order_bonus_pricingUncheckedUpdateManyWithoutCourierNestedInput, {nullable:true})
    order_bonus_pricing_courier_idTusers?: order_bonus_pricingUncheckedUpdateManyWithoutCourierNestedInput;
}
