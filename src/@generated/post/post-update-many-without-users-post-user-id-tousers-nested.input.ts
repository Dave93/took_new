import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postCreateWithoutUsers_post_user_idTousersInput } from './post-create-without-users-post-user-id-tousers.input';
import { Type } from 'class-transformer';
import { postCreateOrConnectWithoutUsers_post_user_idTousersInput } from './post-create-or-connect-without-users-post-user-id-tousers.input';
import { postUpsertWithWhereUniqueWithoutUsers_post_user_idTousersInput } from './post-upsert-with-where-unique-without-users-post-user-id-tousers.input';
import { postCreateManyUsers_post_user_idTousersInputEnvelope } from './post-create-many-users-post-user-id-tousers-input-envelope.input';
import { postWhereUniqueInput } from './post-where-unique.input';
import { postUpdateWithWhereUniqueWithoutUsers_post_user_idTousersInput } from './post-update-with-where-unique-without-users-post-user-id-tousers.input';
import { postUpdateManyWithWhereWithoutUsers_post_user_idTousersInput } from './post-update-many-with-where-without-users-post-user-id-tousers.input';
import { postScalarWhereInput } from './post-scalar-where.input';

@InputType()
export class postUpdateManyWithoutUsers_post_user_idTousersNestedInput {

    @Field(() => [postCreateWithoutUsers_post_user_idTousersInput], {nullable:true})
    @Type(() => postCreateWithoutUsers_post_user_idTousersInput)
    create?: Array<postCreateWithoutUsers_post_user_idTousersInput>;

    @Field(() => [postCreateOrConnectWithoutUsers_post_user_idTousersInput], {nullable:true})
    @Type(() => postCreateOrConnectWithoutUsers_post_user_idTousersInput)
    connectOrCreate?: Array<postCreateOrConnectWithoutUsers_post_user_idTousersInput>;

    @Field(() => [postUpsertWithWhereUniqueWithoutUsers_post_user_idTousersInput], {nullable:true})
    @Type(() => postUpsertWithWhereUniqueWithoutUsers_post_user_idTousersInput)
    upsert?: Array<postUpsertWithWhereUniqueWithoutUsers_post_user_idTousersInput>;

    @Field(() => postCreateManyUsers_post_user_idTousersInputEnvelope, {nullable:true})
    @Type(() => postCreateManyUsers_post_user_idTousersInputEnvelope)
    createMany?: postCreateManyUsers_post_user_idTousersInputEnvelope;

    @Field(() => [postWhereUniqueInput], {nullable:true})
    @Type(() => postWhereUniqueInput)
    set?: Array<postWhereUniqueInput>;

    @Field(() => [postWhereUniqueInput], {nullable:true})
    @Type(() => postWhereUniqueInput)
    disconnect?: Array<postWhereUniqueInput>;

    @Field(() => [postWhereUniqueInput], {nullable:true})
    @Type(() => postWhereUniqueInput)
    delete?: Array<postWhereUniqueInput>;

    @Field(() => [postWhereUniqueInput], {nullable:true})
    @Type(() => postWhereUniqueInput)
    connect?: Array<postWhereUniqueInput>;

    @Field(() => [postUpdateWithWhereUniqueWithoutUsers_post_user_idTousersInput], {nullable:true})
    @Type(() => postUpdateWithWhereUniqueWithoutUsers_post_user_idTousersInput)
    update?: Array<postUpdateWithWhereUniqueWithoutUsers_post_user_idTousersInput>;

    @Field(() => [postUpdateManyWithWhereWithoutUsers_post_user_idTousersInput], {nullable:true})
    @Type(() => postUpdateManyWithWhereWithoutUsers_post_user_idTousersInput)
    updateMany?: Array<postUpdateManyWithWhereWithoutUsers_post_user_idTousersInput>;

    @Field(() => [postScalarWhereInput], {nullable:true})
    @Type(() => postScalarWhereInput)
    deleteMany?: Array<postScalarWhereInput>;
}
