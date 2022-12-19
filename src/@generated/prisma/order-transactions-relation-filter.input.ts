import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsWhereInput } from '../order-transactions/order-transactions-where.input';

@InputType()
export class Order_transactionsRelationFilter {

    @Field(() => order_transactionsWhereInput, {nullable:true})
    is?: order_transactionsWhereInput;

    @Field(() => order_transactionsWhereInput, {nullable:true})
    isNot?: order_transactionsWhereInput;
}
