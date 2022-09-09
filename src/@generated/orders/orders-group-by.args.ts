import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ordersWhereInput } from './orders-where.input';
import { Type } from 'class-transformer';
import { ordersOrderByWithAggregationInput } from './orders-order-by-with-aggregation.input';
import { OrdersScalarFieldEnum } from '../prisma/orders-scalar-field.enum';
import { ordersScalarWhereWithAggregatesInput } from './orders-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class ordersGroupByArgs {

    @Field(() => ordersWhereInput, {nullable:true})
    @Type(() => ordersWhereInput)
    where?: ordersWhereInput;

    @Field(() => [ordersOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ordersOrderByWithAggregationInput>;

    @Field(() => [OrdersScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OrdersScalarFieldEnum>;

    @Field(() => ordersScalarWhereWithAggregatesInput, {nullable:true})
    having?: ordersScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
