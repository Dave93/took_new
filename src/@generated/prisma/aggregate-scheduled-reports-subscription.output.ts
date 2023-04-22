import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Scheduled_reports_subscriptionCountAggregate } from './scheduled-reports-subscription-count-aggregate.output';
import { Scheduled_reports_subscriptionMinAggregate } from './scheduled-reports-subscription-min-aggregate.output';
import { Scheduled_reports_subscriptionMaxAggregate } from './scheduled-reports-subscription-max-aggregate.output';

@ObjectType()
export class AggregateScheduled_reports_subscription {

    @Field(() => Scheduled_reports_subscriptionCountAggregate, {nullable:true})
    _count?: Scheduled_reports_subscriptionCountAggregate;

    @Field(() => Scheduled_reports_subscriptionMinAggregate, {nullable:true})
    _min?: Scheduled_reports_subscriptionMinAggregate;

    @Field(() => Scheduled_reports_subscriptionMaxAggregate, {nullable:true})
    _max?: Scheduled_reports_subscriptionMaxAggregate;
}
