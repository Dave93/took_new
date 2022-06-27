import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CityCountAggregate } from './city-count-aggregate.output';
import { CityMinAggregate } from './city-min-aggregate.output';
import { CityMaxAggregate } from './city-max-aggregate.output';

@ObjectType()
export class CityGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    parent_id?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => CityCountAggregate, {nullable:true})
    _count?: CityCountAggregate;

    @Field(() => CityMinAggregate, {nullable:true})
    _min?: CityMinAggregate;

    @Field(() => CityMaxAggregate, {nullable:true})
    _max?: CityMaxAggregate;
}
