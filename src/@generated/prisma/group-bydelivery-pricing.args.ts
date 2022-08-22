import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { delivery_pricingWhereInput } from '../delivery-pricing/delivery-pricing-where.input';
import { Type } from 'class-transformer';
import { delivery_pricingOrderByWithAggregationInput } from '../delivery-pricing/delivery-pricing-order-by-with-aggregation.input';
import { Delivery_pricingScalarFieldEnum } from './delivery-pricing-scalar-field.enum';
import { delivery_pricingScalarWhereWithAggregatesInput } from '../delivery-pricing/delivery-pricing-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydeliveryPricingArgs {

    @Field(() => delivery_pricingWhereInput, {nullable:true})
    @Type(() => delivery_pricingWhereInput)
    where?: delivery_pricingWhereInput;

    @Field(() => [delivery_pricingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<delivery_pricingOrderByWithAggregationInput>;

    @Field(() => [Delivery_pricingScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Delivery_pricingScalarFieldEnum>;

    @Field(() => delivery_pricingScalarWhereWithAggregatesInput, {nullable:true})
    having?: delivery_pricingScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
