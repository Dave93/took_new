import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { api_tokensUpdateManyMutationInput } from '../api-tokens/api-tokens-update-many-mutation.input';
import { Type } from 'class-transformer';
import { api_tokensWhereInput } from '../api-tokens/api-tokens-where.input';

@ArgsType()
export class UpdateManyapiTokensArgs {

    @Field(() => api_tokensUpdateManyMutationInput, {nullable:false})
    @Type(() => api_tokensUpdateManyMutationInput)
    data!: api_tokensUpdateManyMutationInput;

    @Field(() => api_tokensWhereInput, {nullable:true})
    @Type(() => api_tokensWhereInput)
    where?: api_tokensWhereInput;
}
