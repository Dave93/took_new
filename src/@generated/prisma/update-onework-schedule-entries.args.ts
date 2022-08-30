import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { work_schedule_entriesUpdateInput } from '../work-schedule-entries/work-schedule-entries-update.input';
import { Type } from 'class-transformer';
import { work_schedule_entriesWhereUniqueInput } from '../work-schedule-entries/work-schedule-entries-where-unique.input';

@ArgsType()
export class UpdateOneworkScheduleEntriesArgs {

    @Field(() => work_schedule_entriesUpdateInput, {nullable:false})
    @Type(() => work_schedule_entriesUpdateInput)
    data!: work_schedule_entriesUpdateInput;

    @Field(() => work_schedule_entriesWhereUniqueInput, {nullable:false})
    @Type(() => work_schedule_entriesWhereUniqueInput)
    where!: work_schedule_entriesWhereUniqueInput;
}
