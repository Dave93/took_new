import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { api_tokensCreateManyApi_tokens_created_byTousersInput } from './api-tokens-create-many-api-tokens-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class api_tokensCreateManyApi_tokens_created_byTousersInputEnvelope {

    @Field(() => [api_tokensCreateManyApi_tokens_created_byTousersInput], {nullable:false})
    @Type(() => api_tokensCreateManyApi_tokens_created_byTousersInput)
    data!: Array<api_tokensCreateManyApi_tokens_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
