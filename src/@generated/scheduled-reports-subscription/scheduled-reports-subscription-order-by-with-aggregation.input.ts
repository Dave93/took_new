import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { scheduled_reports_subscriptionCountOrderByAggregateInput } from './scheduled-reports-subscription-count-order-by-aggregate.input';
import { scheduled_reports_subscriptionMaxOrderByAggregateInput } from './scheduled-reports-subscription-max-order-by-aggregate.input';
import { scheduled_reports_subscriptionMinOrderByAggregateInput } from './scheduled-reports-subscription-min-order-by-aggregate.input';

@InputType()
export class scheduled_reports_subscriptionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    report_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => scheduled_reports_subscriptionCountOrderByAggregateInput, {nullable:true})
    _count?: scheduled_reports_subscriptionCountOrderByAggregateInput;

    @Field(() => scheduled_reports_subscriptionMaxOrderByAggregateInput, {nullable:true})
    _max?: scheduled_reports_subscriptionMaxOrderByAggregateInput;

    @Field(() => scheduled_reports_subscriptionMinOrderByAggregateInput, {nullable:true})
    _min?: scheduled_reports_subscriptionMinOrderByAggregateInput;
}
