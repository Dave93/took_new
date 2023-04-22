import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { Enumorder_transaction_statusFilter } from '../prisma/enumorder-transaction-status-filter.input';
import { Enumorder_transaction_payment_typeFilter } from '../prisma/enumorder-transaction-payment-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { OrdersRelationFilter } from '../prisma/orders-relation-filter.input';
import { TerminalsRelationFilter } from '../prisma/terminals-relation-filter.input';
import { OrganizationRelationFilter } from '../prisma/organization-relation-filter.input';
import { Manager_withdraw_transactionsListRelationFilter } from '../prisma/manager-withdraw-transactions-list-relation-filter.input';

@InputType()
export class order_transactionsWhereInput {

    @Field(() => [order_transactionsWhereInput], {nullable:true})
    AND?: Array<order_transactionsWhereInput>;

    @Field(() => [order_transactionsWhereInput], {nullable:true})
    OR?: Array<order_transactionsWhereInput>;

    @Field(() => [order_transactionsWhereInput], {nullable:true})
    NOT?: Array<order_transactionsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    order_id?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    terminal_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    courier_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    organization_id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    card_number?: StringNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    amount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    balance_before?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    balance_after?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    not_paid_amount?: FloatFilter;

    @Field(() => Enumorder_transaction_statusFilter, {nullable:true})
    status?: Enumorder_transaction_statusFilter;

    @Field(() => Enumorder_transaction_payment_typeFilter, {nullable:true})
    transaction_payment_type?: Enumorder_transaction_payment_typeFilter;

    @Field(() => StringFilter, {nullable:true})
    transaction_type?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    comment?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    error_text?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    order_transactions_created_byTousers?: UsersRelationFilter;

    @Field(() => OrdersRelationFilter, {nullable:true})
    order_transactions_orders?: OrdersRelationFilter;

    @Field(() => TerminalsRelationFilter, {nullable:true})
    order_transactions_terminals?: TerminalsRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    order_transactions_couriers?: UsersRelationFilter;

    @Field(() => OrganizationRelationFilter, {nullable:true})
    order_transactions_organizations?: OrganizationRelationFilter;

    @Field(() => Manager_withdraw_transactionsListRelationFilter, {nullable:true})
    manager_withdraw_transactions_transaction?: Manager_withdraw_transactionsListRelationFilter;
}
