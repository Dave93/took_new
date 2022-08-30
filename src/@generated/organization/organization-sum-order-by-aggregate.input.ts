import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class organizationSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    max_distance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_active_order_count?: keyof typeof SortOrder;
}
