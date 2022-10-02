import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Api_tokensCountAggregate } from './api-tokens-count-aggregate.output';
import { Api_tokensMinAggregate } from './api-tokens-min-aggregate.output';
import { Api_tokensMaxAggregate } from './api-tokens-max-aggregate.output';

@ObjectType()
export class Api_tokensGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Api_tokensCountAggregate, {nullable:true})
    _count?: Api_tokensCountAggregate;

    @Field(() => Api_tokensMinAggregate, {nullable:true})
    _min?: Api_tokensMinAggregate;

    @Field(() => Api_tokensMaxAggregate, {nullable:true})
    _max?: Api_tokensMaxAggregate;
}
