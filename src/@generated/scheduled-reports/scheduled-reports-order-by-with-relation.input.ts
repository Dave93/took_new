import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { scheduled_reports_subscriptionOrderByRelationAggregateInput } from '../scheduled-reports-subscription/scheduled-reports-subscription-order-by-relation-aggregate.input';

@InputType()
export class scheduled_reportsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cron?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => scheduled_reports_subscriptionOrderByRelationAggregateInput, {nullable:true})
    scheduled_reports_scheduled_reports_subscriptions?: scheduled_reports_subscriptionOrderByRelationAggregateInput;
}
