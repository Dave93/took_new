import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { work_schedule_entriesWhereInput } from '../work-schedule-entries/work-schedule-entries-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyworkScheduleEntriesArgs {

    @Field(() => work_schedule_entriesWhereInput, {nullable:true})
    @Type(() => work_schedule_entriesWhereInput)
    where?: work_schedule_entriesWhereInput;
}
