import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class courier_terminal_balanceAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    balance?: keyof typeof SortOrder;
}
