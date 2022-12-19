import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BrandsCountAggregate } from './brands-count-aggregate.output';
import { BrandsMinAggregate } from './brands-min-aggregate.output';
import { BrandsMaxAggregate } from './brands-max-aggregate.output';

@ObjectType()
export class BrandsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    api_url!: string;

    @Field(() => String, {nullable:true})
    logo_path?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => BrandsCountAggregate, {nullable:true})
    _count?: BrandsCountAggregate;

    @Field(() => BrandsMinAggregate, {nullable:true})
    _min?: BrandsMinAggregate;

    @Field(() => BrandsMaxAggregate, {nullable:true})
    _max?: BrandsMaxAggregate;
}
