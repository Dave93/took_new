import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { scheduled_reportsCountOrderByAggregateInput } from './scheduled-reports-count-order-by-aggregate.input';
import { scheduled_reportsMaxOrderByAggregateInput } from './scheduled-reports-max-order-by-aggregate.input';
import { scheduled_reportsMinOrderByAggregateInput } from './scheduled-reports-min-order-by-aggregate.input';

@InputType()
export class scheduled_reportsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cron?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => scheduled_reportsCountOrderByAggregateInput, {nullable:true})
    _count?: scheduled_reportsCountOrderByAggregateInput;

    @Field(() => scheduled_reportsMaxOrderByAggregateInput, {nullable:true})
    _max?: scheduled_reportsMaxOrderByAggregateInput;

    @Field(() => scheduled_reportsMinOrderByAggregateInput, {nullable:true})
    _min?: scheduled_reportsMinOrderByAggregateInput;
}
