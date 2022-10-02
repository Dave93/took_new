import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutApi_tokens_created_byTousersInput } from './users-update-without-api-tokens-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutApi_tokens_created_byTousersInput } from './users-create-without-api-tokens-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutApi_tokens_created_byTousersInput {

    @Field(() => usersUpdateWithoutApi_tokens_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutApi_tokens_created_byTousersInput)
    update!: usersUpdateWithoutApi_tokens_created_byTousersInput;

    @Field(() => usersCreateWithoutApi_tokens_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutApi_tokens_created_byTousersInput)
    create!: usersCreateWithoutApi_tokens_created_byTousersInput;
}
