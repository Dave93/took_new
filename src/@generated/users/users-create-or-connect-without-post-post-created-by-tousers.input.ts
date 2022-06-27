import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutPost_post_created_byTousersInput } from './users-create-without-post-post-created-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutPost_post_created_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutPost_post_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutPost_post_created_byTousersInput)
    create!: usersCreateWithoutPost_post_created_byTousersInput;
}
