import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_locationsWhereInput } from '../order-locations/order-locations-where.input';
import { Type } from 'class-transformer';
import { order_locationsOrderByWithAggregationInput } from '../order-locations/order-locations-order-by-with-aggregation.input';
import { Order_locationsScalarFieldEnum } from './order-locations-scalar-field.enum';
import { order_locationsScalarWhereWithAggregatesInput } from '../order-locations/order-locations-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByorderLocationsArgs {

    @Field(() => order_locationsWhereInput, {nullable:true})
    @Type(() => order_locationsWhereInput)
    where?: order_locationsWhereInput;

    @Field(() => [order_locationsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<order_locationsOrderByWithAggregationInput>;

    @Field(() => [Order_locationsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Order_locationsScalarFieldEnum>;

    @Field(() => order_locationsScalarWhereWithAggregatesInput, {nullable:true})
    having?: order_locationsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
