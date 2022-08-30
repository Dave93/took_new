import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { work_schedule_entriesWhereInput } from '../work-schedule-entries/work-schedule-entries-where.input';
import { Type } from 'class-transformer';
import { work_schedule_entriesOrderByWithRelationInput } from '../work-schedule-entries/work-schedule-entries-order-by-with-relation.input';
import { work_schedule_entriesWhereUniqueInput } from '../work-schedule-entries/work-schedule-entries-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Work_schedule_entriesScalarFieldEnum } from './work-schedule-entries-scalar-field.enum';

@ArgsType()
export class FindManyworkScheduleEntriesArgs {

    @Field(() => work_schedule_entriesWhereInput, {nullable:true})
    @Type(() => work_schedule_entriesWhereInput)
    where?: work_schedule_entriesWhereInput;

    @Field(() => [work_schedule_entriesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<work_schedule_entriesOrderByWithRelationInput>;

    @Field(() => work_schedule_entriesWhereUniqueInput, {nullable:true})
    cursor?: work_schedule_entriesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Work_schedule_entriesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Work_schedule_entriesScalarFieldEnum>;
}
