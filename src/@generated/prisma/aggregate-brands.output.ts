import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BrandsCountAggregate } from './brands-count-aggregate.output';
import { BrandsMinAggregate } from './brands-min-aggregate.output';
import { BrandsMaxAggregate } from './brands-max-aggregate.output';

@ObjectType()
export class AggregateBrands {

    @Field(() => BrandsCountAggregate, {nullable:true})
    _count?: BrandsCountAggregate;

    @Field(() => BrandsMinAggregate, {nullable:true})
    _min?: BrandsMinAggregate;

    @Field(() => BrandsMaxAggregate, {nullable:true})
    _max?: BrandsMaxAggregate;
}
