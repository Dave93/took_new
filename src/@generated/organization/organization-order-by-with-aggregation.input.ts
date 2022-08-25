import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { organizationCountOrderByAggregateInput } from './organization-count-order-by-aggregate.input';
import { organizationMaxOrderByAggregateInput } from './organization-max-order-by-aggregate.input';
import { organizationMinOrderByAggregateInput } from './organization-min-order-by-aggregate.input';

@InputType()
export class organizationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    external_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    system_type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    iiko_login?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    webhook?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    group_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    apelsin_login?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    apelsin_password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sender_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sender_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => organizationCountOrderByAggregateInput, {nullable:true})
    _count?: organizationCountOrderByAggregateInput;

    @Field(() => organizationMaxOrderByAggregateInput, {nullable:true})
    _max?: organizationMaxOrderByAggregateInput;

    @Field(() => organizationMinOrderByAggregateInput, {nullable:true})
    _min?: organizationMinOrderByAggregateInput;
}
