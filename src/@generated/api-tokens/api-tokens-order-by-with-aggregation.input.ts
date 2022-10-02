import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { api_tokensCountOrderByAggregateInput } from './api-tokens-count-order-by-aggregate.input';
import { api_tokensMaxOrderByAggregateInput } from './api-tokens-max-order-by-aggregate.input';
import { api_tokensMinOrderByAggregateInput } from './api-tokens-min-order-by-aggregate.input';

@InputType()
export class api_tokensOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organization_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => api_tokensCountOrderByAggregateInput, {nullable:true})
    _count?: api_tokensCountOrderByAggregateInput;

    @Field(() => api_tokensMaxOrderByAggregateInput, {nullable:true})
    _max?: api_tokensMaxOrderByAggregateInput;

    @Field(() => api_tokensMinOrderByAggregateInput, {nullable:true})
    _min?: api_tokensMinOrderByAggregateInput;
}
