import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutScheduled_reports_subscription_usersInput } from '../users/users-create-nested-one-without-scheduled-reports-subscription-users.input';

@InputType()
export class scheduled_reports_subscriptionCreateWithoutScheduled_reports_subscription_reportsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutScheduled_reports_subscription_usersInput, {nullable:false})
    scheduled_reports_subscription_users!: usersCreateNestedOneWithoutScheduled_reports_subscription_usersInput;
}
