import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { api_tokensCreateWithoutApi_tokens_organizationInput } from './api-tokens-create-without-api-tokens-organization.input';
import { Type } from 'class-transformer';
import { api_tokensCreateOrConnectWithoutApi_tokens_organizationInput } from './api-tokens-create-or-connect-without-api-tokens-organization.input';
import { api_tokensUpsertWithWhereUniqueWithoutApi_tokens_organizationInput } from './api-tokens-upsert-with-where-unique-without-api-tokens-organization.input';
import { api_tokensCreateManyApi_tokens_organizationInputEnvelope } from './api-tokens-create-many-api-tokens-organization-input-envelope.input';
import { api_tokensWhereUniqueInput } from './api-tokens-where-unique.input';
import { api_tokensUpdateWithWhereUniqueWithoutApi_tokens_organizationInput } from './api-tokens-update-with-where-unique-without-api-tokens-organization.input';
import { api_tokensUpdateManyWithWhereWithoutApi_tokens_organizationInput } from './api-tokens-update-many-with-where-without-api-tokens-organization.input';
import { api_tokensScalarWhereInput } from './api-tokens-scalar-where.input';

@InputType()
export class api_tokensUpdateManyWithoutApi_tokens_organizationNestedInput {

    @Field(() => [api_tokensCreateWithoutApi_tokens_organizationInput], {nullable:true})
    @Type(() => api_tokensCreateWithoutApi_tokens_organizationInput)
    create?: Array<api_tokensCreateWithoutApi_tokens_organizationInput>;

    @Field(() => [api_tokensCreateOrConnectWithoutApi_tokens_organizationInput], {nullable:true})
    @Type(() => api_tokensCreateOrConnectWithoutApi_tokens_organizationInput)
    connectOrCreate?: Array<api_tokensCreateOrConnectWithoutApi_tokens_organizationInput>;

    @Field(() => [api_tokensUpsertWithWhereUniqueWithoutApi_tokens_organizationInput], {nullable:true})
    @Type(() => api_tokensUpsertWithWhereUniqueWithoutApi_tokens_organizationInput)
    upsert?: Array<api_tokensUpsertWithWhereUniqueWithoutApi_tokens_organizationInput>;

    @Field(() => api_tokensCreateManyApi_tokens_organizationInputEnvelope, {nullable:true})
    @Type(() => api_tokensCreateManyApi_tokens_organizationInputEnvelope)
    createMany?: api_tokensCreateManyApi_tokens_organizationInputEnvelope;

    @Field(() => [api_tokensWhereUniqueInput], {nullable:true})
    @Type(() => api_tokensWhereUniqueInput)
    set?: Array<api_tokensWhereUniqueInput>;

    @Field(() => [api_tokensWhereUniqueInput], {nullable:true})
    @Type(() => api_tokensWhereUniqueInput)
    disconnect?: Array<api_tokensWhereUniqueInput>;

    @Field(() => [api_tokensWhereUniqueInput], {nullable:true})
    @Type(() => api_tokensWhereUniqueInput)
    delete?: Array<api_tokensWhereUniqueInput>;

    @Field(() => [api_tokensWhereUniqueInput], {nullable:true})
    @Type(() => api_tokensWhereUniqueInput)
    connect?: Array<api_tokensWhereUniqueInput>;

    @Field(() => [api_tokensUpdateWithWhereUniqueWithoutApi_tokens_organizationInput], {nullable:true})
    @Type(() => api_tokensUpdateWithWhereUniqueWithoutApi_tokens_organizationInput)
    update?: Array<api_tokensUpdateWithWhereUniqueWithoutApi_tokens_organizationInput>;

    @Field(() => [api_tokensUpdateManyWithWhereWithoutApi_tokens_organizationInput], {nullable:true})
    @Type(() => api_tokensUpdateManyWithWhereWithoutApi_tokens_organizationInput)
    updateMany?: Array<api_tokensUpdateManyWithWhereWithoutApi_tokens_organizationInput>;

    @Field(() => [api_tokensScalarWhereInput], {nullable:true})
    @Type(() => api_tokensScalarWhereInput)
    deleteMany?: Array<api_tokensScalarWhereInput>;
}
