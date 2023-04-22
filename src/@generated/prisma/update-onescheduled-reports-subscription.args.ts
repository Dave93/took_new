import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { scheduled_reports_subscriptionUpdateInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-update.input';
import { Type } from 'class-transformer';
import { scheduled_reports_subscriptionWhereUniqueInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-where-unique.input';

@ArgsType()
export class UpdateOnescheduledReportsSubscriptionArgs {

    @Field(() => scheduled_reports_subscriptionUpdateInput, {nullable:false})
    @Type(() => scheduled_reports_subscriptionUpdateInput)
    data!: scheduled_reports_subscriptionUpdateInput;

    @Field(() => scheduled_reports_subscriptionWhereUniqueInput, {nullable:false})
    @Type(() => scheduled_reports_subscriptionWhereUniqueInput)
    where!: scheduled_reports_subscriptionWhereUniqueInput;
}
