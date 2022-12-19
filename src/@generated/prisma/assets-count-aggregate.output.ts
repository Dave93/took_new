import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AssetsCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    model!: number;

    @Field(() => Int, {nullable:false})
    file_name!: number;

    @Field(() => Int, {nullable:false})
    model_id!: number;

    @Field(() => Int, {nullable:false})
    sub_folder!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
