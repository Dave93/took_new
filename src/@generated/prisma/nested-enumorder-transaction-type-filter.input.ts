import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transaction_type } from './order-transaction-type.enum';

@InputType()
export class NestedEnumorder_transaction_typeFilter {

    @Field(() => order_transaction_type, {nullable:true})
    equals?: keyof typeof order_transaction_type;

    @Field(() => [order_transaction_type], {nullable:true})
    in?: Array<keyof typeof order_transaction_type>;

    @Field(() => [order_transaction_type], {nullable:true})
    notIn?: Array<keyof typeof order_transaction_type>;

    @Field(() => NestedEnumorder_transaction_typeFilter, {nullable:true})
    not?: NestedEnumorder_transaction_typeFilter;
}
