import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { work_schedule_entriesWhereInput } from '../work-schedule-entries/work-schedule-entries-where.input';
import { Type } from 'class-transformer';
import { work_schedule_entriesOrderByWithAggregationInput } from '../work-schedule-entries/work-schedule-entries-order-by-with-aggregation.input';
import { Work_schedule_entriesScalarFieldEnum } from './work-schedule-entries-scalar-field.enum';
import { work_schedule_entriesScalarWhereWithAggregatesInput } from '../work-schedule-entries/work-schedule-entries-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByworkScheduleEntriesArgs {

    @Field(() => work_schedule_entriesWhereInput, {nullable:true})
    @Type(() => work_schedule_entriesWhereInput)
    where?: work_schedule_entriesWhereInput;

    @Field(() => [work_schedule_entriesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<work_schedule_entriesOrderByWithAggregationInput>;

    @Field(() => [Work_schedule_entriesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Work_schedule_entriesScalarFieldEnum>;

    @Field(() => work_schedule_entriesScalarWhereWithAggregatesInput, {nullable:true})
    having?: work_schedule_entriesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
