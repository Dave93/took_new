import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationUpdateWithoutApi_tokens_organizationInput } from './organization-update-without-api-tokens-organization.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutApi_tokens_organizationInput } from './organization-create-without-api-tokens-organization.input';

@InputType()
export class organizationUpsertWithoutApi_tokens_organizationInput {

    @Field(() => organizationUpdateWithoutApi_tokens_organizationInput, {nullable:false})
    @Type(() => organizationUpdateWithoutApi_tokens_organizationInput)
    update!: organizationUpdateWithoutApi_tokens_organizationInput;

    @Field(() => organizationCreateWithoutApi_tokens_organizationInput, {nullable:false})
    @Type(() => organizationCreateWithoutApi_tokens_organizationInput)
    create!: organizationCreateWithoutApi_tokens_organizationInput;
}
