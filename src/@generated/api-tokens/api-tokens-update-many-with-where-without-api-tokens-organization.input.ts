import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { api_tokensScalarWhereInput } from './api-tokens-scalar-where.input';
import { Type } from 'class-transformer';
import { api_tokensUpdateManyMutationInput } from './api-tokens-update-many-mutation.input';

@InputType()
export class api_tokensUpdateManyWithWhereWithoutApi_tokens_organizationInput {

    @Field(() => api_tokensScalarWhereInput, {nullable:false})
    @Type(() => api_tokensScalarWhereInput)
    where!: api_tokensScalarWhereInput;

    @Field(() => api_tokensUpdateManyMutationInput, {nullable:false})
    @Type(() => api_tokensUpdateManyMutationInput)
    data!: api_tokensUpdateManyMutationInput;
}
