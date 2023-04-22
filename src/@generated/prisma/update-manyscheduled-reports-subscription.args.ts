import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { scheduled_reports_subscriptionUpdateManyMutationInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-update-many-mutation.input';
import { Type } from 'class-transformer';
import { scheduled_reports_subscriptionWhereInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-where.input';

@ArgsType()
export class UpdateManyscheduledReportsSubscriptionArgs {

    @Field(() => scheduled_reports_subscriptionUpdateManyMutationInput, {nullable:false})
    @Type(() => scheduled_reports_subscriptionUpdateManyMutationInput)
    data!: scheduled_reports_subscriptionUpdateManyMutationInput;

    @Field(() => scheduled_reports_subscriptionWhereInput, {nullable:true})
    @Type(() => scheduled_reports_subscriptionWhereInput)
    where?: scheduled_reports_subscriptionWhereInput;
}
