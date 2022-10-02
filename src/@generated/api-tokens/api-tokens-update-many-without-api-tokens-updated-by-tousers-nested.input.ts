import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { api_tokensCreateWithoutApi_tokens_updated_byTousersInput } from './api-tokens-create-without-api-tokens-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { api_tokensCreateOrConnectWithoutApi_tokens_updated_byTousersInput } from './api-tokens-create-or-connect-without-api-tokens-updated-by-tousers.input';
import { api_tokensUpsertWithWhereUniqueWithoutApi_tokens_updated_byTousersInput } from './api-tokens-upsert-with-where-unique-without-api-tokens-updated-by-tousers.input';
import { api_tokensCreateManyApi_tokens_updated_byTousersInputEnvelope } from './api-tokens-create-many-api-tokens-updated-by-tousers-input-envelope.input';
import { api_tokensWhereUniqueInput } from './api-tokens-where-unique.input';
import { api_tokensUpdateWithWhereUniqueWithoutApi_tokens_updated_byTousersInput } from './api-tokens-update-with-where-unique-without-api-tokens-updated-by-tousers.input';
import { api_tokensUpdateManyWithWhereWithoutApi_tokens_updated_byTousersInput } from './api-tokens-update-many-with-where-without-api-tokens-updated-by-tousers.input';
import { api_tokensScalarWhereInput } from './api-tokens-scalar-where.input';

@InputType()
export class api_tokensUpdateManyWithoutApi_tokens_updated_byTousersNestedInput {

    @Field(() => [api_tokensCreateWithoutApi_tokens_updated_byTousersInput], {nullable:true})
    @Type(() => api_tokensCreateWithoutApi_tokens_updated_byTousersInput)
    create?: Array<api_tokensCreateWithoutApi_tokens_updated_byTousersInput>;

    @Field(() => [api_tokensCreateOrConnectWithoutApi_tokens_updated_byTousersInput], {nullable:true})
    @Type(() => api_tokensCreateOrConnectWithoutApi_tokens_updated_byTousersInput)
    connectOrCreate?: Array<api_tokensCreateOrConnectWithoutApi_tokens_updated_byTousersInput>;

    @Field(() => [api_tokensUpsertWithWhereUniqueWithoutApi_tokens_updated_byTousersInput], {nullable:true})
    @Type(() => api_tokensUpsertWithWhereUniqueWithoutApi_tokens_updated_byTousersInput)
    upsert?: Array<api_tokensUpsertWithWhereUniqueWithoutApi_tokens_updated_byTousersInput>;

    @Field(() => api_tokensCreateManyApi_tokens_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => api_tokensCreateManyApi_tokens_updated_byTousersInputEnvelope)
    createMany?: api_tokensCreateManyApi_tokens_updated_byTousersInputEnvelope;

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

    @Field(() => [api_tokensUpdateWithWhereUniqueWithoutApi_tokens_updated_byTousersInput], {nullable:true})
    @Type(() => api_tokensUpdateWithWhereUniqueWithoutApi_tokens_updated_byTousersInput)
    update?: Array<api_tokensUpdateWithWhereUniqueWithoutApi_tokens_updated_byTousersInput>;

    @Field(() => [api_tokensUpdateManyWithWhereWithoutApi_tokens_updated_byTousersInput], {nullable:true})
    @Type(() => api_tokensUpdateManyWithWhereWithoutApi_tokens_updated_byTousersInput)
    updateMany?: Array<api_tokensUpdateManyWithWhereWithoutApi_tokens_updated_byTousersInput>;

    @Field(() => [api_tokensScalarWhereInput], {nullable:true})
    @Type(() => api_tokensScalarWhereInput)
    deleteMany?: Array<api_tokensScalarWhereInput>;
}
