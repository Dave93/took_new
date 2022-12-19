import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AssetsCountAggregate } from './assets-count-aggregate.output';
import { AssetsMinAggregate } from './assets-min-aggregate.output';
import { AssetsMaxAggregate } from './assets-max-aggregate.output';

@ObjectType()
export class AggregateAssets {

    @Field(() => AssetsCountAggregate, {nullable:true})
    _count?: AssetsCountAggregate;

    @Field(() => AssetsMinAggregate, {nullable:true})
    _min?: AssetsMinAggregate;

    @Field(() => AssetsMaxAggregate, {nullable:true})
    _max?: AssetsMaxAggregate;
}
