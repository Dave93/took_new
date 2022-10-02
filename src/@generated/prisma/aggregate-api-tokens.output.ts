import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Api_tokensCountAggregate } from './api-tokens-count-aggregate.output';
import { Api_tokensMinAggregate } from './api-tokens-min-aggregate.output';
import { Api_tokensMaxAggregate } from './api-tokens-max-aggregate.output';

@ObjectType()
export class AggregateApi_tokens {

    @Field(() => Api_tokensCountAggregate, {nullable:true})
    _count?: Api_tokensCountAggregate;

    @Field(() => Api_tokensMinAggregate, {nullable:true})
    _min?: Api_tokensMinAggregate;

    @Field(() => Api_tokensMaxAggregate, {nullable:true})
    _max?: Api_tokensMaxAggregate;
}
