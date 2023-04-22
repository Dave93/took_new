import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { scheduled_reports_subscriptionCreateWithoutScheduled_reports_subscription_usersInput } from './scheduled-reports-subscription-create-without-scheduled-reports-subscription-users.input';
import { Type } from 'class-transformer';
import { scheduled_reports_subscriptionCreateOrConnectWithoutScheduled_reports_subscription_usersInput } from './scheduled-reports-subscription-create-or-connect-without-scheduled-reports-subscription-users.input';
import { scheduled_reports_subscriptionCreateManyScheduled_reports_subscription_usersInputEnvelope } from './scheduled-reports-subscription-create-many-scheduled-reports-subscription-users-input-envelope.input';
import { scheduled_reports_subscriptionWhereUniqueInput } from './scheduled-reports-subscription-where-unique.input';

@InputType()
export class scheduled_reports_subscriptionUncheckedCreateNestedManyWithoutScheduled_reports_subscription_usersInput {

    @Field(() => [scheduled_reports_subscriptionCreateWithoutScheduled_reports_subscription_usersInput], {nullable:true})
    @Type(() => scheduled_reports_subscriptionCreateWithoutScheduled_reports_subscription_usersInput)
    create?: Array<scheduled_reports_subscriptionCreateWithoutScheduled_reports_subscription_usersInput>;

    @Field(() => [scheduled_reports_subscriptionCreateOrConnectWithoutScheduled_reports_subscription_usersInput], {nullable:true})
    @Type(() => scheduled_reports_subscriptionCreateOrConnectWithoutScheduled_reports_subscription_usersInput)
    connectOrCreate?: Array<scheduled_reports_subscriptionCreateOrConnectWithoutScheduled_reports_subscription_usersInput>;

    @Field(() => scheduled_reports_subscriptionCreateManyScheduled_reports_subscription_usersInputEnvelope, {nullable:true})
    @Type(() => scheduled_reports_subscriptionCreateManyScheduled_reports_subscription_usersInputEnvelope)
    createMany?: scheduled_reports_subscriptionCreateManyScheduled_reports_subscription_usersInputEnvelope;

    @Field(() => [scheduled_reports_subscriptionWhereUniqueInput], {nullable:true})
    @Type(() => scheduled_reports_subscriptionWhereUniqueInput)
    connect?: Array<scheduled_reports_subscriptionWhereUniqueInput>;
}
