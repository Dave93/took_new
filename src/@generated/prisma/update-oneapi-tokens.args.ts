import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { api_tokensUpdateInput } from '../api-tokens/api-tokens-update.input';
import { Type } from 'class-transformer';
import { api_tokensWhereUniqueInput } from '../api-tokens/api-tokens-where-unique.input';

@ArgsType()
export class UpdateOneapiTokensArgs {

    @Field(() => api_tokensUpdateInput, {nullable:false})
    @Type(() => api_tokensUpdateInput)
    data!: api_tokensUpdateInput;

    @Field(() => api_tokensWhereUniqueInput, {nullable:false})
    @Type(() => api_tokensWhereUniqueInput)
    where!: api_tokensWhereUniqueInput;
}
