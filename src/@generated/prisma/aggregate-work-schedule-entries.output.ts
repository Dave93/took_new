import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Work_schedule_entriesCountAggregate } from './work-schedule-entries-count-aggregate.output';
import { Work_schedule_entriesAvgAggregate } from './work-schedule-entries-avg-aggregate.output';
import { Work_schedule_entriesSumAggregate } from './work-schedule-entries-sum-aggregate.output';
import { Work_schedule_entriesMinAggregate } from './work-schedule-entries-min-aggregate.output';
import { Work_schedule_entriesMaxAggregate } from './work-schedule-entries-max-aggregate.output';

@ObjectType()
export class AggregateWork_schedule_entries {

    @Field(() => Work_schedule_entriesCountAggregate, {nullable:true})
    _count?: Work_schedule_entriesCountAggregate;

    @Field(() => Work_schedule_entriesAvgAggregate, {nullable:true})
    _avg?: Work_schedule_entriesAvgAggregate;

    @Field(() => Work_schedule_entriesSumAggregate, {nullable:true})
    _sum?: Work_schedule_entriesSumAggregate;

    @Field(() => Work_schedule_entriesMinAggregate, {nullable:true})
    _min?: Work_schedule_entriesMinAggregate;

    @Field(() => Work_schedule_entriesMaxAggregate, {nullable:true})
    _max?: Work_schedule_entriesMaxAggregate;
}
