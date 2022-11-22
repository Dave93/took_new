import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_votesWhereInput } from '../order-votes/order-votes-where.input';
import { Type } from 'class-transformer';
import { order_votesOrderByWithAggregationInput } from '../order-votes/order-votes-order-by-with-aggregation.input';
import { Order_votesScalarFieldEnum } from './order-votes-scalar-field.enum';
import { order_votesScalarWhereWithAggregatesInput } from '../order-votes/order-votes-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByorderVotesArgs {

    @Field(() => order_votesWhereInput, {nullable:true})
    @Type(() => order_votesWhereInput)
    where?: order_votesWhereInput;

    @Field(() => [order_votesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<order_votesOrderByWithAggregationInput>;

    @Field(() => [Order_votesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Order_votesScalarFieldEnum>;

    @Field(() => order_votesScalarWhereWithAggregatesInput, {nullable:true})
    having?: order_votesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
