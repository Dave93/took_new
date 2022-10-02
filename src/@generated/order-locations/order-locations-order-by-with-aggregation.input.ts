import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { order_locationsCountOrderByAggregateInput } from './order-locations-count-order-by-aggregate.input';
import { order_locationsAvgOrderByAggregateInput } from './order-locations-avg-order-by-aggregate.input';
import { order_locationsMaxOrderByAggregateInput } from './order-locations-max-order-by-aggregate.input';
import { order_locationsMinOrderByAggregateInput } from './order-locations-min-order-by-aggregate.input';
import { order_locationsSumOrderByAggregateInput } from './order-locations-sum-order-by-aggregate.input';

@InputType()
export class order_locationsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    terminal_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courier_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order_status_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => order_locationsCountOrderByAggregateInput, {nullable:true})
    _count?: order_locationsCountOrderByAggregateInput;

    @Field(() => order_locationsAvgOrderByAggregateInput, {nullable:true})
    _avg?: order_locationsAvgOrderByAggregateInput;

    @Field(() => order_locationsMaxOrderByAggregateInput, {nullable:true})
    _max?: order_locationsMaxOrderByAggregateInput;

    @Field(() => order_locationsMinOrderByAggregateInput, {nullable:true})
    _min?: order_locationsMinOrderByAggregateInput;

    @Field(() => order_locationsSumOrderByAggregateInput, {nullable:true})
    _sum?: order_locationsSumOrderByAggregateInput;
}
