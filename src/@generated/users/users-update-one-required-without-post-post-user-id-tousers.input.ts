import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutPost_post_user_idTousersInput } from './users-create-without-post-post-user-id-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutPost_post_user_idTousersInput } from './users-create-or-connect-without-post-post-user-id-tousers.input';
import { usersUpsertWithoutPost_post_user_idTousersInput } from './users-upsert-without-post-post-user-id-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutPost_post_user_idTousersInput } from './users-update-without-post-post-user-id-tousers.input';

@InputType()
export class usersUpdateOneRequiredWithoutPost_post_user_idTousersInput {

    @Field(() => usersCreateWithoutPost_post_user_idTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutPost_post_user_idTousersInput)
    create?: usersCreateWithoutPost_post_user_idTousersInput;

    @Field(() => usersCreateOrConnectWithoutPost_post_user_idTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutPost_post_user_idTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutPost_post_user_idTousersInput;

    @Field(() => usersUpsertWithoutPost_post_user_idTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutPost_post_user_idTousersInput)
    upsert?: usersUpsertWithoutPost_post_user_idTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutPost_post_user_idTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutPost_post_user_idTousersInput)
    update?: usersUpdateWithoutPost_post_user_idTousersInput;
}
