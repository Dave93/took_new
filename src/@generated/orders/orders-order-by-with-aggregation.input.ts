import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ordersCountOrderByAggregateInput } from './orders-count-order-by-aggregate.input';
import { ordersAvgOrderByAggregateInput } from './orders-avg-order-by-aggregate.input';
import { ordersMaxOrderByAggregateInput } from './orders-max-order-by-aggregate.input';
import { ordersMinOrderByAggregateInput } from './orders-min-order-by-aggregate.input';
import { ordersSumOrderByAggregateInput } from './orders-sum-order-by-aggregate.input';

@InputType()
export class ordersOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organization_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customer_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courier_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    terminal_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order_status_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delivery_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from_lat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from_lon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to_lat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to_lon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pre_distance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pre_duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    distance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delivery_price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delivery_address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delivery_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    finished_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delivery_comment?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delivery_phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delivery_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payment_type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cancel_reason?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order_items?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => ordersCountOrderByAggregateInput, {nullable:true})
    _count?: ordersCountOrderByAggregateInput;

    @Field(() => ordersAvgOrderByAggregateInput, {nullable:true})
    _avg?: ordersAvgOrderByAggregateInput;

    @Field(() => ordersMaxOrderByAggregateInput, {nullable:true})
    _max?: ordersMaxOrderByAggregateInput;

    @Field(() => ordersMinOrderByAggregateInput, {nullable:true})
    _min?: ordersMinOrderByAggregateInput;

    @Field(() => ordersSumOrderByAggregateInput, {nullable:true})
    _sum?: ordersSumOrderByAggregateInput;
}
