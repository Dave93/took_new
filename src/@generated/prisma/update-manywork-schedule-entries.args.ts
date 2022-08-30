import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { work_schedule_entriesUpdateManyMutationInput } from '../work-schedule-entries/work-schedule-entries-update-many-mutation.input';
import { Type } from 'class-transformer';
import { work_schedule_entriesWhereInput } from '../work-schedule-entries/work-schedule-entries-where.input';

@ArgsType()
export class UpdateManyworkScheduleEntriesArgs {

    @Field(() => work_schedule_entriesUpdateManyMutationInput, {nullable:false})
    @Type(() => work_schedule_entriesUpdateManyMutationInput)
    data!: work_schedule_entriesUpdateManyMutationInput;

    @Field(() => work_schedule_entriesWhereInput, {nullable:true})
    @Type(() => work_schedule_entriesWhereInput)
    where?: work_schedule_entriesWhereInput;
}
