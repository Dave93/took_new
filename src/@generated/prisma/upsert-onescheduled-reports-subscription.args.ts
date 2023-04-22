import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { scheduled_reports_subscriptionWhereUniqueInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-where-unique.input';
import { Type } from 'class-transformer';
import { scheduled_reports_subscriptionCreateInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-create.input';
import { scheduled_reports_subscriptionUpdateInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-update.input';

@ArgsType()
export class UpsertOnescheduledReportsSubscriptionArgs {

    @Field(() => scheduled_reports_subscriptionWhereUniqueInput, {nullable:false})
    @Type(() => scheduled_reports_subscriptionWhereUniqueInput)
    where!: scheduled_reports_subscriptionWhereUniqueInput;

    @Field(() => scheduled_reports_subscriptionCreateInput, {nullable:false})
    @Type(() => scheduled_reports_subscriptionCreateInput)
    create!: scheduled_reports_subscriptionCreateInput;

    @Field(() => scheduled_reports_subscriptionUpdateInput, {nullable:false})
    @Type(() => scheduled_reports_subscriptionUpdateInput)
    update!: scheduled_reports_subscriptionUpdateInput;
}
