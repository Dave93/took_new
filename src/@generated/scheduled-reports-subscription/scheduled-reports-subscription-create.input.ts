import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { scheduled_reportsCreateNestedOneWithoutScheduled_reports_scheduled_reports_subscriptionsInput } from '../scheduled-reports/scheduled-reports-create-nested-one-without-scheduled-reports-scheduled-reports-subscriptions.input';
import { usersCreateNestedOneWithoutScheduled_reports_subscription_usersInput } from '../users/users-create-nested-one-without-scheduled-reports-subscription-users.input';

@InputType()
export class scheduled_reports_subscriptionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => scheduled_reportsCreateNestedOneWithoutScheduled_reports_scheduled_reports_subscriptionsInput, {nullable:false})
    scheduled_reports_subscription_reports!: scheduled_reportsCreateNestedOneWithoutScheduled_reports_scheduled_reports_subscriptionsInput;

    @Field(() => usersCreateNestedOneWithoutScheduled_reports_subscription_usersInput, {nullable:false})
    scheduled_reports_subscription_users!: usersCreateNestedOneWithoutScheduled_reports_subscription_usersInput;
}
