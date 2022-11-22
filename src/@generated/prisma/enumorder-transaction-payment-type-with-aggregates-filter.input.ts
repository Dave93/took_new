import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transaction_payment_type } from './order-transaction-payment-type.enum';
import { NestedEnumorder_transaction_payment_typeWithAggregatesFilter } from './nested-enumorder-transaction-payment-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumorder_transaction_payment_typeFilter } from './nested-enumorder-transaction-payment-type-filter.input';

@InputType()
export class Enumorder_transaction_payment_typeWithAggregatesFilter {

    @Field(() => order_transaction_payment_type, {nullable:true})
    equals?: keyof typeof order_transaction_payment_type;

    @Field(() => [order_transaction_payment_type], {nullable:true})
    in?: Array<keyof typeof order_transaction_payment_type>;

    @Field(() => [order_transaction_payment_type], {nullable:true})
    notIn?: Array<keyof typeof order_transaction_payment_type>;

    @Field(() => NestedEnumorder_transaction_payment_typeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumorder_transaction_payment_typeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumorder_transaction_payment_typeFilter, {nullable:true})
    _min?: NestedEnumorder_transaction_payment_typeFilter;

    @Field(() => NestedEnumorder_transaction_payment_typeFilter, {nullable:true})
    _max?: NestedEnumorder_transaction_payment_typeFilter;
}
