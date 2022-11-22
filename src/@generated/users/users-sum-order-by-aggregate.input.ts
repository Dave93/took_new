import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class usersSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    latitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    longitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    wallet_balance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_active_order_count?: keyof typeof SortOrder;
}
