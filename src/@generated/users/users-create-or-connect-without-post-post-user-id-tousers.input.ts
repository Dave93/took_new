import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutPost_post_user_idTousersInput } from './users-create-without-post-post-user-id-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutPost_post_user_idTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutPost_post_user_idTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutPost_post_user_idTousersInput)
    create!: usersCreateWithoutPost_post_user_idTousersInput;
}
