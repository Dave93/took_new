import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { OrganizationRelationFilter } from '../prisma/organization-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { Users_terminalsListRelationFilter } from '../prisma/users-terminals-list-relation-filter.input';
import { OrdersListRelationFilter } from '../prisma/orders-list-relation-filter.input';
import { Order_actionsListRelationFilter } from '../prisma/order-actions-list-relation-filter.input';
import { Order_locationsListRelationFilter } from '../prisma/order-locations-list-relation-filter.input';
import { Delivery_pricingListRelationFilter } from '../prisma/delivery-pricing-list-relation-filter.input';
import { Order_votesListRelationFilter } from '../prisma/order-votes-list-relation-filter.input';
import { Order_transactionsListRelationFilter } from '../prisma/order-transactions-list-relation-filter.input';
import { Courier_terminal_balanceListRelationFilter } from '../prisma/courier-terminal-balance-list-relation-filter.input';
import { Manager_withdrawListRelationFilter } from '../prisma/manager-withdraw-list-relation-filter.input';
import { Order_bonus_pricingListRelationFilter } from '../prisma/order-bonus-pricing-list-relation-filter.input';

@InputType()
export class terminalsWhereInput {

    @Field(() => [terminalsWhereInput], {nullable:true})
    AND?: Array<terminalsWhereInput>;

    @Field(() => [terminalsWhereInput], {nullable:true})
    OR?: Array<terminalsWhereInput>;

    @Field(() => [terminalsWhereInput], {nullable:true})
    NOT?: Array<terminalsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    latitude?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    longitude?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    external_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    organization_id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    manager_name?: StringNullableFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    organization?: OrganizationRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => Users_terminalsListRelationFilter, {nullable:true})
    users_terminals?: Users_terminalsListRelationFilter;

    @Field(() => OrdersListRelationFilter, {nullable:true})
    orders_terminals?: OrdersListRelationFilter;

    @Field(() => Order_actionsListRelationFilter, {nullable:true})
    order_actions_terminals?: Order_actionsListRelationFilter;

    @Field(() => Order_locationsListRelationFilter, {nullable:true})
    order_locations_terminals?: Order_locationsListRelationFilter;

    @Field(() => Delivery_pricingListRelationFilter, {nullable:true})
    delivery_pricing_terminal_idTterminal?: Delivery_pricingListRelationFilter;

    @Field(() => Order_votesListRelationFilter, {nullable:true})
    order_votes_terminals?: Order_votesListRelationFilter;

    @Field(() => Order_transactionsListRelationFilter, {nullable:true})
    order_transactions_terminals?: Order_transactionsListRelationFilter;

    @Field(() => Courier_terminal_balanceListRelationFilter, {nullable:true})
    courier_terminal_balance_terminals?: Courier_terminal_balanceListRelationFilter;

    @Field(() => Manager_withdrawListRelationFilter, {nullable:true})
    manager_withdraw_terminals?: Manager_withdrawListRelationFilter;

    @Field(() => Order_bonus_pricingListRelationFilter, {nullable:true})
    order_bonus_pricing?: Order_bonus_pricingListRelationFilter;
}
