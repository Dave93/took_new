import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutApi_tokens_updated_byTousersInput } from './users-create-without-api-tokens-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutApi_tokens_updated_byTousersInput } from './users-create-or-connect-without-api-tokens-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutApi_tokens_updated_byTousersInput {

    @Field(() => usersCreateWithoutApi_tokens_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutApi_tokens_updated_byTousersInput)
    create?: usersCreateWithoutApi_tokens_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutApi_tokens_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutApi_tokens_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutApi_tokens_updated_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
