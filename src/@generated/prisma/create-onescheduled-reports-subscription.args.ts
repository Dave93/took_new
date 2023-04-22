import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { scheduled_reports_subscriptionCreateInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnescheduledReportsSubscriptionArgs {

    @Field(() => scheduled_reports_subscriptionCreateInput, {nullable:false})
    @Type(() => scheduled_reports_subscriptionCreateInput)
    data!: scheduled_reports_subscriptionCreateInput;
}
