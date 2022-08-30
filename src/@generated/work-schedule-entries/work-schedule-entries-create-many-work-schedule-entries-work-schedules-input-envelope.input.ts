import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedule_entriesCreateManyWork_schedule_entries_work_schedulesInput } from './work-schedule-entries-create-many-work-schedule-entries-work-schedules.input';
import { Type } from 'class-transformer';

@InputType()
export class work_schedule_entriesCreateManyWork_schedule_entries_work_schedulesInputEnvelope {

    @Field(() => [work_schedule_entriesCreateManyWork_schedule_entries_work_schedulesInput], {nullable:false})
    @Type(() => work_schedule_entriesCreateManyWork_schedule_entries_work_schedulesInput)
    data!: Array<work_schedule_entriesCreateManyWork_schedule_entries_work_schedulesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
