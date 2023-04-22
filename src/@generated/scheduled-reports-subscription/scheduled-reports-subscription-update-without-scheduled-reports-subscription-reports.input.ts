import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneRequiredWithoutScheduled_reports_subscription_usersNestedInput } from '../users/users-update-one-required-without-scheduled-reports-subscription-users-nested.input';

@InputType()
export class scheduled_reports_subscriptionUpdateWithoutScheduled_reports_subscription_reportsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersUpdateOneRequiredWithoutScheduled_reports_subscription_usersNestedInput, {nullable:true})
    scheduled_reports_subscription_users?: usersUpdateOneRequiredWithoutScheduled_reports_subscription_usersNestedInput;
}
