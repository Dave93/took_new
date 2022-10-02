import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateOneWithoutApi_tokens_created_byTousersNestedInput } from '../users/users-update-one-without-api-tokens-created-by-tousers-nested.input';
import { usersUpdateOneWithoutApi_tokens_updated_byTousersNestedInput } from '../users/users-update-one-without-api-tokens-updated-by-tousers-nested.input';

@InputType()
export class api_tokensUpdateWithoutApi_tokens_organizationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersUpdateOneWithoutApi_tokens_created_byTousersNestedInput, {nullable:true})
    api_tokens_created_byTousers?: usersUpdateOneWithoutApi_tokens_created_byTousersNestedInput;

    @Field(() => usersUpdateOneWithoutApi_tokens_updated_byTousersNestedInput, {nullable:true})
    api_tokens_updated_byTousers?: usersUpdateOneWithoutApi_tokens_updated_byTousersNestedInput;
}
