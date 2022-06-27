import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutPost_post_user_idTousersInput } from './users-update-without-post-post-user-id-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutPost_post_user_idTousersInput } from './users-create-without-post-post-user-id-tousers.input';

@InputType()
export class usersUpsertWithoutPost_post_user_idTousersInput {

    @Field(() => usersUpdateWithoutPost_post_user_idTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutPost_post_user_idTousersInput)
    update!: usersUpdateWithoutPost_post_user_idTousersInput;

    @Field(() => usersCreateWithoutPost_post_user_idTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutPost_post_user_idTousersInput)
    create!: usersCreateWithoutPost_post_user_idTousersInput;
}
