import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Enumuser_statusFilter } from '../prisma/enumuser-status-filter.input';
import { Enumdrive_typeNullableFilter } from '../prisma/enumdrive-type-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OtpListRelationFilter } from '../prisma/otp-list-relation-filter.input';
import { PermissionsListRelationFilter } from '../prisma/permissions-list-relation-filter.input';
import { PostListRelationFilter } from '../prisma/post-list-relation-filter.input';
import { RolesListRelationFilter } from '../prisma/roles-list-relation-filter.input';
import { Roles_permissionsListRelationFilter } from '../prisma/roles-permissions-list-relation-filter.input';
import { Users_permissionsListRelationFilter } from '../prisma/users-permissions-list-relation-filter.input';
import { Users_rolesListRelationFilter } from '../prisma/users-roles-list-relation-filter.input';
import { Post_prop_typesListRelationFilter } from '../prisma/post-prop-types-list-relation-filter.input';
import { Delivery_pricingListRelationFilter } from '../prisma/delivery-pricing-list-relation-filter.input';
import { CityListRelationFilter } from '../prisma/city-list-relation-filter.input';
import { OrganizationListRelationFilter } from '../prisma/organization-list-relation-filter.input';
import { Work_schedulesListRelationFilter } from '../prisma/work-schedules-list-relation-filter.input';
import { Users_terminalsListRelationFilter } from '../prisma/users-terminals-list-relation-filter.input';
import { Users_work_schedulesListRelationFilter } from '../prisma/users-work-schedules-list-relation-filter.input';
import { Work_schedule_entriesListRelationFilter } from '../prisma/work-schedule-entries-list-relation-filter.input';
import { Customers_commentsListRelationFilter } from '../prisma/customers-comments-list-relation-filter.input';
import { OrdersListRelationFilter } from '../prisma/orders-list-relation-filter.input';
import { Order_actionsListRelationFilter } from '../prisma/order-actions-list-relation-filter.input';
import { Order_locationsListRelationFilter } from '../prisma/order-locations-list-relation-filter.input';
import { Api_tokensListRelationFilter } from '../prisma/api-tokens-list-relation-filter.input';
import { Order_votesListRelationFilter } from '../prisma/order-votes-list-relation-filter.input';
import { Order_transactionsListRelationFilter } from '../prisma/order-transactions-list-relation-filter.input';
import { Outside_requestsListRelationFilter } from '../prisma/outside-requests-list-relation-filter.input';

@InputType()
export class usersWhereInput {

    @Field(() => [usersWhereInput], {nullable:true})
    AND?: Array<usersWhereInput>;

    @Field(() => [usersWhereInput], {nullable:true})
    OR?: Array<usersWhereInput>;

    @Field(() => [usersWhereInput], {nullable:true})
    NOT?: Array<usersWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    first_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    last_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    password?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_super_user?: BoolFilter;

    @Field(() => Enumuser_statusFilter, {nullable:true})
    status?: Enumuser_statusFilter;

