import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class order_transactionsAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    balance_before?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    balance_after?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    not_paid_amount?: keyof typeof SortOrder;
}
