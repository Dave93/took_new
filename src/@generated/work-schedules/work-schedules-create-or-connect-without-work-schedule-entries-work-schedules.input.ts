import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesWhereUniqueInput } from './work-schedules-where-unique.input';
import { Type } from 'class-transformer';
import { work_schedulesCreateWithoutWork_schedule_entries_work_schedulesInput } from './work-schedules-create-without-work-schedule-entries-work-schedules.input';

@InputType()
export class work_schedulesCreateOrConnectWithoutWork_schedule_entries_work_schedulesInput {

    @Field(() => work_schedulesWhereUniqueInput, {nullable:false})
    @Type(() => work_schedulesWhereUniqueInput)
    where!: work_schedulesWhereUniqueInput;

    @Field(() => work_schedulesCreateWithoutWork_schedule_entries_work_schedulesInput, {nullable:false})
    @Type(() => work_schedulesCreateWithoutWork_schedule_entries_work_schedulesInput)
    create!: work_schedulesCreateWithoutWork_schedule_entries_work_schedulesInput;
}
