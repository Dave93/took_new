import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Work_schedulesCountAggregate } from './work-schedules-count-aggregate.output';
import { Work_schedulesMinAggregate } from './work-schedules-min-aggregate.output';
import { Work_schedulesMaxAggregate } from './work-schedules-max-aggregate.output';

@ObjectType()
export class AggregateWork_schedules {

    @Field(() => Work_schedulesCountAggregate, {nullable:true})
    _count?: Work_schedulesCountAggregate;

    @Field(() => Work_schedulesMinAggregate, {nullable:true})
    _min?: Work_schedulesMinAggregate;

    @Field(() => Work_schedulesMaxAggregate, {nullable:true})
    _max?: Work_schedulesMaxAggregate;
}
