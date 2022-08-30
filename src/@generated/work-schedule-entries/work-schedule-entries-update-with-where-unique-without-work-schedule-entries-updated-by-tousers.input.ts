import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedule_entriesWhereUniqueInput } from './work-schedule-entries-where-unique.input';
import { Type } from 'class-transformer';
import { work_schedule_entriesUpdateWithoutWork_schedule_entries_updated_byTousersInput } from './work-schedule-entries-update-without-work-schedule-entries-updated-by-tousers.input';

@InputType()
export class work_schedule_entriesUpdateWithWhereUniqueWithoutWork_schedule_entries_updated_byTousersInput {

    @Field(() => work_schedule_entriesWhereUniqueInput, {nullable:false})
    @Type(() => work_schedule_entriesWhereUniqueInput)
    where!: work_schedule_entriesWhereUniqueInput;

    @Field(() => work_schedule_entriesUpdateWithoutWork_schedule_entries_updated_byTousersInput, {nullable:false})
    @Type(() => work_schedule_entriesUpdateWithoutWork_schedule_entries_updated_byTousersInput)
    data!: work_schedule_entriesUpdateWithoutWork_schedule_entries_updated_byTousersInput;
}
