import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Work_schedulesCountAggregate } from './work-schedules-count-aggregate.output';
import { Work_schedulesAvgAggregate } from './work-schedules-avg-aggregate.output';
import { Work_schedulesSumAggregate } from './work-schedules-sum-aggregate.output';
import { Work_schedulesMinAggregate } from './work-schedules-min-aggregate.output';
import { Work_schedulesMaxAggregate } from './work-schedules-max-aggregate.output';

@ObjectType()
export class AggregateWork_schedules {

    @Field(() => Work_schedulesCountAggregate, {nullable:true})
    _count?: Work_schedulesCountAggregate;

    @Field(() => Work_schedulesAvgAggregate, {nullable:true})
    _avg?: Work_schedulesAvgAggregate;

    @Field(() => Work_schedulesSumAggregate, {nullable:true})
    _sum?: Work_schedulesSumAggregate;

    @Field(() => Work_schedulesMinAggregate, {nullable:true})
    _min?: Work_schedulesMinAggregate;

    @Field(() => Work_schedulesMaxAggregate, {nullable:true})
    _max?: Work_schedulesMaxAggregate;
}
