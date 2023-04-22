import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { scheduled_reports_subscriptionWhereUniqueInput } from './scheduled-reports-subscription-where-unique.input';
import { Type } from 'class-transformer';
import { scheduled_reports_subscriptionUpdateWithoutScheduled_reports_subscription_usersInput } from './scheduled-reports-subscription-update-without-scheduled-reports-subscription-users.input';

@InputType()
export class scheduled_reports_subscriptionUpdateWithWhereUniqueWithoutScheduled_reports_subscription_usersInput {

    @Field(() => scheduled_reports_subscriptionWhereUniqueInput, {nullable:false})
    @Type(() => scheduled_reports_subscriptionWhereUniqueInput)
    where!: scheduled_reports_subscriptionWhereUniqueInput;

    @Field(() => scheduled_reports_subscriptionUpdateWithoutScheduled_reports_subscription_usersInput, {nullable:false})
    @Type(() => scheduled_reports_subscriptionUpdateWithoutScheduled_reports_subscription_usersInput)
    data!: scheduled_reports_subscriptionUpdateWithoutScheduled_reports_subscription_usersInput;
}
