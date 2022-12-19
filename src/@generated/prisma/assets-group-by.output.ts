import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AssetsCountAggregate } from './assets-count-aggregate.output';
import { AssetsMinAggregate } from './assets-min-aggregate.output';
import { AssetsMaxAggregate } from './assets-max-aggregate.output';

@ObjectType()
export class AssetsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    model!: string;

    @Field(() => String, {nullable:false})
    file_name!: string;

    @Field(() => String, {nullable:true})
    model_id?: string;

    @Field(() => String, {nullable:false})
    sub_folder!: string;

    @Field(() => AssetsCountAggregate, {nullable:true})
    _count?: AssetsCountAggregate;

    @Field(() => AssetsMinAggregate, {nullable:true})
    _min?: AssetsMinAggregate;

    @Field(() => AssetsMaxAggregate, {nullable:true})
    _max?: AssetsMaxAggregate;
}
