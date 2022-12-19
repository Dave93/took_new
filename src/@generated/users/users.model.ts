import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { user_status } from '../prisma/user-status.enum';
import { drive_type } from '../prisma/drive-type.enum';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { otp } from '../otp/otp.model';
import { permissions } from '../permissions/permissions.model';
import { post } from '../post/post.model';
import { roles } from '../roles/roles.model';
import { roles_permissions } from '../roles-permissions/roles-permissions.model';
import { users_permissions } from '../users-permissions/users-permissions.model';
import { users_roles } from '../users-roles/users-roles.model';
import { post_prop_types } from '../post-prop-types/post-prop-types.model';
import { delivery_pricing } from '../delivery-pricing/delivery-pricing.model';
import { city } from '../city/city.model';
import { organization } from '../organization/organization.model';
import { work_schedules } from '../work-schedules/work-schedules.model';
import { users_terminals } from '../users-terminals/users-terminals.model';
import { users_work_schedules } from '../users-work-schedules/users-work-schedules.model';
import { work_schedule_entries } from '../work-schedule-entries/work-schedule-entries.model';
import { customers_comments } from '../customers-comments/customers-comments.model';
import { orders } from '../orders/orders.model';
import { order_actions } from '../order-actions/order-actions.model';
import { order_locations } from '../order-locations/order-locations.model';
import { api_tokens } from '../api-tokens/api-tokens.model';
import { order_votes } from '../order-votes/order-votes.model';
import { order_transactions } from '../order-transactions/order-transactions.model';
import { outside_requests } from '../outside-requests/outside-requests.model';
import { courier_terminal_balance } from '../courier-terminal-balance/courier-terminal-balance.model';
import { manager_withdraw } from '../manager-withdraw/manager-withdraw.model';
import { timesheet } from '../timesheet/timesheet.model';
import { UsersCount } from '../prisma/users-count.output';

