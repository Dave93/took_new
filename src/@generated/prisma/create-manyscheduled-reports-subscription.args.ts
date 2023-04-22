import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { scheduled_reports_subscriptionCreateManyInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyscheduledReportsSubscriptionArgs {

    @Field(() => [scheduled_reports_subscriptionCreateManyInput], {nullable:false})
    @Type(() => scheduled_reports_subscriptionCreateManyInput)
    data!: Array<scheduled_reports_subscriptionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
