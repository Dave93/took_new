import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Outside_requestsCountAggregate } from './outside-requests-count-aggregate.output';
import { Outside_requestsMinAggregate } from './outside-requests-min-aggregate.output';
import { Outside_requestsMaxAggregate } from './outside-requests-max-aggregate.output';

@ObjectType()
export class AggregateOutside_requests {

    @Field(() => Outside_requestsCountAggregate, {nullable:true})
    _count?: Outside_requestsCountAggregate;

    @Field(() => Outside_requestsMinAggregate, {nullable:true})
    _min?: Outside_requestsMinAggregate;

    @Field(() => Outside_requestsMaxAggregate, {nullable:true})
    _max?: Outside_requestsMaxAggregate;
}
