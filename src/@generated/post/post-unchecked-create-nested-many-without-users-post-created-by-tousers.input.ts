import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postCreateWithoutUsers_post_created_byTousersInput } from './post-create-without-users-post-created-by-tousers.input';
import { Type } from 'class-transformer';
import { postCreateOrConnectWithoutUsers_post_created_byTousersInput } from './post-create-or-connect-without-users-post-created-by-tousers.input';
import { postCreateManyUsers_post_created_byTousersInputEnvelope } from './post-create-many-users-post-created-by-tousers-input-envelope.input';
import { postWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class postUncheckedCreateNestedManyWithoutUsers_post_created_byTousersInput {

    @Field(() => [postCreateWithoutUsers_post_created_byTousersInput], {nullable:true})
    @Type(() => postCreateWithoutUsers_post_created_byTousersInput)
    create?: Array<postCreateWithoutUsers_post_created_byTousersInput>;

    @Field(() => [postCreateOrConnectWithoutUsers_post_created_byTousersInput], {nullable:true})
    @Type(() => postCreateOrConnectWithoutUsers_post_created_byTousersInput)
    connectOrCreate?: Array<postCreateOrConnectWithoutUsers_post_created_byTousersInput>;

    @Field(() => postCreateManyUsers_post_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => postCreateManyUsers_post_created_byTousersInputEnvelope)
    createMany?: postCreateManyUsers_post_created_byTousersInputEnvelope;

    @Field(() => [postWhereUniqueInput], {nullable:true})
    @Type(() => postWhereUniqueInput)
    connect?: Array<postWhereUniqueInput>;
}
