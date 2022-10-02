import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutApi_tokens_created_byTousersInput } from './users-create-without-api-tokens-created-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutApi_tokens_created_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutApi_tokens_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutApi_tokens_created_byTousersInput)
    create!: usersCreateWithoutApi_tokens_created_byTousersInput;
}
