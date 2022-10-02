import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateWithoutApi_tokens_organizationInput } from './organization-create-without-api-tokens-organization.input';
import { Type } from 'class-transformer';
import { organizationCreateOrConnectWithoutApi_tokens_organizationInput } from './organization-create-or-connect-without-api-tokens-organization.input';
import { organizationUpsertWithoutApi_tokens_organizationInput } from './organization-upsert-without-api-tokens-organization.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { organizationUpdateWithoutApi_tokens_organizationInput } from './organization-update-without-api-tokens-organization.input';

@InputType()
export class organizationUpdateOneRequiredWithoutApi_tokens_organizationNestedInput {

    @Field(() => organizationCreateWithoutApi_tokens_organizationInput, {nullable:true})
    @Type(() => organizationCreateWithoutApi_tokens_organizationInput)
    create?: organizationCreateWithoutApi_tokens_organizationInput;

    @Field(() => organizationCreateOrConnectWithoutApi_tokens_organizationInput, {nullable:true})
    @Type(() => organizationCreateOrConnectWithoutApi_tokens_organizationInput)
    connectOrCreate?: organizationCreateOrConnectWithoutApi_tokens_organizationInput;

    @Field(() => organizationUpsertWithoutApi_tokens_organizationInput, {nullable:true})
    @Type(() => organizationUpsertWithoutApi_tokens_organizationInput)
    upsert?: organizationUpsertWithoutApi_tokens_organizationInput;

    @Field(() => organizationWhereUniqueInput, {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    connect?: organizationWhereUniqueInput;

    @Field(() => organizationUpdateWithoutApi_tokens_organizationInput, {nullable:true})
    @Type(() => organizationUpdateWithoutApi_tokens_organizationInput)
    update?: organizationUpdateWithoutApi_tokens_organizationInput;
}
