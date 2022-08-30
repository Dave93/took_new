import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedule_entriesCreateWithoutWork_schedule_entries_updated_byTousersInput } from './work-schedule-entries-create-without-work-schedule-entries-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_updated_byTousersInput } from './work-schedule-entries-create-or-connect-without-work-schedule-entries-updated-by-tousers.input';
import { work_schedule_entriesCreateManyWork_schedule_entries_updated_byTousersInputEnvelope } from './work-schedule-entries-create-many-work-schedule-entries-updated-by-tousers-input-envelope.input';
import { work_schedule_entriesWhereUniqueInput } from './work-schedule-entries-where-unique.input';

@InputType()
export class work_schedule_entriesUncheckedCreateNestedManyWithoutWork_schedule_entries_updated_byTousersInput {

    @Field(() => [work_schedule_entriesCreateWithoutWork_schedule_entries_updated_byTousersInput], {nullable:true})
    @Type(() => work_schedule_entriesCreateWithoutWork_schedule_entries_updated_byTousersInput)
    create?: Array<work_schedule_entriesCreateWithoutWork_schedule_entries_updated_byTousersInput>;

    @Field(() => [work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_updated_byTousersInput], {nullable:true})
    @Type(() => work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_updated_byTousersInput)
    connectOrCreate?: Array<work_schedule_entriesCreateOrConnectWithoutWork_schedule_entries_updated_byTousersInput>;

    @Field(() => work_schedule_entriesCreateManyWork_schedule_entries_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => work_schedule_entriesCreateManyWork_schedule_entries_updated_byTousersInputEnvelope)
    createMany?: work_schedule_entriesCreateManyWork_schedule_entries_updated_byTousersInputEnvelope;

    @Field(() => [work_schedule_entriesWhereUniqueInput], {nullable:true})
    @Type(() => work_schedule_entriesWhereUniqueInput)
    connect?: Array<work_schedule_entriesWhereUniqueInput>;
}
