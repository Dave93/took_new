import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postCreateWithoutUsers_post_updated_byTousersInput } from './post-create-without-users-post-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { postCreateOrConnectWithoutUsers_post_updated_byTousersInput } from './post-create-or-connect-without-users-post-updated-by-tousers.input';
import { postUpsertWithWhereUniqueWithoutUsers_post_updated_byTousersInput } from './post-upsert-with-where-unique-without-users-post-updated-by-tousers.input';
import { postCreateManyUsers_post_updated_byTousersInputEnvelope } from './post-create-many-users-post-updated-by-tousers-input-envelope.input';
import { postWhereUniqueInput } from './post-where-unique.input';
import { postUpdateWithWhereUniqueWithoutUsers_post_updated_byTousersInput } from './post-update-with-where-unique-without-users-post-updated-by-tousers.input';
import { postUpdateManyWithWhereWithoutUsers_post_updated_byTousersInput } from './post-update-many-with-where-without-users-post-updated-by-tousers.input';
import { postScalarWhereInput } from './post-scalar-where.input';

@InputType()
export class postUpdateManyWithoutUsers_post_updated_byTousersNestedInput {

    @Field(() => [postCreateWithoutUsers_post_updated_byTousersInput], {nullable:true})
    @Type(() => postCreateWithoutUsers_post_updated_byTousersInput)
    create?: Array<postCreateWithoutUsers_post_updated_byTousersInput>;

    @Field(() => [postCreateOrConnectWithoutUsers_post_updated_byTousersInput], {nullable:true})
    @Type(() => postCreateOrConnectWithoutUsers_post_updated_byTousersInput)
    connectOrCreate?: Array<postCreateOrConnectWithoutUsers_post_updated_byTousersInput>;

    @Field(() => [postUpsertWithWhereUniqueWithoutUsers_post_updated_byTousersInput], {nullable:true})
    @Type(() => postUpsertWithWhereUniqueWithoutUsers_post_updated_byTousersInput)
    upsert?: Array<postUpsertWithWhereUniqueWithoutUsers_post_updated_byTousersInput>;

    @Field(() => postCreateManyUsers_post_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => postCreateManyUsers_post_updated_byTousersInputEnvelope)
    createMany?: postCreateManyUsers_post_updated_byTousersInputEnvelope;

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

    @Field(() => [postUpdateWithWhereUniqueWithoutUsers_post_updated_byTousersInput], {nullable:true})
    @Type(() => postUpdateWithWhereUniqueWithoutUsers_post_updated_byTousersInput)
    update?: Array<postUpdateWithWhereUniqueWithoutUsers_post_updated_byTousersInput>;

    @Field(() => [postUpdateManyWithWhereWithoutUsers_post_updated_byTousersInput], {nullable:true})
    @Type(() => postUpdateManyWithWhereWithoutUsers_post_updated_byTousersInput)
    updateMany?: Array<postUpdateManyWithWhereWithoutUsers_post_updated_byTousersInput>;

    @Field(() => [postScalarWhereInput], {nullable:true})
    @Type(() => postScalarWhereInput)
    deleteMany?: Array<postScalarWhereInput>;
}
