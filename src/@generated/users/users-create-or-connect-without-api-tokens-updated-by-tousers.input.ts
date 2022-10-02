import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutApi_tokens_updated_byTousersInput } from './users-create-without-api-tokens-updated-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutApi_tokens_updated_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutApi_tokens_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutApi_tokens_updated_byTousersInput)
    create!: usersCreateWithoutApi_tokens_updated_byTousersInput;
}
