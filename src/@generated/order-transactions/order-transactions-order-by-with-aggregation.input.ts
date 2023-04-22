import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { order_transactionsCountOrderByAggregateInput } from './order-transactions-count-order-by-aggregate.input';
import { order_transactionsAvgOrderByAggregateInput } from './order-transactions-avg-order-by-aggregate.input';
import { order_transactionsMaxOrderByAggregateInput } from './order-transactions-max-order-by-aggregate.input';
import { order_transactionsMinOrderByAggregateInput } from './order-transactions-min-order-by-aggregate.input';
import { order_transactionsSumOrderByAggregateInput } from './order-transactions-sum-order-by-aggregate.input';

@InputType()
export class order_transactionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    order_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    terminal_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    courier_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organization_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    card_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    balance_before?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    balance_after?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    not_paid_amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transaction_payment_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transaction_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    comment?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    error_text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => order_transactionsCountOrderByAggregateInput, {nullable:true})
    _count?: order_transactionsCountOrderByAggregateInput;

    @Field(() => order_transactionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: order_transactionsAvgOrderByAggregateInput;

    @Field(() => order_transactionsMaxOrderByAggregateInput, {nullable:true})
    _max?: order_transactionsMaxOrderByAggregateInput;

    @Field(() => order_transactionsMinOrderByAggregateInput, {nullable:true})
    _min?: order_transactionsMinOrderByAggregateInput;

    @Field(() => order_transactionsSumOrderByAggregateInput, {nullable:true})
    _sum?: order_transactionsSumOrderByAggregateInput;
}
