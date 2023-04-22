import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { work_schedulesCountOrderByAggregateInput } from './work-schedules-count-order-by-aggregate.input';
import { work_schedulesAvgOrderByAggregateInput } from './work-schedules-avg-order-by-aggregate.input';
import { work_schedulesMaxOrderByAggregateInput } from './work-schedules-max-order-by-aggregate.input';
import { work_schedulesMinOrderByAggregateInput } from './work-schedules-min-order-by-aggregate.input';
import { work_schedulesSumOrderByAggregateInput } from './work-schedules-sum-order-by-aggregate.input';

@InputType()
export class work_schedulesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    organization_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    days?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    start_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    end_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_start_time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bonus_price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;

    @Field(() => work_schedulesCountOrderByAggregateInput, {nullable:true})
    _count?: work_schedulesCountOrderByAggregateInput;

    @Field(() => work_schedulesAvgOrderByAggregateInput, {nullable:true})
    _avg?: work_schedulesAvgOrderByAggregateInput;

    @Field(() => work_schedulesMaxOrderByAggregateInput, {nullable:true})
    _max?: work_schedulesMaxOrderByAggregateInput;

    @Field(() => work_schedulesMinOrderByAggregateInput, {nullable:true})
    _min?: work_schedulesMinOrderByAggregateInput;

    @Field(() => work_schedulesSumOrderByAggregateInput, {nullable:true})
    _sum?: work_schedulesSumOrderByAggregateInput;
}
