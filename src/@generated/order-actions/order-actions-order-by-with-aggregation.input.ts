import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { order_actionsCountOrderByAggregateInput } from './order-actions-count-order-by-aggregate.input';
import { order_actionsAvgOrderByAggregateInput } from './order-actions-avg-order-by-aggregate.input';
import { order_actionsMaxOrderByAggregateInput } from './order-actions-max-order-by-aggregate.input';
import { order_actionsMinOrderByAggregateInput } from './order-actions-min-order-by-aggregate.input';
import { order_actionsSumOrderByAggregateInput } from './order-actions-sum-order-by-aggregate.input';

@InputType()
export class order_actionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    action?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    action_text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    terminal_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => order_actionsCountOrderByAggregateInput, {nullable:true})
    _count?: order_actionsCountOrderByAggregateInput;

    @Field(() => order_actionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: order_actionsAvgOrderByAggregateInput;

    @Field(() => order_actionsMaxOrderByAggregateInput, {nullable:true})
    _max?: order_actionsMaxOrderByAggregateInput;

    @Field(() => order_actionsMinOrderByAggregateInput, {nullable:true})
    _min?: order_actionsMinOrderByAggregateInput;

    @Field(() => order_actionsSumOrderByAggregateInput, {nullable:true})
    _sum?: order_actionsSumOrderByAggregateInput;
}
