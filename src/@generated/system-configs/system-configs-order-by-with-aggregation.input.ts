import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { system_configsCountOrderByAggregateInput } from './system-configs-count-order-by-aggregate.input';
import { system_configsMaxOrderByAggregateInput } from './system-configs-max-order-by-aggregate.input';
import { system_configsMinOrderByAggregateInput } from './system-configs-min-order-by-aggregate.input';

@InputType()
export class system_configsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => system_configsCountOrderByAggregateInput, {nullable:true})
    _count?: system_configsCountOrderByAggregateInput;

    @Field(() => system_configsMaxOrderByAggregateInput, {nullable:true})
    _max?: system_configsMaxOrderByAggregateInput;

    @Field(() => system_configsMinOrderByAggregateInput, {nullable:true})
    _min?: system_configsMinOrderByAggregateInput;
}
