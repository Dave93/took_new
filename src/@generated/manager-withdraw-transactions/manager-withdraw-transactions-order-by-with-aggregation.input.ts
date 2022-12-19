import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { manager_withdraw_transactionsCountOrderByAggregateInput } from './manager-withdraw-transactions-count-order-by-aggregate.input';
import { manager_withdraw_transactionsAvgOrderByAggregateInput } from './manager-withdraw-transactions-avg-order-by-aggregate.input';
import { manager_withdraw_transactionsMaxOrderByAggregateInput } from './manager-withdraw-transactions-max-order-by-aggregate.input';
import { manager_withdraw_transactionsMinOrderByAggregateInput } from './manager-withdraw-transactions-min-order-by-aggregate.input';
import { manager_withdraw_transactionsSumOrderByAggregateInput } from './manager-withdraw-transactions-sum-order-by-aggregate.input';

@InputType()
export class manager_withdraw_transactionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    withdraw_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transaction_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    payed_date?: keyof typeof SortOrder;

    @Field(() => manager_withdraw_transactionsCountOrderByAggregateInput, {nullable:true})
    _count?: manager_withdraw_transactionsCountOrderByAggregateInput;

    @Field(() => manager_withdraw_transactionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: manager_withdraw_transactionsAvgOrderByAggregateInput;

    @Field(() => manager_withdraw_transactionsMaxOrderByAggregateInput, {nullable:true})
    _max?: manager_withdraw_transactionsMaxOrderByAggregateInput;

    @Field(() => manager_withdraw_transactionsMinOrderByAggregateInput, {nullable:true})
    _min?: manager_withdraw_transactionsMinOrderByAggregateInput;

    @Field(() => manager_withdraw_transactionsSumOrderByAggregateInput, {nullable:true})
    _sum?: manager_withdraw_transactionsSumOrderByAggregateInput;
}
