import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { courier_terminal_balanceCountOrderByAggregateInput } from './courier-terminal-balance-count-order-by-aggregate.input';
import { courier_terminal_balanceAvgOrderByAggregateInput } from './courier-terminal-balance-avg-order-by-aggregate.input';
import { courier_terminal_balanceMaxOrderByAggregateInput } from './courier-terminal-balance-max-order-by-aggregate.input';
import { courier_terminal_balanceMinOrderByAggregateInput } from './courier-terminal-balance-min-order-by-aggregate.input';
import { courier_terminal_balanceSumOrderByAggregateInput } from './courier-terminal-balance-sum-order-by-aggregate.input';

@InputType()
export class courier_terminal_balanceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courier_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    terminal_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organization_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    balance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => courier_terminal_balanceCountOrderByAggregateInput, {nullable:true})
    _count?: courier_terminal_balanceCountOrderByAggregateInput;

    @Field(() => courier_terminal_balanceAvgOrderByAggregateInput, {nullable:true})
    _avg?: courier_terminal_balanceAvgOrderByAggregateInput;

    @Field(() => courier_terminal_balanceMaxOrderByAggregateInput, {nullable:true})
    _max?: courier_terminal_balanceMaxOrderByAggregateInput;

    @Field(() => courier_terminal_balanceMinOrderByAggregateInput, {nullable:true})
    _min?: courier_terminal_balanceMinOrderByAggregateInput;

    @Field(() => courier_terminal_balanceSumOrderByAggregateInput, {nullable:true})
    _sum?: courier_terminal_balanceSumOrderByAggregateInput;
}
