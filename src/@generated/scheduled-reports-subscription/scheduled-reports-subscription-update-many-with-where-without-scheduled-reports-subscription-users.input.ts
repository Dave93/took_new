import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { scheduled_reports_subscriptionScalarWhereInput } from './scheduled-reports-subscription-scalar-where.input';
import { Type } from 'class-transformer';
import { scheduled_reports_subscriptionUpdateManyMutationInput } from './scheduled-reports-subscription-update-many-mutation.input';

@InputType()
export class scheduled_reports_subscriptionUpdateManyWithWhereWithoutScheduled_reports_subscription_usersInput {

    @Field(() => scheduled_reports_subscriptionScalarWhereInput, {nullable:false})
    @Type(() => scheduled_reports_subscriptionScalarWhereInput)
    where!: scheduled_reports_subscriptionScalarWhereInput;

    @Field(() => scheduled_reports_subscriptionUpdateManyMutationInput, {nullable:false})
    @Type(() => scheduled_reports_subscriptionUpdateManyMutationInput)
    data!: scheduled_reports_subscriptionUpdateManyMutationInput;
}
