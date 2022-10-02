import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { api_tokensCreateWithoutApi_tokens_organizationInput } from './api-tokens-create-without-api-tokens-organization.input';
import { Type } from 'class-transformer';
import { api_tokensCreateOrConnectWithoutApi_tokens_organizationInput } from './api-tokens-create-or-connect-without-api-tokens-organization.input';
import { api_tokensCreateManyApi_tokens_organizationInputEnvelope } from './api-tokens-create-many-api-tokens-organization-input-envelope.input';
import { api_tokensWhereUniqueInput } from './api-tokens-where-unique.input';

@InputType()
export class api_tokensUncheckedCreateNestedManyWithoutApi_tokens_organizationInput {

    @Field(() => [api_tokensCreateWithoutApi_tokens_organizationInput], {nullable:true})
    @Type(() => api_tokensCreateWithoutApi_tokens_organizationInput)
    create?: Array<api_tokensCreateWithoutApi_tokens_organizationInput>;

    @Field(() => [api_tokensCreateOrConnectWithoutApi_tokens_organizationInput], {nullable:true})
    @Type(() => api_tokensCreateOrConnectWithoutApi_tokens_organizationInput)
    connectOrCreate?: Array<api_tokensCreateOrConnectWithoutApi_tokens_organizationInput>;

    @Field(() => api_tokensCreateManyApi_tokens_organizationInputEnvelope, {nullable:true})
    @Type(() => api_tokensCreateManyApi_tokens_organizationInputEnvelope)
    createMany?: api_tokensCreateManyApi_tokens_organizationInputEnvelope;

    @Field(() => [api_tokensWhereUniqueInput], {nullable:true})
    @Type(() => api_tokensWhereUniqueInput)
    connect?: Array<api_tokensWhereUniqueInput>;
}
