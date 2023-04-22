import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { scheduled_reports_subscriptionWhereInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyscheduledReportsSubscriptionArgs {

    @Field(() => scheduled_reports_subscriptionWhereInput, {nullable:true})
    @Type(() => scheduled_reports_subscriptionWhereInput)
    where?: scheduled_reports_subscriptionWhereInput;
}
