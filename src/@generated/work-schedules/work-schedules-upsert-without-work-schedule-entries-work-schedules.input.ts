import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesUpdateWithoutWork_schedule_entries_work_schedulesInput } from './work-schedules-update-without-work-schedule-entries-work-schedules.input';
import { Type } from 'class-transformer';
import { work_schedulesCreateWithoutWork_schedule_entries_work_schedulesInput } from './work-schedules-create-without-work-schedule-entries-work-schedules.input';

@InputType()
export class work_schedulesUpsertWithoutWork_schedule_entries_work_schedulesInput {

    @Field(() => work_schedulesUpdateWithoutWork_schedule_entries_work_schedulesInput, {nullable:false})
    @Type(() => work_schedulesUpdateWithoutWork_schedule_entries_work_schedulesInput)
    update!: work_schedulesUpdateWithoutWork_schedule_entries_work_schedulesInput;

    @Field(() => work_schedulesCreateWithoutWork_schedule_entries_work_schedulesInput, {nullable:false})
    @Type(() => work_schedulesCreateWithoutWork_schedule_entries_work_schedulesInput)
    create!: work_schedulesCreateWithoutWork_schedule_entries_work_schedulesInput;
}
