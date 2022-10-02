import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { api_tokensWhereUniqueInput } from '../api-tokens/api-tokens-where-unique.input';
import { Type } from 'class-transformer';
import { api_tokensCreateInput } from '../api-tokens/api-tokens-create.input';
import { api_tokensUpdateInput } from '../api-tokens/api-tokens-update.input';

@ArgsType()
export class UpsertOneapiTokensArgs {

    @Field(() => api_tokensWhereUniqueInput, {nullable:false})
    @Type(() => api_tokensWhereUniqueInput)
    where!: api_tokensWhereUniqueInput;

    @Field(() => api_tokensCreateInput, {nullable:false})
    @Type(() => api_tokensCreateInput)
    create!: api_tokensCreateInput;

    @Field(() => api_tokensUpdateInput, {nullable:false})
    @Type(() => api_tokensUpdateInput)
    update!: api_tokensUpdateInput;
}
