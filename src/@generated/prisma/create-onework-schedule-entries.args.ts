import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { work_schedule_entriesCreateInput } from '../work-schedule-entries/work-schedule-entries-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneworkScheduleEntriesArgs {

    @Field(() => work_schedule_entriesCreateInput, {nullable:false})
    @Type(() => work_schedule_entriesCreateInput)
    data!: work_schedule_entriesCreateInput;
}
