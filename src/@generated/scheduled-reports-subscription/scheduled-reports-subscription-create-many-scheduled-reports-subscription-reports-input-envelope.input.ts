import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { scheduled_reports_subscriptionCreateManyScheduled_reports_subscription_reportsInput } from './scheduled-reports-subscription-create-many-scheduled-reports-subscription-reports.input';
import { Type } from 'class-transformer';

@InputType()
export class scheduled_reports_subscriptionCreateManyScheduled_reports_subscription_reportsInputEnvelope {

    @Field(() => [scheduled_reports_subscriptionCreateManyScheduled_reports_subscription_reportsInput], {nullable:false})
    @Type(() => scheduled_reports_subscriptionCreateManyScheduled_reports_subscription_reportsInput)
    data!: Array<scheduled_reports_subscriptionCreateManyScheduled_reports_subscription_reportsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
