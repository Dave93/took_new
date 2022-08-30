import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedule_entriesCreateManyWork_schedule_entries_created_byTousersInput } from './work-schedule-entries-create-many-work-schedule-entries-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class work_schedule_entriesCreateManyWork_schedule_entries_created_byTousersInputEnvelope {

    @Field(() => [work_schedule_entriesCreateManyWork_schedule_entries_created_byTousersInput], {nullable:false})
    @Type(() => work_schedule_entriesCreateManyWork_schedule_entries_created_byTousersInput)
    data!: Array<work_schedule_entriesCreateManyWork_schedule_entries_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
