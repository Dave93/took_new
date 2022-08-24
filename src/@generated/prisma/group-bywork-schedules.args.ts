import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { work_schedulesWhereInput } from '../work-schedules/work-schedules-where.input';
import { Type } from 'class-transformer';
import { work_schedulesOrderByWithAggregationInput } from '../work-schedules/work-schedules-order-by-with-aggregation.input';
import { Work_schedulesScalarFieldEnum } from './work-schedules-scalar-field.enum';
import { work_schedulesScalarWhereWithAggregatesInput } from '../work-schedules/work-schedules-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByworkSchedulesArgs {

    @Field(() => work_schedulesWhereInput, {nullable:true})
    @Type(() => work_schedulesWhereInput)
    where?: work_schedulesWhereInput;

    @Field(() => [work_schedulesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<work_schedulesOrderByWithAggregationInput>;

    @Field(() => [Work_schedulesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Work_schedulesScalarFieldEnum>;

    @Field(() => work_schedulesScalarWhereWithAggregatesInput, {nullable:true})
    having?: work_schedulesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
