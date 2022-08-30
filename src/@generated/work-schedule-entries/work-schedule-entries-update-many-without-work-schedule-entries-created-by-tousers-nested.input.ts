import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedule_entriesCreateWithoutWork_schedule_entries_created_byTousersInput } from './work-schedule-entries-create-without-work-schedule-entries-created-by-tousers.input';
import { Type } from 'class-transformer';
import { work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_created_byTousersInput } from './work-schedule-entries-create-or-connect-without-work-schedule-entries-created-by-tousers.input';
import { work_schedule_entriesUpsertWithWhereUniqueWithoutWork_schedule_entries_created_byTousersInput } from './work-schedule-entries-upsert-with-where-unique-without-work-schedule-entries-created-by-tousers.input';
import { work_schedule_entriesCreateManyWork_schedule_entries_created_byTousersInputEnvelope } from './work-schedule-entries-create-many-work-schedule-entries-created-by-tousers-input-envelope.input';
import { work_schedule_entriesWhereUniqueInput } from './work-schedule-entries-where-unique.input';
import { work_schedule_entriesUpdateWithWhereUniqueWithoutWork_schedule_entries_created_byTousersInput } from './work-schedule-entries-update-with-where-unique-without-work-schedule-entries-created-by-tousers.input';
import { work_schedule_entriesUpdateManyWithWhereWithoutWork_schedule_entries_created_byTousersInput } from './work-schedule-entries-update-many-with-where-without-work-schedule-entries-created-by-tousers.input';
import { work_schedule_entriesScalarWhereInput } from './work-schedule-entries-scalar-where.input';

@InputType()
export class work_schedule_entriesUpdateManyWithoutWork_schedule_entries_created_byTousersNestedInput {

    @Field(() => [work_schedule_entriesCreateWithoutWork_schedule_entries_created_byTousersInput], {nullable:true})
    @Type(() => work_schedule_entriesCreateWithoutWork_schedule_entries_created_byTousersInput)
    create?: Array<work_schedule_entriesCreateWithoutWork_schedule_entries_created_byTousersInput>;

    @Field(() => [work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_created_byTousersInput], {nullable:true})
    @Type(() => work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_created_byTousersInput)
    connectOrCreate?: Array<work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_created_byTousersInput>;

    @Field(() => [work_schedule_entriesUpsertWithWhereUniqueWithoutWork_schedule_entries_created_byTousersInput], {nullable:true})
    @Type(() => work_schedule_entriesUpsertWithWhereUniqueWithoutWork_schedule_entries_created_byTousersInput)
    upsert?: Array<work_schedule_entriesUpsertWithWhereUniqueWithoutWork_schedule_entries_created_byTousersInput>;

    @Field(() => work_schedule_entriesCreateManyWork_schedule_entries_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => work_schedule_entriesCreateManyWork_schedule_entries_created_byTousersInputEnvelope)
    createMany?: work_schedule_entriesCreateManyWork_schedule_entries_created_byTousersInputEnvelope;

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

    @Field(() => [work_schedule_entriesUpdateWithWhereUniqueWithoutWork_schedule_entries_created_byTousersInput], {nullable:true})
    @Type(() => work_schedule_entriesUpdateWithWhereUniqueWithoutWork_schedule_entries_created_byTousersInput)
    update?: Array<work_schedule_entriesUpdateWithWhereUniqueWithoutWork_schedule_entries_created_byTousersInput>;

    @Field(() => [work_schedule_entriesUpdateManyWithWhereWithoutWork_schedule_entries_created_byTousersInput], {nullable:true})
    @Type(() => work_schedule_entriesUpdateManyWithWhereWithoutWork_schedule_entries_created_byTousersInput)
    updateMany?: Array<work_schedule_entriesUpdateManyWithWhereWithoutWork_schedule_entries_created_byTousersInput>;

    @Field(() => [work_schedule_entriesScalarWhereInput], {nullable:true})
    @Type(() => work_schedule_entriesScalarWhereInput)
    deleteMany?: Array<work_schedule_entriesScalarWhereInput>;
}
