import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { scheduled_reports_subscriptionCreateNestedManyWithoutScheduled_reports_subscription_reportsInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-create-nested-many-without-scheduled-reports-subscription-reports.input';

@InputType()
export class scheduled_reportsCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    cron!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => scheduled_reports_subscriptionCreateNestedManyWithoutScheduled_reports_subscription_reportsInput, {nullable:true})
    scheduled_reports_scheduled_reports_subscriptions?: scheduled_reports_subscriptionCreateNestedManyWithoutScheduled_reports_subscription_reportsInput;
}
