import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_transactionsWhereInput } from '../order-transactions/order-transactions-where.input';
import { Type } from 'class-transformer';
import { order_transactionsOrderByWithAggregationInput } from '../order-transactions/order-transactions-order-by-with-aggregation.input';
import { Order_transactionsScalarFieldEnum } from './order-transactions-scalar-field.enum';
import { order_transactionsScalarWhereWithAggregatesInput } from '../order-transactions/order-transactions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByorderTransactionsArgs {

    @Field(() => order_transactionsWhereInput, {nullable:true})
    @Type(() => order_transactionsWhereInput)
    where?: order_transactionsWhereInput;

    @Field(() => [order_transactionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<order_transactionsOrderByWithAggregationInput>;

    @Field(() => [Order_transactionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Order_transactionsScalarFieldEnum>;

    @Field(() => order_transactionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: order_transactionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
