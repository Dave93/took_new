import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { Enumorganization_system_typeFilter } from '../prisma/enumorganization-system-type-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { Enumorganization_payment_typesFilter } from '../prisma/enumorganization-payment-types-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { Work_schedulesListRelationFilter } from '../prisma/work-schedules-list-relation-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { Delivery_pricingListRelationFilter } from '../prisma/delivery-pricing-list-relation-filter.input';
import { TerminalsListRelationFilter } from '../prisma/terminals-list-relation-filter.input';
import { Order_statusListRelationFilter } from '../prisma/order-status-list-relation-filter.input';
import { OrdersListRelationFilter } from '../prisma/orders-list-relation-filter.input';
import { Api_tokensListRelationFilter } from '../prisma/api-tokens-list-relation-filter.input';
import { Order_transactionsListRelationFilter } from '../prisma/order-transactions-list-relation-filter.input';
import { Courier_terminal_balanceListRelationFilter } from '../prisma/courier-terminal-balance-list-relation-filter.input';
import { Manager_withdrawListRelationFilter } from '../prisma/manager-withdraw-list-relation-filter.input';
import { Order_bonus_pricingListRelationFilter } from '../prisma/order-bonus-pricing-list-relation-filter.input';

@InputType()
export class organizationWhereInput {

    @Field(() => [organizationWhereInput], {nullable:true})
    AND?: Array<organizationWhereInput>;

    @Field(() => [organizationWhereInput], {nullable:true})
    OR?: Array<organizationWhereInput>;

    @Field(() => [organizationWhereInput], {nullable:true})
    NOT?: Array<organizationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    external_id?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => Enumorganization_system_typeFilter, {nullable:true})
    system_type?: Enumorganization_system_typeFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    iiko_login?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    webhook?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    group_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    apelsin_login?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    apelsin_password?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sender_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sender_number?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    max_distance?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    max_active_order_count?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    max_order_close_distance?: IntFilter;

    @Field(() => Enumorganization_payment_typesFilter, {nullable:true})
    payment_type?: Enumorganization_payment_typesFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    support_chat_url?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    icon_url?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    allow_yandex_delivery?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;

    @Field(() => Work_schedulesListRelationFilter, {nullable:true})
    work_schedules_organization_idTorganization?: Work_schedulesListRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    organization_created_byTousers?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    organization_updated_byTousers?: UsersRelationFilter;

    @Field(() => Delivery_pricingListRelationFilter, {nullable:true})
    delivery_pricing_organization_idTorganization?: Delivery_pricingListRelationFilter;

    @Field(() => TerminalsListRelationFilter, {nullable:true})
    terminals_organization_idTorganization?: TerminalsListRelationFilter;

    @Field(() => Order_statusListRelationFilter, {nullable:true})
    order_status_organization?: Order_statusListRelationFilter;

    @Field(() => OrdersListRelationFilter, {nullable:true})
    orders_organization?: OrdersListRelationFilter;

    @Field(() => Api_tokensListRelationFilter, {nullable:true})
    api_tokens_organization?: Api_tokensListRelationFilter;

    @Field(() => Order_transactionsListRelationFilter, {nullable:true})
    order_transactions_organizations?: Order_transactionsListRelationFilter;

    @Field(() => Courier_terminal_balanceListRelationFilter, {nullable:true})
    courier_terminal_balance_organizations?: Courier_terminal_balanceListRelationFilter;

    @Field(() => Manager_withdrawListRelationFilter, {nullable:true})
    manager_withdraw_organizations?: Manager_withdrawListRelationFilter;

    @Field(() => Order_bonus_pricingListRelationFilter, {nullable:true})
    order_bonus_pricing?: Order_bonus_pricingListRelationFilter;
}
