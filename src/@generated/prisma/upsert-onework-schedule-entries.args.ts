import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { work_schedule_entriesWhereUniqueInput } from '../work-schedule-entries/work-schedule-entries-where-unique.input';
import { Type } from 'class-transformer';
import { work_schedule_entriesCreateInput } from '../work-schedule-entries/work-schedule-entries-create.input';
import { work_schedule_entriesUpdateInput } from '../work-schedule-entries/work-schedule-entries-update.input';

@ArgsType()
export class UpsertOneworkScheduleEntriesArgs {

    @Field(() => work_schedule_entriesWhereUniqueInput, {nullable:false})
    @Type(() => work_schedule_entriesWhereUniqueInput)
    where!: work_schedule_entriesWhereUniqueInput;

    @Field(() => work_schedule_entriesCreateInput, {nullable:false})
    @Type(() => work_schedule_entriesCreateInput)
    create!: work_schedule_entriesCreateInput;

    @Field(() => work_schedule_entriesUpdateInput, {nullable:false})
    @Type(() => work_schedule_entriesUpdateInput)
    update!: work_schedule_entriesUpdateInput;
}
