import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class manager_withdraw_transactionsAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;
}
