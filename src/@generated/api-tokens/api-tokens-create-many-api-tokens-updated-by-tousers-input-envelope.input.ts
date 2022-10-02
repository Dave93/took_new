import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { api_tokensCreateManyApi_tokens_updated_byTousersInput } from './api-tokens-create-many-api-tokens-updated-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class api_tokensCreateManyApi_tokens_updated_byTousersInputEnvelope {

    @Field(() => [api_tokensCreateManyApi_tokens_updated_byTousersInput], {nullable:false})
    @Type(() => api_tokensCreateManyApi_tokens_updated_byTousersInput)
    data!: Array<api_tokensCreateManyApi_tokens_updated_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
