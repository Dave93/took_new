import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutApi_tokens_organizationInput } from './organization-create-without-api-tokens-organization.input';

@InputType()
export class organizationCreateOrConnectWithoutApi_tokens_organizationInput {

    @Field(() => organizationWhereUniqueInput, {nullable:false})
    @Type(() => organizationWhereUniqueInput)
    where!: organizationWhereUniqueInput;

    @Field(() => organizationCreateWithoutApi_tokens_organizationInput, {nullable:false})
    @Type(() => organizationCreateWithoutApi_tokens_organizationInput)
    create!: organizationCreateWithoutApi_tokens_organizationInput;
}
