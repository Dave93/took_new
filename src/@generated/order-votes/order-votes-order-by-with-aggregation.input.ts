import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { order_votesCountOrderByAggregateInput } from './order-votes-count-order-by-aggregate.input';
import { order_votesMaxOrderByAggregateInput } from './order-votes-max-order-by-aggregate.input';
import { order_votesMinOrderByAggregateInput } from './order-votes-min-order-by-aggregate.input';

@InputType()
export class order_votesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    terminal_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courier_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_voting?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_chosen?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => order_votesCountOrderByAggregateInput, {nullable:true})
    _count?: order_votesCountOrderByAggregateInput;

    @Field(() => order_votesMaxOrderByAggregateInput, {nullable:true})
    _max?: order_votesMaxOrderByAggregateInput;

    @Field(() => order_votesMinOrderByAggregateInput, {nullable:true})
    _min?: order_votesMinOrderByAggregateInput;
}
