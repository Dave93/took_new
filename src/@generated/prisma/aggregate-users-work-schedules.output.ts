import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Users_work_schedulesCountAggregate } from './users-work-schedules-count-aggregate.output';
import { Users_work_schedulesMinAggregate } from './users-work-schedules-min-aggregate.output';
import { Users_work_schedulesMaxAggregate } from './users-work-schedules-max-aggregate.output';

@ObjectType()
export class AggregateUsers_work_schedules {

    @Field(() => Users_work_schedulesCountAggregate, {nullable:true})
    _count?: Users_work_schedulesCountAggregate;

    @Field(() => Users_work_schedulesMinAggregate, {nullable:true})
    _min?: Users_work_schedulesMinAggregate;

    @Field(() => Users_work_schedulesMaxAggregate, {nullable:true})
    _max?: Users_work_schedulesMaxAggregate;
}
