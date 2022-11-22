import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transaction_status } from './order-transaction-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumorder_transaction_statusFilter } from './nested-enumorder-transaction-status-filter.input';

@InputType()
export class NestedEnumorder_transaction_statusWithAggregatesFilter {

    @Field(() => order_transaction_status, {nullable:true})
    equals?: keyof typeof order_transaction_status;

    @Field(() => [order_transaction_status], {nullable:true})
    in?: Array<keyof typeof order_transaction_status>;

    @Field(() => [order_transaction_status], {nullable:true})
    notIn?: Array<keyof typeof order_transaction_status>;

    @Field(() => NestedEnumorder_transaction_statusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumorder_transaction_statusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumorder_transaction_statusFilter, {nullable:true})
    _min?: NestedEnumorder_transaction_statusFilter;

    @Field(() => NestedEnumorder_transaction_statusFilter, {nullable:true})
    _max?: NestedEnumorder_transaction_statusFilter;
}
