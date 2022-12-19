import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { brandsCountOrderByAggregateInput } from './brands-count-order-by-aggregate.input';
import { brandsMaxOrderByAggregateInput } from './brands-max-order-by-aggregate.input';
import { brandsMinOrderByAggregateInput } from './brands-min-order-by-aggregate.input';

@InputType()
export class brandsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    api_url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    logo_path?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => brandsCountOrderByAggregateInput, {nullable:true})
    _count?: brandsCountOrderByAggregateInput;

    @Field(() => brandsMaxOrderByAggregateInput, {nullable:true})
    _max?: brandsMaxOrderByAggregateInput;

    @Field(() => brandsMinOrderByAggregateInput, {nullable:true})
    _min?: brandsMinOrderByAggregateInput;
}
