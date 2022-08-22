import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { delivery_pricingCountOrderByAggregateInput } from './delivery-pricing-count-order-by-aggregate.input';
import { delivery_pricingAvgOrderByAggregateInput } from './delivery-pricing-avg-order-by-aggregate.input';
import { delivery_pricingMaxOrderByAggregateInput } from './delivery-pricing-max-order-by-aggregate.input';
import { delivery_pricingMinOrderByAggregateInput } from './delivery-pricing-min-order-by-aggregate.input';
import { delivery_pricingSumOrderByAggregateInput } from './delivery-pricing-sum-order-by-aggregate.input';

@InputType()
export class delivery_pricingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    default?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    drive_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    days?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    start_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    end_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    min_price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rules?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price_per_km?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => delivery_pricingCountOrderByAggregateInput, {nullable:true})
    _count?: delivery_pricingCountOrderByAggregateInput;

    @Field(() => delivery_pricingAvgOrderByAggregateInput, {nullable:true})
    _avg?: delivery_pricingAvgOrderByAggregateInput;

    @Field(() => delivery_pricingMaxOrderByAggregateInput, {nullable:true})
    _max?: delivery_pricingMaxOrderByAggregateInput;

    @Field(() => delivery_pricingMinOrderByAggregateInput, {nullable:true})
    _min?: delivery_pricingMinOrderByAggregateInput;

    @Field(() => delivery_pricingSumOrderByAggregateInput, {nullable:true})
    _sum?: delivery_pricingSumOrderByAggregateInput;
}
