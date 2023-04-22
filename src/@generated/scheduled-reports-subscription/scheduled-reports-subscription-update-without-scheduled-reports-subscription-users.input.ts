import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { scheduled_reportsUpdateOneRequiredWithoutScheduled_reports_scheduled_reports_subscriptionsNestedInput } from '../scheduled-reports/scheduled-reports-update-one-required-without-scheduled-reports-scheduled-reports-subscriptions-nested.input';

@InputType()
export class scheduled_reports_subscriptionUpdateWithoutScheduled_reports_subscription_usersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => scheduled_reportsUpdateOneRequiredWithoutScheduled_reports_scheduled_reports_subscriptionsNestedInput, {nullable:true})
    scheduled_reports_subscription_reports?: scheduled_reportsUpdateOneRequiredWithoutScheduled_reports_scheduled_reports_subscriptionsNestedInput;
}
