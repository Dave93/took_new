import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { work_schedule_entriesCountOrderByAggregateInput } from './work-schedule-entries-count-order-by-aggregate.input';
import { work_schedule_entriesAvgOrderByAggregateInput } from './work-schedule-entries-avg-order-by-aggregate.input';
import { work_schedule_entriesMaxOrderByAggregateInput } from './work-schedule-entries-max-order-by-aggregate.input';
import { work_schedule_entriesMinOrderByAggregateInput } from './work-schedule-entries-min-order-by-aggregate.input';
import { work_schedule_entriesSumOrderByAggregateInput } from './work-schedule-entries-sum-order-by-aggregate.input';

@InputType()
export class work_schedule_entriesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    work_schedule_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_start?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_finish?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip_open?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip_close?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lat_open?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lat_close?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lon_open?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lon_close?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    current_status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    late?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => work_schedule_entriesCountOrderByAggregateInput, {nullable:true})
    _count?: work_schedule_entriesCountOrderByAggregateInput;

    @Field(() => work_schedule_entriesAvgOrderByAggregateInput, {nullable:true})
    _avg?: work_schedule_entriesAvgOrderByAggregateInput;

    @Field(() => work_schedule_entriesMaxOrderByAggregateInput, {nullable:true})
    _max?: work_schedule_entriesMaxOrderByAggregateInput;

    @Field(() => work_schedule_entriesMinOrderByAggregateInput, {nullable:true})
    _min?: work_schedule_entriesMinOrderByAggregateInput;

    @Field(() => work_schedule_entriesSumOrderByAggregateInput, {nullable:true})
    _sum?: work_schedule_entriesSumOrderByAggregateInput;
}