@ObjectType()
export class users {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:true})
    first_name!: string | null;

    @Field(() => String, {nullable:true})
    last_name!: string | null;

    @Field(() => String, {nullable:true})
    password!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    is_super_user!: boolean;

    @Field(() => user_status, {nullable:false})
    status!: keyof typeof user_status;

    @Field(() => drive_type, {nullable:true})
    drive_type!: keyof typeof drive_type | null;

    @Field(() => String, {nullable:true})
    card_name!: string | null;

    @Field(() => String, {nullable:true})
    card_number!: string | null;

    @Field(() => Date, {nullable:true})
    birth_date!: Date | null;

    @Field(() => String, {nullable:true})
    car_model!: string | null;

    @Field(() => String, {nullable:true})
    car_number!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    is_online!: boolean;

    @Field(() => Float, {nullable:true,defaultValue:0})
    latitude!: number | null;

    @Field(() => Float, {nullable:true,defaultValue:0})
    longitude!: number | null;

    @Field(() => String, {nullable:true})
    fcm_token!: string | null;

    @Field(() => Float, {nullable:false,defaultValue:0})
    wallet_balance!: number;

    @Field(() => Int, {nullable:true})
    max_active_order_count!: number | null;

    @Field(() => [String], {nullable:true})
    doc_files!: Array<string>;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => [otp], {nullable:true})
    otp?: Array<otp>;

    @Field(() => [permissions], {nullable:true})
    permissions_permissions_created_byTousers?: Array<permissions>;

    @Field(() => [permissions], {nullable:true})
    permissions_permissions_updated_byTousers?: Array<permissions>;

    @Field(() => [post], {nullable:true})
    post_post_created_byTousers?: Array<post>;

    @Field(() => [post], {nullable:true})
    post_updated_byTousers?: Array<post>;

    @Field(() => [post], {nullable:true})
    post_post_user_idTousers?: Array<post>;

    @Field(() => [roles], {nullable:true})
    roles_roles_created_byTousers?: Array<roles>;

    @Field(() => [roles], {nullable:true})
    roles_roles_updated_byTousers?: Array<roles>;

    @Field(() => [roles_permissions], {nullable:true})
    roles_permissions_roles_permissions_created_byTousers?: Array<roles_permissions>;

    @Field(() => [roles_permissions], {nullable:true})
    roles_permissions_roles_permissions_updated_byTousers?: Array<roles_permissions>;

    @Field(() => [users_permissions], {nullable:true})
    users_permissions_usersTousers_permissions_created_by?: Array<users_permissions>;

    @Field(() => [users_permissions], {nullable:true})
    users_permissions_usersTousers_permissions_updated_by?: Array<users_permissions>;

    @Field(() => [users_permissions], {nullable:true})
    users_permissions_usersTousers_permissions_user_id?: Array<users_permissions>;

    @Field(() => [users_roles], {nullable:true})
    users_roles_usersTousers_roles_created_by?: Array<users_roles>;

    @Field(() => [users_roles], {nullable:true})
    users_roles_usersTousers_roles_updated_by?: Array<users_roles>;

    @Field(() => [users_roles], {nullable:true})
    users_roles_usersTousers_roles_user_id?: Array<users_roles>;

    @Field(() => [post_prop_types], {nullable:true})
    post_prop_types_created_byTousers?: Array<post_prop_types>;

    @Field(() => [post_prop_types], {nullable:true})
    post_prop_types_updated_byTousers?: Array<post_prop_types>;

    @Field(() => [delivery_pricing], {nullable:true})
    delivery_pricing_created_byTousers?: Array<delivery_pricing>;

    @Field(() => [delivery_pricing], {nullable:true})
    delivery_pricing_updated_byTousers?: Array<delivery_pricing>;

    @Field(() => [city], {nullable:true})
    city_created_byTousers?: Array<city>;

    @Field(() => [city], {nullable:true})
    city_updated_byTousers?: Array<city>;

    @Field(() => [organization], {nullable:true})
    organization_created_byTousers?: Array<organization>;

    @Field(() => [organization], {nullable:true})
    organization_updated_byTousers?: Array<organization>;

    @Field(() => [work_schedules], {nullable:true})
    work_schedules_created_byTousers?: Array<work_schedules>;

    @Field(() => [work_schedules], {nullable:true})
    work_schedules_updated_byTousers?: Array<work_schedules>;

    @Field(() => [users_terminals], {nullable:true})
    users_terminals?: Array<users_terminals>;

    @Field(() => [users_work_schedules], {nullable:true})
    users_work_schedules?: Array<users_work_schedules>;

    @Field(() => [work_schedule_entries], {nullable:true})
    work_schedule_entries_created_byTousers?: Array<work_schedule_entries>;

    @Field(() => [work_schedule_entries], {nullable:true})
    work_schedule_entries_updated_byTousers?: Array<work_schedule_entries>;

    @Field(() => [work_schedule_entries], {nullable:true})
    work_schedule_entries_users?: Array<work_schedule_entries>;

    @Field(() => [customers_comments], {nullable:true})
    customers_comments_created_byTousers?: Array<customers_comments>;

    @Field(() => [orders], {nullable:true})
    orders_created_byTousers?: Array<orders>;

    @Field(() => [orders], {nullable:true})
    orders_updated_byTousers?: Array<orders>;

    @Field(() => [orders], {nullable:true})
    orders_couriers?: Array<orders>;

    @Field(() => [order_actions], {nullable:true})
    order_actions_created_byTousers?: Array<order_actions>;

    @Field(() => [order_locations], {nullable:true})
    order_locations_created_byTousers?: Array<order_locations>;

    @Field(() => [order_locations], {nullable:true})
    order_locations_couriers?: Array<order_locations>;

    @Field(() => [api_tokens], {nullable:true})
    api_tokens_created_byTousers?: Array<api_tokens>;

    @Field(() => [api_tokens], {nullable:true})
    api_tokens_updated_byTousers?: Array<api_tokens>;

    @Field(() => [order_votes], {nullable:true})
    order_votes_created_byTousers?: Array<order_votes>;

    @Field(() => [order_votes], {nullable:true})
    order_votes_couriers?: Array<order_votes>;

    @Field(() => [order_transactions], {nullable:true})
    order_transactions_created_byTousers?: Array<order_transactions>;

    @Field(() => [order_transactions], {nullable:true})
    order_transactions_couriers?: Array<order_transactions>;

    @Field(() => [outside_requests], {nullable:true})
    outside_requests_created_byTousers?: Array<outside_requests>;

    @Field(() => [outside_requests], {nullable:true})
    outside_requests_updated_byTousers?: Array<outside_requests>;

    @Field(() => [courier_terminal_balance], {nullable:true})
    courier_terminal_balance_couriers?: Array<courier_terminal_balance>;

    @Field(() => [courier_terminal_balance], {nullable:true})
    courier_terminal_balance_created_byTousers?: Array<courier_terminal_balance>;

    @Field(() => [manager_withdraw], {nullable:true})
    manager_withdraw_created_byTousers?: Array<manager_withdraw>;

    @Field(() => [manager_withdraw], {nullable:true})
    manager_withdraw_managers?: Array<manager_withdraw>;

    @Field(() => [manager_withdraw], {nullable:true})
    manager_withdraw_couriers?: Array<manager_withdraw>;

    @Field(() => [timesheet], {nullable:true})
    timesheet_users?: Array<timesheet>;

    @Field(() => UsersCount, {nullable:false})
    _count?: UsersCount;
}
