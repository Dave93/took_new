import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { order_bonus_pricingCountOrderByAggregateInput } from './order-bonus-pricing-count-order-by-aggregate.input';
import { order_bonus_pricingAvgOrderByAggregateInput } from './order-bonus-pricing-avg-order-by-aggregate.input';
import { order_bonus_pricingMaxOrderByAggregateInput } from './order-bonus-pricing-max-order-by-aggregate.input';
import { order_bonus_pricingMinOrderByAggregateInput } from './order-bonus-pricing-min-order-by-aggregate.input';
import { order_bonus_pricingSumOrderByAggregateInput } from './order-bonus-pricing-sum-order-by-aggregate.input';

@InputType()
export class order_bonus_pricingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    start_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    end_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rules?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    min_distance_km?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organization_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    terminal_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courier_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => order_bonus_pricingCountOrderByAggregateInput, {nullable:true})
    _count?: order_bonus_pricingCountOrderByAggregateInput;

    @Field(() => order_bonus_pricingAvgOrderByAggregateInput, {nullable:true})
    _avg?: order_bonus_pricingAvgOrderByAggregateInput;

    @Field(() => order_bonus_pricingMaxOrderByAggregateInput, {nullable:true})
    _max?: order_bonus_pricingMaxOrderByAggregateInput;

    @Field(() => order_bonus_pricingMinOrderByAggregateInput, {nullable:true})
    _min?: order_bonus_pricingMinOrderByAggregateInput;

    @Field(() => order_bonus_pricingSumOrderByAggregateInput, {nullable:true})
    _sum?: order_bonus_pricingSumOrderByAggregateInput;
}
