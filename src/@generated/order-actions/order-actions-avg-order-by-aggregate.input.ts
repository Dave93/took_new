import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class order_actionsAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;
}
