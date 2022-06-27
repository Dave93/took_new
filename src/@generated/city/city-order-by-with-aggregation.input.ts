import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { cityCountOrderByAggregateInput } from './city-count-order-by-aggregate.input';
import { cityMaxOrderByAggregateInput } from './city-max-order-by-aggregate.input';
import { cityMinOrderByAggregateInput } from './city-min-order-by-aggregate.input';

@InputType()
export class cityOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    parent_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => cityCountOrderByAggregateInput, {nullable:true})
    _count?: cityCountOrderByAggregateInput;

    @Field(() => cityMaxOrderByAggregateInput, {nullable:true})
    _max?: cityMaxOrderByAggregateInput;

    @Field(() => cityMinOrderByAggregateInput, {nullable:true})
    _min?: cityMinOrderByAggregateInput;
}
