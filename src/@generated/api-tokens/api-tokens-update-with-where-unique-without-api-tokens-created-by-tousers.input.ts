import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { api_tokensWhereUniqueInput } from './api-tokens-where-unique.input';
import { Type } from 'class-transformer';
import { api_tokensUpdateWithoutApi_tokens_created_byTousersInput } from './api-tokens-update-without-api-tokens-created-by-tousers.input';

@InputType()
export class api_tokensUpdateWithWhereUniqueWithoutApi_tokens_created_byTousersInput {

    @Field(() => api_tokensWhereUniqueInput, {nullable:false})
    @Type(() => api_tokensWhereUniqueInput)
    where!: api_tokensWhereUniqueInput;

    @Field(() => api_tokensUpdateWithoutApi_tokens_created_byTousersInput, {nullable:false})
    @Type(() => api_tokensUpdateWithoutApi_tokens_created_byTousersInput)
    data!: api_tokensUpdateWithoutApi_tokens_created_byTousersInput;
}
