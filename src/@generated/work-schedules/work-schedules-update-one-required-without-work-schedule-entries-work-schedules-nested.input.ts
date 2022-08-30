import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedulesCreateWithoutWork_schedule_entries_work_schedulesInput } from './work-schedules-create-without-work-schedule-entries-work-schedules.input';
import { Type } from 'class-transformer';
import { work_schedulesCreateOrConnectWithoutWork_schedule_entries_work_schedulesInput } from './work-schedules-create-or-connect-without-work-schedule-entries-work-schedules.input';
import { work_schedulesUpsertWithoutWork_schedule_entries_work_schedulesInput } from './work-schedules-upsert-without-work-schedule-entries-work-schedules.input';
import { work_schedulesWhereUniqueInput } from './work-schedules-where-unique.input';
import { work_schedulesUpdateWithoutWork_schedule_entries_work_schedulesInput } from './work-schedules-update-without-work-schedule-entries-work-schedules.input';

@InputType()
export class work_schedulesUpdateOneRequiredWithoutWork_schedule_entries_work_schedulesNestedInput {

    @Field(() => work_schedulesCreateWithoutWork_schedule_entries_work_schedulesInput, {nullable:true})
    @Type(() => work_schedulesCreateWithoutWork_schedule_entries_work_schedulesInput)
    create?: work_schedulesCreateWithoutWork_schedule_entries_work_schedulesInput;

    @Field(() => work_schedulesCreateOrConnectWithoutWork_schedule_entries_work_schedulesInput, {nullable:true})
    @Type(() => work_schedulesCreateOrConnectWithoutWork_schedule_entries_work_schedulesInput)
    connectOrCreate?: work_schedulesCreateOrConnectWithoutWork_schedule_entries_work_schedulesInput;

    @Field(() => work_schedulesUpsertWithoutWork_schedule_entries_work_schedulesInput, {nullable:true})
    @Type(() => work_schedulesUpsertWithoutWork_schedule_entries_work_schedulesInput)
    upsert?: work_schedulesUpsertWithoutWork_schedule_entries_work_schedulesInput;

    @Field(() => work_schedulesWhereUniqueInput, {nullable:true})
    @Type(() => work_schedulesWhereUniqueInput)
    connect?: work_schedulesWhereUniqueInput;

    @Field(() => work_schedulesUpdateWithoutWork_schedule_entries_work_schedulesInput, {nullable:true})
    @Type(() => work_schedulesUpdateWithoutWork_schedule_entries_work_schedulesInput)
    update?: work_schedulesUpdateWithoutWork_schedule_entries_work_schedulesInput;
}
