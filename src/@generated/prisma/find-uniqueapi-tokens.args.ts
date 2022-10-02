import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { api_tokensWhereUniqueInput } from '../api-tokens/api-tokens-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueapiTokensArgs {

    @Field(() => api_tokensWhereUniqueInput, {nullable:false})
    @Type(() => api_tokensWhereUniqueInput)
    where!: api_tokensWhereUniqueInput;
}
