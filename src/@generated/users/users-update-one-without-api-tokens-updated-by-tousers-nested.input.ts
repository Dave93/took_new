import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutApi_tokens_updated_byTousersInput } from './users-create-without-api-tokens-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutApi_tokens_updated_byTousersInput } from './users-create-or-connect-without-api-tokens-updated-by-tousers.input';
import { usersUpsertWithoutApi_tokens_updated_byTousersInput } from './users-upsert-without-api-tokens-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutApi_tokens_updated_byTousersInput } from './users-update-without-api-tokens-updated-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutApi_tokens_updated_byTousersNestedInput {

    @Field(() => usersCreateWithoutApi_tokens_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutApi_tokens_updated_byTousersInput)
    create?: usersCreateWithoutApi_tokens_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutApi_tokens_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutApi_tokens_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutApi_tokens_updated_byTousersInput;

    @Field(() => usersUpsertWithoutApi_tokens_updated_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutApi_tokens_updated_byTousersInput)
    upsert?: usersUpsertWithoutApi_tokens_updated_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutApi_tokens_updated_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutApi_tokens_updated_byTousersInput)
    update?: usersUpdateWithoutApi_tokens_updated_byTousersInput;
}
