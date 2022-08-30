import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedule_entriesWhereUniqueInput } from './work-schedule-entries-where-unique.input';
import { Type } from 'class-transformer';
import { work_schedule_entriesUpdateWithoutWork_schedule_entries_work_schedulesInput } from './work-schedule-entries-update-without-work-schedule-entries-work-schedules.input';

@InputType()
export class work_schedule_entriesUpdateWithWhereUniqueWithoutWork_schedule_entries_work_schedulesInput {

    @Field(() => work_schedule_entriesWhereUniqueInput, {nullable:false})
    @Type(() => work_schedule_entriesWhereUniqueInput)
    where!: work_schedule_entriesWhereUniqueInput;

    @Field(() => work_schedule_entriesUpdateWithoutWork_schedule_entries_work_schedulesInput, {nullable:false})
    @Type(() => work_schedule_entriesUpdateWithoutWork_schedule_entries_work_schedulesInput)
    data!: work_schedule_entriesUpdateWithoutWork_schedule_entries_work_schedulesInput;
}
