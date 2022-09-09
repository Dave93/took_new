import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_statusWhereInput } from '../order-status/order-status-where.input';
import { Type } from 'class-transformer';
import { order_statusOrderByWithAggregationInput } from '../order-status/order-status-order-by-with-aggregation.input';
import { Order_statusScalarFieldEnum } from './order-status-scalar-field.enum';
import { order_statusScalarWhereWithAggregatesInput } from '../order-status/order-status-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByorderStatusArgs {

    @Field(() => order_statusWhereInput, {nullable:true})
    @Type(() => order_statusWhereInput)
    where?: order_statusWhereInput;

    @Field(() => [order_statusOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<order_statusOrderByWithAggregationInput>;

    @Field(() => [Order_statusScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Order_statusScalarFieldEnum>;

    @Field(() => order_statusScalarWhereWithAggregatesInput, {nullable:true})
    having?: order_statusScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
