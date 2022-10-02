import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { api_tokensWhereUniqueInput } from './api-tokens-where-unique.input';
import { Type } from 'class-transformer';
import { api_tokensCreateWithoutApi_tokens_updated_byTousersInput } from './api-tokens-create-without-api-tokens-updated-by-tousers.input';

@InputType()
export class api_tokensCreateOrConnectWithoutApi_tokens_updated_byTousersInput {

    @Field(() => api_tokensWhereUniqueInput, {nullable:false})
    @Type(() => api_tokensWhereUniqueInput)
    where!: api_tokensWhereUniqueInput;

    @Field(() => api_tokensCreateWithoutApi_tokens_updated_byTousersInput, {nullable:false})
    @Type(() => api_tokensCreateWithoutApi_tokens_updated_byTousersInput)
    create!: api_tokensCreateWithoutApi_tokens_updated_byTousersInput;
}
