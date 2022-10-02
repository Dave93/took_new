import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { api_tokensCreateWithoutApi_tokens_updated_byTousersInput } from './api-tokens-create-without-api-tokens-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { api_tokensCreateOrConnectWithoutApi_tokens_updated_byTousersInput } from './api-tokens-create-or-connect-without-api-tokens-updated-by-tousers.input';
import { api_tokensCreateManyApi_tokens_updated_byTousersInputEnvelope } from './api-tokens-create-many-api-tokens-updated-by-tousers-input-envelope.input';
import { api_tokensWhereUniqueInput } from './api-tokens-where-unique.input';

@InputType()
export class api_tokensUncheckedCreateNestedManyWithoutApi_tokens_updated_byTousersInput {

    @Field(() => [api_tokensCreateWithoutApi_tokens_updated_byTousersInput], {nullable:true})
    @Type(() => api_tokensCreateWithoutApi_tokens_updated_byTousersInput)
    create?: Array<api_tokensCreateWithoutApi_tokens_updated_byTousersInput>;

    @Field(() => [api_tokensCreateOrConnectWithoutApi_tokens_updated_byTousersInput], {nullable:true})
    @Type(() => api_tokensCreateOrConnectWithoutApi_tokens_updated_byTousersInput)
    connectOrCreate?: Array<api_tokensCreateOrConnectWithoutApi_tokens_updated_byTousersInput>;

    @Field(() => api_tokensCreateManyApi_tokens_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => api_tokensCreateManyApi_tokens_updated_byTousersInputEnvelope)
    createMany?: api_tokensCreateManyApi_tokens_updated_byTousersInputEnvelope;

    @Field(() => [api_tokensWhereUniqueInput], {nullable:true})
    @Type(() => api_tokensWhereUniqueInput)
    connect?: Array<api_tokensWhereUniqueInput>;
}
