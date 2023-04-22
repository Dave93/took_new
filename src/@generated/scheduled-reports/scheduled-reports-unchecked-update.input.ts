import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { scheduled_reports_subscriptionUncheckedUpdateManyWithoutScheduled_reports_subscription_reportsNestedInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-unchecked-update-many-without-scheduled-reports-subscription-reports-nested.input';

@InputType()
export class scheduled_reportsUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => String, {nullable:true})
    cron?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => scheduled_reports_subscriptionUncheckedUpdateManyWithoutScheduled_reports_subscription_reportsNestedInput, {nullable:true})
    scheduled_reports_scheduled_reports_subscriptions?: scheduled_reports_subscriptionUncheckedUpdateManyWithoutScheduled_reports_subscription_reportsNestedInput;
}
