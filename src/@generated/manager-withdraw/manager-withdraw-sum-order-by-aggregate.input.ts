import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class manager_withdrawSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount_before?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount_after?: keyof typeof SortOrder;
}
