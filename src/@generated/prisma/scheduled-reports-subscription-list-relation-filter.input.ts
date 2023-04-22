import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { scheduled_reports_subscriptionWhereInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-where.input';

@InputType()
export class Scheduled_reports_subscriptionListRelationFilter {

    @Field(() => scheduled_reports_subscriptionWhereInput, {nullable:true})
    every?: scheduled_reports_subscriptionWhereInput;

    @Field(() => scheduled_reports_subscriptionWhereInput, {nullable:true})
    some?: scheduled_reports_subscriptionWhereInput;

    @Field(() => scheduled_reports_subscriptionWhereInput, {nullable:true})
    none?: scheduled_reports_subscriptionWhereInput;
}
