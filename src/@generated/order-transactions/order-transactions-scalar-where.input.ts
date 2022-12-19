import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { Enumorder_transaction_statusFilter } from '../prisma/enumorder-transaction-status-filter.input';
import { Enumorder_transaction_payment_typeFilter } from '../prisma/enumorder-transaction-payment-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class order_transactionsScalarWhereInput {

    @Field(() => [order_transactionsScalarWhereInput], {nullable:true})
    AND?: Array<order_transactionsScalarWhereInput>;

    @Field(() => [order_transactionsScalarWhereInput], {nullable:true})
    OR?: Array<order_transactionsScalarWhereInput>;

    @Field(() => [order_transactionsScalarWhereInput], {nullable:true})
    NOT?: Array<order_transactionsScalarWhereInput>;

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
}
