import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { scheduled_reports_subscriptionCreateManyScheduled_reports_subscription_usersInput } from './scheduled-reports-subscription-create-many-scheduled-reports-subscription-users.input';
import { Type } from 'class-transformer';

@InputType()
export class scheduled_reports_subscriptionCreateManyScheduled_reports_subscription_usersInputEnvelope {

    @Field(() => [scheduled_reports_subscriptionCreateManyScheduled_reports_subscription_usersInput], {nullable:false})
    @Type(() => scheduled_reports_subscriptionCreateManyScheduled_reports_subscription_usersInput)
    data!: Array<scheduled_reports_subscriptionCreateManyScheduled_reports_subscription_usersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
