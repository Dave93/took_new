import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { manager_withdrawCountOrderByAggregateInput } from './manager-withdraw-count-order-by-aggregate.input';
import { manager_withdrawAvgOrderByAggregateInput } from './manager-withdraw-avg-order-by-aggregate.input';
import { manager_withdrawMaxOrderByAggregateInput } from './manager-withdraw-max-order-by-aggregate.input';
import { manager_withdrawMinOrderByAggregateInput } from './manager-withdraw-min-order-by-aggregate.input';
import { manager_withdrawSumOrderByAggregateInput } from './manager-withdraw-sum-order-by-aggregate.input';

@InputType()
export class manager_withdrawOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    manager_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courier_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    terminal_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organization_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount_before?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount_after?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payed_date?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => manager_withdrawCountOrderByAggregateInput, {nullable:true})
    _count?: manager_withdrawCountOrderByAggregateInput;

    @Field(() => manager_withdrawAvgOrderByAggregateInput, {nullable:true})
    _avg?: manager_withdrawAvgOrderByAggregateInput;

    @Field(() => manager_withdrawMaxOrderByAggregateInput, {nullable:true})
    _max?: manager_withdrawMaxOrderByAggregateInput;

    @Field(() => manager_withdrawMinOrderByAggregateInput, {nullable:true})
    _min?: manager_withdrawMinOrderByAggregateInput;

    @Field(() => manager_withdrawSumOrderByAggregateInput, {nullable:true})
    _sum?: manager_withdrawSumOrderByAggregateInput;
}
