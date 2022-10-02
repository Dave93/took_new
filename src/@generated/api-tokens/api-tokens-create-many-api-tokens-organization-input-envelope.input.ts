import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { api_tokensCreateManyApi_tokens_organizationInput } from './api-tokens-create-many-api-tokens-organization.input';
import { Type } from 'class-transformer';

@InputType()
export class api_tokensCreateManyApi_tokens_organizationInputEnvelope {

    @Field(() => [api_tokensCreateManyApi_tokens_organizationInput], {nullable:false})
    @Type(() => api_tokensCreateManyApi_tokens_organizationInput)
    data!: Array<api_tokensCreateManyApi_tokens_organizationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
