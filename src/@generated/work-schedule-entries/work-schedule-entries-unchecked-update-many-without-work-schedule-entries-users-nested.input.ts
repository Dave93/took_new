import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedule_entriesCreateWithoutWork_schedule_entries_usersInput } from './work-schedule-entries-create-without-work-schedule-entries-users.input';
import { Type } from 'class-transformer';
import { work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_usersInput } from './work-schedule-entries-create-or-connect-without-work-schedule-entries-users.input';
import { work_schedule_entriesUpsertWithWhereUniqueWithoutWork_schedule_entries_usersInput } from './work-schedule-entries-upsert-with-where-unique-without-work-schedule-entries-users.input';
import { work_schedule_entriesCreateManyWork_schedule_entries_usersInputEnvelope } from './work-schedule-entries-create-many-work-schedule-entries-users-input-envelope.input';
import { work_schedule_entriesWhereUniqueInput } from './work-schedule-entries-where-unique.input';
import { work_schedule_entriesUpdateWithWhereUniqueWithoutWork_schedule_entries_usersInput } from './work-schedule-entries-update-with-where-unique-without-work-schedule-entries-users.input';
import { work_schedule_entriesUpdateManyWithWhereWithoutWork_schedule_entries_usersInput } from './work-schedule-entries-update-many-with-where-without-work-schedule-entries-users.input';
import { work_schedule_entriesScalarWhereInput } from './work-schedule-entries-scalar-where.input';

@InputType()
export class work_schedule_entriesUncheckedUpdateManyWithoutWork_schedule_entries_usersNestedInput {

    @Field(() => [work_schedule_entriesCreateWithoutWork_schedule_entries_usersInput], {nullable:true})
    @Type(() => work_schedule_entriesCreateWithoutWork_schedule_entries_usersInput)
    create?: Array<work_schedule_entriesCreateWithoutWork_schedule_entries_usersInput>;

    @Field(() => [work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_usersInput], {nullable:true})
    @Type(() => work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_usersInput)
    connectOrCreate?: Array<work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_usersInput>;

    @Field(() => [work_schedule_entriesUpsertWithWhereUniqueWithoutWork_schedule_entries_usersInput], {nullable:true})
    @Type(() => work_schedule_entriesUpsertWithWhereUniqueWithoutWork_schedule_entries_usersInput)
    upsert?: Array<work_schedule_entriesUpsertWithWhereUniqueWithoutWork_schedule_entries_usersInput>;

    @Field(() => work_schedule_entriesCreateManyWork_schedule_entries_usersInputEnvelope, {nullable:true})
    @Type(() => work_schedule_entriesCreateManyWork_schedule_entries_usersInputEnvelope)
    createMany?: work_schedule_entriesCreateManyWork_schedule_entries_usersInputEnvelope;

    @Field(() => [work_schedule_entriesWhereUniqueInput], {nullable:true})
    @Type(() => work_schedule_entriesWhereUniqueInput)
    set?: Array<work_schedule_entriesWhereUniqueInput>;

    @Field(() => [work_schedule_entriesWhereUniqueInput], {nullable:true})
    @Type(() => work_schedule_entriesWhereUniqueInput)
    disconnect?: Array<work_schedule_entriesWhereUniqueInput>;

    @Field(() => [work_schedule_entriesWhereUniqueInput], {nullable:true})
    @Type(() => work_schedule_entriesWhereUniqueInput)
    delete?: Array<work_schedule_entriesWhereUniqueInput>;

    @Field(() => [work_schedule_entriesWhereUniqueInput], {nullable:true})
    @Type(() => work_schedule_entriesWhereUniqueInput)
    connect?: Array<work_schedule_entriesWhereUniqueInput>;

    @Field(() => [work_schedule_entriesUpdateWithWhereUniqueWithoutWork_schedule_entries_usersInput], {nullable:true})
    @Type(() => work_schedule_entriesUpdateWithWhereUniqueWithoutWork_schedule_entries_usersInput)
    update?: Array<work_schedule_entriesUpdateWithWhereUniqueWithoutWork_schedule_entries_usersInput>;

    @Field(() => [work_schedule_entriesUpdateManyWithWhereWithoutWork_schedule_entries_usersInput], {nullable:true})
    @Type(() => work_schedule_entriesUpdateManyWithWhereWithoutWork_schedule_entries_usersInput)
    updateMany?: Array<work_schedule_entriesUpdateManyWithWhereWithoutWork_schedule_entries_usersInput>;

    @Field(() => [work_schedule_entriesScalarWhereInput], {nullable:true})
    @Type(() => work_schedule_entriesScalarWhereInput)
    deleteMany?: Array<work_schedule_entriesScalarWhereInput>;
}
