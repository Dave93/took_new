import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { api_tokensWhereInput } from '../api-tokens/api-tokens-where.input';

@InputType()
export class Api_tokensListRelationFilter {

    @Field(() => api_tokensWhereInput, {nullable:true})
    every?: api_tokensWhereInput;

    @Field(() => api_tokensWhereInput, {nullable:true})
    some?: api_tokensWhereInput;

    @Field(() => api_tokensWhereInput, {nullable:true})
    none?: api_tokensWhereInput;
}
