import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutApi_tokens_created_byTousersInput } from '../users/users-create-nested-one-without-api-tokens-created-by-tousers.input';
import { usersCreateNestedOneWithoutApi_tokens_updated_byTousersInput } from '../users/users-create-nested-one-without-api-tokens-updated-by-tousers.input';
import { organizationCreateNestedOneWithoutApi_tokens_organizationInput } from '../organization/organization-create-nested-one-without-api-tokens-organization.input';

@InputType()
export class api_tokensCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutApi_tokens_created_byTousersInput, {nullable:true})
    api_tokens_created_byTousers?: usersCreateNestedOneWithoutApi_tokens_created_byTousersInput;

    @Field(() => usersCreateNestedOneWithoutApi_tokens_updated_byTousersInput, {nullable:true})
    api_tokens_updated_byTousers?: usersCreateNestedOneWithoutApi_tokens_updated_byTousersInput;

    @Field(() => organizationCreateNestedOneWithoutApi_tokens_organizationInput, {nullable:false})
    api_tokens_organization!: organizationCreateNestedOneWithoutApi_tokens_organizationInput;
}
