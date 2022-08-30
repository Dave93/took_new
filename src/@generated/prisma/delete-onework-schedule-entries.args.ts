import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { work_schedule_entriesWhereUniqueInput } from '../work-schedule-entries/work-schedule-entries-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneworkScheduleEntriesArgs {

    @Field(() => work_schedule_entriesWhereUniqueInput, {nullable:false})
    @Type(() => work_schedule_entriesWhereUniqueInput)
    where!: work_schedule_entriesWhereUniqueInput;
}
