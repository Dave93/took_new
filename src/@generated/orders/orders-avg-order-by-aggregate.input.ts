import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ordersAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    from_lat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from_lon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to_lat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to_lon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pre_distance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pre_duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    distance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delivery_price?: keyof typeof SortOrder;
}
