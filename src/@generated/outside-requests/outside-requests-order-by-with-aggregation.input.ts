import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { outside_requestsCountOrderByAggregateInput } from './outside-requests-count-order-by-aggregate.input';
import { outside_requestsMaxOrderByAggregateInput } from './outside-requests-max-order-by-aggregate.input';
import { outside_requestsMinOrderByAggregateInput } from './outside-requests-min-order-by-aggregate.input';

@InputType()
export class outside_requestsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    request_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    request_data?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    response_data?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    response_status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    external_url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    model_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    model_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => outside_requestsCountOrderByAggregateInput, {nullable:true})
    _count?: outside_requestsCountOrderByAggregateInput;

    @Field(() => outside_requestsMaxOrderByAggregateInput, {nullable:true})
    _max?: outside_requestsMaxOrderByAggregateInput;

    @Field(() => outside_requestsMinOrderByAggregateInput, {nullable:true})
    _min?: outside_requestsMinOrderByAggregateInput;
}
