import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { work_schedule_entriesWhereInput } from '../work-schedule-entries/work-schedule-entries-where.input';

@InputType()
export class Work_schedule_entriesListRelationFilter {

    @Field(() => work_schedule_entriesWhereInput, {nullable:true})
    every?: work_schedule_entriesWhereInput;

    @Field(() => work_schedule_entriesWhereInput, {nullable:true})
    some?: work_schedule_entriesWhereInput;

    @Field(() => work_schedule_entriesWhereInput, {nullable:true})
    none?: work_schedule_entriesWhereInput;
}
