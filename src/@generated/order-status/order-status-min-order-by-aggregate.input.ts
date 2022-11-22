import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class order_statusMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sort?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organization_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    finish?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cancel?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    waiting?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    need_location?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    on_way?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    in_terminal?: keyof typeof SortOrder;
}
