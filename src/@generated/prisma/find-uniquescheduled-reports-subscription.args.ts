import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { scheduled_reports_subscriptionWhereUniqueInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquescheduledReportsSubscriptionArgs {

    @Field(() => scheduled_reports_subscriptionWhereUniqueInput, {nullable:false})
    @Type(() => scheduled_reports_subscriptionWhereUniqueInput)
    where!: scheduled_reports_subscriptionWhereUniqueInput;
}
