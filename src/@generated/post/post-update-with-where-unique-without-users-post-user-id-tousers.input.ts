import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { postUpdateWithoutUsers_post_user_idTousersInput } from './post-update-without-users-post-user-id-tousers.input';

@InputType()
export class postUpdateWithWhereUniqueWithoutUsers_post_user_idTousersInput {

    @Field(() => postWhereUniqueInput, {nullable:false})
    @Type(() => postWhereUniqueInput)
    where!: postWhereUniqueInput;

    @Field(() => postUpdateWithoutUsers_post_user_idTousersInput, {nullable:false})
    @Type(() => postUpdateWithoutUsers_post_user_idTousersInput)
    data!: postUpdateWithoutUsers_post_user_idTousersInput;
}
