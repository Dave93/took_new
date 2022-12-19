import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { Enumorder_transaction_statusWithAggregatesFilter } from '../prisma/enumorder-transaction-status-with-aggregates-filter.input';
import { Enumorder_transaction_payment_typeWithAggregatesFilter } from '../prisma/enumorder-transaction-payment-type-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class order_transactionsScalarWhereWithAggregatesInput {

    @Field(() => [order_transactionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<order_transactionsScalarWhereWithAggregatesInput>;

    @Field(() => [order_transactionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<order_transactionsScalarWhereWithAggregatesInput>;

    @Field(() => [order_transactionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<order_transactionsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    order_id?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    terminal_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    courier_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    organization_id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    card_number?: StringNullableWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    amount?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    not_paid_amount?: FloatWithAggregatesFilter;

    @Field(() => Enumorder_transaction_statusWithAggregatesFilter, {nullable:true})
    status?: Enumorder_transaction_statusWithAggregatesFilter;

    @Field(() => Enumorder_transaction_payment_typeWithAggregatesFilter, {nullable:true})
    transaction_payment_type?: Enumorder_transaction_payment_typeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    transaction_type?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    comment?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    error_text?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    created_by?: StringNullableWithAggregatesFilter;
}
