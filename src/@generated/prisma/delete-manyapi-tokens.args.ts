import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { api_tokensWhereInput } from '../api-tokens/api-tokens-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyapiTokensArgs {

    @Field(() => api_tokensWhereInput, {nullable:true})
    @Type(() => api_tokensWhereInput)
    where?: api_tokensWhereInput;
}
