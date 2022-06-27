import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersUpdateWithoutPost_post_created_byTousersInput } from './users-update-without-post-post-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutPost_post_created_byTousersInput } from './users-create-without-post-post-created-by-tousers.input';

@InputType()
export class usersUpsertWithoutPost_post_created_byTousersInput {

    @Field(() => usersUpdateWithoutPost_post_created_byTousersInput, {nullable:false})
    @Type(() => usersUpdateWithoutPost_post_created_byTousersInput)
    update!: usersUpdateWithoutPost_post_created_byTousersInput;

    @Field(() => usersCreateWithoutPost_post_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutPost_post_created_byTousersInput)
    create!: usersCreateWithoutPost_post_created_byTousersInput;
}
