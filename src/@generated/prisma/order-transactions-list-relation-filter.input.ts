import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsWhereInput } from '../order-transactions/order-transactions-where.input';

@InputType()
export class Order_transactionsListRelationFilter {

    @Field(() => order_transactionsWhereInput, {nullable:true})
    every?: order_transactionsWhereInput;

    @Field(() => order_transactionsWhereInput, {nullable:true})
    some?: order_transactionsWhereInput;

    @Field(() => order_transactionsWhereInput, {nullable:true})
    none?: order_transactionsWhereInput;
}
