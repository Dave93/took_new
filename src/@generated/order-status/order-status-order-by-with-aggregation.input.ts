import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { order_statusCountOrderByAggregateInput } from './order-status-count-order-by-aggregate.input';
import { order_statusAvgOrderByAggregateInput } from './order-status-avg-order-by-aggregate.input';
import { order_statusMaxOrderByAggregateInput } from './order-status-max-order-by-aggregate.input';
import { order_statusMinOrderByAggregateInput } from './order-status-min-order-by-aggregate.input';
import { order_statusSumOrderByAggregateInput } from './order-status-sum-order-by-aggregate.input';

@InputType()
export class order_statusOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sort?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organization_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    finish?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cancel?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    waiting?: keyof typeof SortOrder;

    @Field(() => order_statusCountOrderByAggregateInput, {nullable:true})
    _count?: order_statusCountOrderByAggregateInput;

    @Field(() => order_statusAvgOrderByAggregateInput, {nullable:true})
    _avg?: order_statusAvgOrderByAggregateInput;

    @Field(() => order_statusMaxOrderByAggregateInput, {nullable:true})
    _max?: order_statusMaxOrderByAggregateInput;

    @Field(() => order_statusMinOrderByAggregateInput, {nullable:true})
    _min?: order_statusMinOrderByAggregateInput;

    @Field(() => order_statusSumOrderByAggregateInput, {nullable:true})
    _sum?: order_statusSumOrderByAggregateInput;
}
