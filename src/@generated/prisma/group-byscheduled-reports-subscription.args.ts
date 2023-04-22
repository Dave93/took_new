import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { scheduled_reports_subscriptionWhereInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-where.input';
import { Type } from 'class-transformer';
import { scheduled_reports_subscriptionOrderByWithAggregationInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-order-by-with-aggregation.input';
import { Scheduled_reports_subscriptionScalarFieldEnum } from './scheduled-reports-subscription-scalar-field.enum';
import { scheduled_reports_subscriptionScalarWhereWithAggregatesInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByscheduledReportsSubscriptionArgs {

    @Field(() => scheduled_reports_subscriptionWhereInput, {nullable:true})
    @Type(() => scheduled_reports_subscriptionWhereInput)
    where?: scheduled_reports_subscriptionWhereInput;

    @Field(() => [scheduled_reports_subscriptionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<scheduled_reports_subscriptionOrderByWithAggregationInput>;

    @Field(() => [Scheduled_reports_subscriptionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Scheduled_reports_subscriptionScalarFieldEnum>;

    @Field(() => scheduled_reports_subscriptionScalarWhereWithAggregatesInput, {nullable:true})
    having?: scheduled_reports_subscriptionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
