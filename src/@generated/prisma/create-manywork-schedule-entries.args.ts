import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { work_schedule_entriesCreateManyInput } from '../work-schedule-entries/work-schedule-entries-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyworkScheduleEntriesArgs {

    @Field(() => [work_schedule_entriesCreateManyInput], {nullable:false})
    @Type(() => work_schedule_entriesCreateManyInput)
    data!: Array<work_schedule_entriesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
