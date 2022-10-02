import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { api_tokensWhereInput } from '../api-tokens/api-tokens-where.input';
import { Type } from 'class-transformer';
import { api_tokensOrderByWithAggregationInput } from '../api-tokens/api-tokens-order-by-with-aggregation.input';
import { Api_tokensScalarFieldEnum } from './api-tokens-scalar-field.enum';
import { api_tokensScalarWhereWithAggregatesInput } from '../api-tokens/api-tokens-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByapiTokensArgs {

    @Field(() => api_tokensWhereInput, {nullable:true})
    @Type(() => api_tokensWhereInput)
    where?: api_tokensWhereInput;

    @Field(() => [api_tokensOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<api_tokensOrderByWithAggregationInput>;

    @Field(() => [Api_tokensScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Api_tokensScalarFieldEnum>;

    @Field(() => api_tokensScalarWhereWithAggregatesInput, {nullable:true})
    having?: api_tokensScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
