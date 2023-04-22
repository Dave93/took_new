import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_bonus_pricingWhereInput } from '../order-bonus-pricing/order-bonus-pricing-where.input';
import { Type } from 'class-transformer';
import { order_bonus_pricingOrderByWithAggregationInput } from '../order-bonus-pricing/order-bonus-pricing-order-by-with-aggregation.input';
import { Order_bonus_pricingScalarFieldEnum } from './order-bonus-pricing-scalar-field.enum';
import { order_bonus_pricingScalarWhereWithAggregatesInput } from '../order-bonus-pricing/order-bonus-pricing-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByorderBonusPricingArgs {

    @Field(() => order_bonus_pricingWhereInput, {nullable:true})
    @Type(() => order_bonus_pricingWhereInput)
    where?: order_bonus_pricingWhereInput;

    @Field(() => [order_bonus_pricingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<order_bonus_pricingOrderByWithAggregationInput>;

    @Field(() => [Order_bonus_pricingScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Order_bonus_pricingScalarFieldEnum>;

    @Field(() => order_bonus_pricingScalarWhereWithAggregatesInput, {nullable:true})
    having?: order_bonus_pricingScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