    @Field(() => Enumdrive_typeNullableFilter, {nullable:true})
    drive_type?: Enumdrive_typeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    card_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    card_number?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    birth_date?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    car_model?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    car_number?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_online?: BoolFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    latitude?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    longitude?: FloatNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fcm_token?: StringNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    wallet_balance?: FloatFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    max_active_order_count?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => OtpListRelationFilter, {nullable:true})
    otp?: OtpListRelationFilter;

    @Field(() => PermissionsListRelationFilter, {nullable:true})
    permissions_permissions_created_byTousers?: PermissionsListRelationFilter;

    @Field(() => PermissionsListRelationFilter, {nullable:true})
    permissions_permissions_updated_byTousers?: PermissionsListRelationFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    post_post_created_byTousers?: PostListRelationFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    post_updated_byTousers?: PostListRelationFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    post_post_user_idTousers?: PostListRelationFilter;

    @Field(() => RolesListRelationFilter, {nullable:true})
    roles_roles_created_byTousers?: RolesListRelationFilter;

    @Field(() => RolesListRelationFilter, {nullable:true})
    roles_roles_updated_byTousers?: RolesListRelationFilter;

    @Field(() => Roles_permissionsListRelationFilter, {nullable:true})
    roles_permissions_roles_permissions_created_byTousers?: Roles_permissionsListRelationFilter;

    @Field(() => Roles_permissionsListRelationFilter, {nullable:true})
    roles_permissions_roles_permissions_updated_byTousers?: Roles_permissionsListRelationFilter;

    @Field(() => Users_permissionsListRelationFilter, {nullable:true})
    users_permissions_usersTousers_permissions_created_by?: Users_permissionsListRelationFilter;

    @Field(() => Users_permissionsListRelationFilter, {nullable:true})
    users_permissions_usersTousers_permissions_updated_by?: Users_permissionsListRelationFilter;

    @Field(() => Users_permissionsListRelationFilter, {nullable:true})
    users_permissions_usersTousers_permissions_user_id?: Users_permissionsListRelationFilter;

    @Field(() => Users_rolesListRelationFilter, {nullable:true})
    users_roles_usersTousers_roles_created_by?: Users_rolesListRelationFilter;

    @Field(() => Users_rolesListRelationFilter, {nullable:true})
    users_roles_usersTousers_roles_updated_by?: Users_rolesListRelationFilter;

    @Field(() => Users_rolesListRelationFilter, {nullable:true})
    users_roles_usersTousers_roles_user_id?: Users_rolesListRelationFilter;

    @Field(() => Post_prop_typesListRelationFilter, {nullable:true})
    post_prop_types_created_byTousers?: Post_prop_typesListRelationFilter;

    @Field(() => Post_prop_typesListRelationFilter, {nullable:true})
    post_prop_types_updated_byTousers?: Post_prop_typesListRelationFilter;

    @Field(() => Delivery_pricingListRelationFilter, {nullable:true})
    delivery_pricing_created_byTousers?: Delivery_pricingListRelationFilter;

    @Field(() => Delivery_pricingListRelationFilter, {nullable:true})
    delivery_pricing_updated_byTousers?: Delivery_pricingListRelationFilter;

    @Field(() => CityListRelationFilter, {nullable:true})
    city_created_byTousers?: CityListRelationFilter;

    @Field(() => CityListRelationFilter, {nullable:true})
    city_updated_byTousers?: CityListRelationFilter;

    @Field(() => OrganizationListRelationFilter, {nullable:true})
    organization_created_byTousers?: OrganizationListRelationFilter;

    @Field(() => OrganizationListRelationFilter, {nullable:true})
    organization_updated_byTousers?: OrganizationListRelationFilter;

    @Field(() => Work_schedulesListRelationFilter, {nullable:true})
    work_schedules_created_byTousers?: Work_schedulesListRelationFilter;

    @Field(() => Work_schedulesListRelationFilter, {nullable:true})
    work_schedules_updated_byTousers?: Work_schedulesListRelationFilter;

    @Field(() => Users_terminalsListRelationFilter, {nullable:true})
    users_terminals?: Users_terminalsListRelationFilter;

    @Field(() => Users_work_schedulesListRelationFilter, {nullable:true})
    users_work_schedules?: Users_work_schedulesListRelationFilter;

    @Field(() => Work_schedule_entriesListRelationFilter, {nullable:true})
    work_schedule_entries_created_byTousers?: Work_schedule_entriesListRelationFilter;

    @Field(() => Work_schedule_entriesListRelationFilter, {nullable:true})
    work_schedule_entries_updated_byTousers?: Work_schedule_entriesListRelationFilter;

    @Field(() => Work_schedule_entriesListRelationFilter, {nullable:true})
    work_schedule_entries_users?: Work_schedule_entriesListRelationFilter;

    @Field(() => Customers_commentsListRelationFilter, {nullable:true})
    customers_comments_created_byTousers?: Customers_commentsListRelationFilter;

    @Field(() => OrdersListRelationFilter, {nullable:true})
    orders_created_byTousers?: OrdersListRelationFilter;

    @Field(() => OrdersListRelationFilter, {nullable:true})
    orders_updated_byTousers?: OrdersListRelationFilter;

    @Field(() => OrdersListRelationFilter, {nullable:true})
    orders_couriers?: OrdersListRelationFilter;

    @Field(() => Order_actionsListRelationFilter, {nullable:true})
    order_actions_created_byTousers?: Order_actionsListRelationFilter;

    @Field(() => Order_locationsListRelationFilter, {nullable:true})
    order_locations_created_byTousers?: Order_locationsListRelationFilter;

    @Field(() => Order_locationsListRelationFilter, {nullable:true})
    order_locations_couriers?: Order_locationsListRelationFilter;

    @Field(() => Api_tokensListRelationFilter, {nullable:true})
    api_tokens_created_byTousers?: Api_tokensListRelationFilter;

    @Field(() => Api_tokensListRelationFilter, {nullable:true})
    api_tokens_updated_byTousers?: Api_tokensListRelationFilter;

    @Field(() => Order_votesListRelationFilter, {nullable:true})
    order_votes_created_byTousers?: Order_votesListRelationFilter;

    @Field(() => Order_votesListRelationFilter, {nullable:true})
    order_votes_couriers?: Order_votesListRelationFilter;

    @Field(() => Order_transactionsListRelationFilter, {nullable:true})
    order_transactions_created_byTousers?: Order_transactionsListRelationFilter;

    @Field(() => Order_transactionsListRelationFilter, {nullable:true})
    order_transactions_couriers?: Order_transactionsListRelationFilter;

    @Field(() => Outside_requestsListRelationFilter, {nullable:true})
    outside_requests_created_byTousers?: Outside_requestsListRelationFilter;

    @Field(() => Outside_requestsListRelationFilter, {nullable:true})
    outside_requests_updated_byTousers?: Outside_requestsListRelationFilter;
}
