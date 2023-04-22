import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { scheduled_reportsWhereInput } from '../scheduled-reports/scheduled-reports-where.input';
import { Type } from 'class-transformer';
import { scheduled_reportsOrderByWithAggregationInput } from '../scheduled-reports/scheduled-reports-order-by-with-aggregation.input';
import { Scheduled_reportsScalarFieldEnum } from './scheduled-reports-scalar-field.enum';
import { scheduled_reportsScalarWhereWithAggregatesInput } from '../scheduled-reports/scheduled-reports-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByscheduledReportsArgs {

    @Field(() => scheduled_reportsWhereInput, {nullable:true})
    @Type(() => scheduled_reportsWhereInput)
    where?: scheduled_reportsWhereInput;

    @Field(() => [scheduled_reportsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<scheduled_reportsOrderByWithAggregationInput>;

    @Field(() => [Scheduled_reportsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Scheduled_reportsScalarFieldEnum>;

    @Field(() => scheduled_reportsScalarWhereWithAggregatesInput, {nullable:true})
    having?: scheduled_reportsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
