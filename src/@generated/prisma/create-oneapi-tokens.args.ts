import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { api_tokensCreateInput } from '../api-tokens/api-tokens-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneapiTokensArgs {

    @Field(() => api_tokensCreateInput, {nullable:false})
    @Type(() => api_tokensCreateInput)
    data!: api_tokensCreateInput;
}
