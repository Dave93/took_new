import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedule_entriesCreateWithoutWork_schedule_entries_usersInput } from './work-schedule-entries-create-without-work-schedule-entries-users.input';
import { Type } from 'class-transformer';
import { work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_usersInput } from './work-schedule-entries-create-or-connect-without-work-schedule-entries-users.input';
import { work_schedule_entriesCreateManyWork_schedule_entries_usersInputEnvelope } from './work-schedule-entries-create-many-work-schedule-entries-users-input-envelope.input';
import { work_schedule_entriesWhereUniqueInput } from './work-schedule-entries-where-unique.input';

@InputType()
export class work_schedule_entriesUncheckedCreateNestedManyWithoutWork_schedule_entries_usersInput {

    @Field(() => [work_schedule_entriesCreateWithoutWork_schedule_entries_usersInput], {nullable:true})
    @Type(() => work_schedule_entriesCreateWithoutWork_schedule_entries_usersInput)
    create?: Array<work_schedule_entriesCreateWithoutWork_schedule_entries_usersInput>;

    @Field(() => [work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_usersInput], {nullable:true})
    @Type(() => work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_usersInput)
    connectOrCreate?: Array<work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_usersInput>;

    @Field(() => work_schedule_entriesCreateManyWork_schedule_entries_usersInputEnvelope, {nullable:true})
    @Type(() => work_schedule_entriesCreateManyWork_schedule_entries_usersInputEnvelope)
    createMany?: work_schedule_entriesCreateManyWork_schedule_entries_usersInputEnvelope;

    @Field(() => [work_schedule_entriesWhereUniqueInput], {nullable:true})
    @Type(() => work_schedule_entriesWhereUniqueInput)
    connect?: Array<work_schedule_entriesWhereUniqueInput>;
}
