import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transaction_status } from './order-transaction-status.enum';

@InputType()
export class NestedEnumorder_transaction_statusFilter {

    @Field(() => order_transaction_status, {nullable:true})
    equals?: keyof typeof order_transaction_status;

    @Field(() => [order_transaction_status], {nullable:true})
    in?: Array<keyof typeof order_transaction_status>;

    @Field(() => [order_transaction_status], {nullable:true})
    notIn?: Array<keyof typeof order_transaction_status>;

    @Field(() => NestedEnumorder_transaction_statusFilter, {nullable:true})
    not?: NestedEnumorder_transaction_statusFilter;
}
