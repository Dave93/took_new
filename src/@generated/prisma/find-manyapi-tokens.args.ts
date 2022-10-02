import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { api_tokensWhereInput } from '../api-tokens/api-tokens-where.input';
import { Type } from 'class-transformer';
import { api_tokensOrderByWithRelationInput } from '../api-tokens/api-tokens-order-by-with-relation.input';
import { api_tokensWhereUniqueInput } from '../api-tokens/api-tokens-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Api_tokensScalarFieldEnum } from './api-tokens-scalar-field.enum';

@ArgsType()
export class FindManyapiTokensArgs {

    @Field(() => api_tokensWhereInput, {nullable:true})
    @Type(() => api_tokensWhereInput)
    where?: api_tokensWhereInput;

    @Field(() => [api_tokensOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<api_tokensOrderByWithRelationInput>;

    @Field(() => api_tokensWhereUniqueInput, {nullable:true})
    cursor?: api_tokensWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Api_tokensScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Api_tokensScalarFieldEnum>;
}
