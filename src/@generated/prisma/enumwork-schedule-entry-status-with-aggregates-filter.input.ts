import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedule_entry_status } from './work-schedule-entry-status.enum';
import { NestedEnumwork_schedule_entry_statusWithAggregatesFilter } from './nested-enumwork-schedule-entry-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumwork_schedule_entry_statusFilter } from './nested-enumwork-schedule-entry-status-filter.input';

@InputType()
export class Enumwork_schedule_entry_statusWithAggregatesFilter {

    @Field(() => work_schedule_entry_status, {nullable:true})
    equals?: keyof typeof work_schedule_entry_status;

    @Field(() => [work_schedule_entry_status], {nullable:true})
    in?: Array<keyof typeof work_schedule_entry_status>;

    @Field(() => [work_schedule_entry_status], {nullable:true})
    notIn?: Array<keyof typeof work_schedule_entry_status>;

    @Field(() => NestedEnumwork_schedule_entry_statusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumwork_schedule_entry_statusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumwork_schedule_entry_statusFilter, {nullable:true})
    _min?: NestedEnumwork_schedule_entry_statusFilter;

    @Field(() => NestedEnumwork_schedule_entry_statusFilter, {nullable:true})
    _max?: NestedEnumwork_schedule_entry_statusFilter;
}
