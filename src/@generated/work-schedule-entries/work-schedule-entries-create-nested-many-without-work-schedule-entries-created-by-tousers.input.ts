import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedule_entriesCreateWithoutWork_schedule_entries_created_byTousersInput } from './work-schedule-entries-create-without-work-schedule-entries-created-by-tousers.input';
import { Type } from 'class-transformer';
import { work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_created_byTousersInput } from './work-schedule-entries-create-or-connect-without-work-schedule-entries-created-by-tousers.input';
import { work_schedule_entriesCreateManyWork_schedule_entries_created_byTousersInputEnvelope } from './work-schedule-entries-create-many-work-schedule-entries-created-by-tousers-input-envelope.input';
import { work_schedule_entriesWhereUniqueInput } from './work-schedule-entries-where-unique.input';

@InputType()
export class work_schedule_entriesCreateNestedManyWithoutWork_schedule_entries_created_byTousersInput {

    @Field(() => [work_schedule_entriesCreateWithoutWork_schedule_entries_created_byTousersInput], {nullable:true})
    @Type(() => work_schedule_entriesCreateWithoutWork_schedule_entries_created_byTousersInput)
    create?: Array<work_schedule_entriesCreateWithoutWork_schedule_entries_created_byTousersInput>;

    @Field(() => [work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_created_byTousersInput], {nullable:true})
    @Type(() => work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_created_byTousersInput)
    connectOrCreate?: Array<work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_created_byTousersInput>;

    @Field(() => work_schedule_entriesCreateManyWork_schedule_entries_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => work_schedule_entriesCreateManyWork_schedule_entries_created_byTousersInputEnvelope)
    createMany?: work_schedule_entriesCreateManyWork_schedule_entries_created_byTousersInputEnvelope;

    @Field(() => [work_schedule_entriesWhereUniqueInput], {nullable:true})
    @Type(() => work_schedule_entriesWhereUniqueInput)
    connect?: Array<work_schedule_entriesWhereUniqueInput>;
}
