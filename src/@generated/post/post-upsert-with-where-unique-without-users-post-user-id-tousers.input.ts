import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { postUpdateWithoutUsers_post_user_idTousersInput } from './post-update-without-users-post-user-id-tousers.input';
import { postCreateWithoutUsers_post_user_idTousersInput } from './post-create-without-users-post-user-id-tousers.input';

@InputType()
export class postUpsertWithWhereUniqueWithoutUsers_post_user_idTousersInput {

    @Field(() => postWhereUniqueInput, {nullable:false})
    @Type(() => postWhereUniqueInput)
    where!: postWhereUniqueInput;

    @Field(() => postUpdateWithoutUsers_post_user_idTousersInput, {nullable:false})
    @Type(() => postUpdateWithoutUsers_post_user_idTousersInput)
    update!: postUpdateWithoutUsers_post_user_idTousersInput;

    @Field(() => postCreateWithoutUsers_post_user_idTousersInput, {nullable:false})
    @Type(() => postCreateWithoutUsers_post_user_idTousersInput)
    create!: postCreateWithoutUsers_post_user_idTousersInput;
}
