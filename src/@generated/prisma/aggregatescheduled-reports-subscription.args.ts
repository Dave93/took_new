import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { scheduled_reports_subscriptionWhereInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-where.input';
import { Type } from 'class-transformer';
import { scheduled_reports_subscriptionOrderByWithRelationInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-order-by-with-relation.input';
import { scheduled_reports_subscriptionWhereUniqueInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatescheduledReportsSubscriptionArgs {

    @Field(() => scheduled_reports_subscriptionWhereInput, {nullable:true})
    @Type(() => scheduled_reports_subscriptionWhereInput)
    where?: scheduled_reports_subscriptionWhereInput;

    @Field(() => [scheduled_reports_subscriptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<scheduled_reports_subscriptionOrderByWithRelationInput>;

    @Field(() => scheduled_reports_subscriptionWhereUniqueInput, {nullable:true})
    cursor?: scheduled_reports_subscriptionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
