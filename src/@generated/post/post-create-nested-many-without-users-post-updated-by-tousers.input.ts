import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { postCreateWithoutUsers_post_updated_byTousersInput } from './post-create-without-users-post-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { postCreateOrConnectWithoutUsers_post_updated_byTousersInput } from './post-create-or-connect-without-users-post-updated-by-tousers.input';
import { postCreateManyUsers_post_updated_byTousersInputEnvelope } from './post-create-many-users-post-updated-by-tousers-input-envelope.input';
import { postWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class postCreateNestedManyWithoutUsers_post_updated_byTousersInput {

    @Field(() => [postCreateWithoutUsers_post_updated_byTousersInput], {nullable:true})
    @Type(() => postCreateWithoutUsers_post_updated_byTousersInput)
    create?: Array<postCreateWithoutUsers_post_updated_byTousersInput>;

    @Field(() => [postCreateOrConnectWithoutUsers_post_updated_byTousersInput], {nullable:true})
    @Type(() => postCreateOrConnectWithoutUsers_post_updated_byTousersInput)
    connectOrCreate?: Array<postCreateOrConnectWithoutUsers_post_updated_byTousersInput>;

    @Field(() => postCreateManyUsers_post_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => postCreateManyUsers_post_updated_byTousersInputEnvelope)
    createMany?: postCreateManyUsers_post_updated_byTousersInputEnvelope;

    @Field(() => [postWhereUniqueInput], {nullable:true})
    @Type(() => postWhereUniqueInput)
    connect?: Array<postWhereUniqueInput>;
}
