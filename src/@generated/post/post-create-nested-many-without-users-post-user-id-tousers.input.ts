import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postCreateWithoutUsers_post_user_idTousersInput } from './post-create-without-users-post-user-id-tousers.input';
import { Type } from 'class-transformer';
import { postCreateOrConnectWithoutUsers_post_user_idTousersInput } from './post-create-or-connect-without-users-post-user-id-tousers.input';
import { postCreateManyUsers_post_user_idTousersInputEnvelope } from './post-create-many-users-post-user-id-tousers-input-envelope.input';
import { postWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class postCreateNestedManyWithoutUsers_post_user_idTousersInput {

    @Field(() => [postCreateWithoutUsers_post_user_idTousersInput], {nullable:true})
    @Type(() => postCreateWithoutUsers_post_user_idTousersInput)
    create?: Array<postCreateWithoutUsers_post_user_idTousersInput>;

    @Field(() => [postCreateOrConnectWithoutUsers_post_user_idTousersInput], {nullable:true})
    @Type(() => postCreateOrConnectWithoutUsers_post_user_idTousersInput)
    connectOrCreate?: Array<postCreateOrConnectWithoutUsers_post_user_idTousersInput>;

    @Field(() => postCreateManyUsers_post_user_idTousersInputEnvelope, {nullable:true})
    @Type(() => postCreateManyUsers_post_user_idTousersInputEnvelope)
    createMany?: postCreateManyUsers_post_user_idTousersInputEnvelope;

    @Field(() => [postWhereUniqueInput], {nullable:true})
    @Type(() => postWhereUniqueInput)
    connect?: Array<postWhereUniqueInput>;
}
