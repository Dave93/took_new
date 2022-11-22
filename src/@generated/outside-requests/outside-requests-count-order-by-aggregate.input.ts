import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class outside_requestsCountOrderByAggregateInput {

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
}
