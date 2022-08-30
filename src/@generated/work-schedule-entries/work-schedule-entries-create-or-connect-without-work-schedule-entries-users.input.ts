import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedule_entriesWhereUniqueInput } from './work-schedule-entries-where-unique.input';
import { Type } from 'class-transformer';
import { work_schedule_entriesCreateWithoutWork_schedule_entries_usersInput } from './work-schedule-entries-create-without-work-schedule-entries-users.input';

@InputType()
export class work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_usersInput {

    @Field(() => work_schedule_entriesWhereUniqueInput, {nullable:false})
    @Type(() => work_schedule_entriesWhereUniqueInput)
    where!: work_schedule_entriesWhereUniqueInput;

    @Field(() => work_schedule_entriesCreateWithoutWork_schedule_entries_usersInput, {nullable:false})
    @Type(() => work_schedule_entriesCreateWithoutWork_schedule_entries_usersInput)
    create!: work_schedule_entriesCreateWithoutWork_schedule_entries_usersInput;
}
