import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutPost_post_created_byTousersInput } from './users-create-without-post-post-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutPost_post_created_byTousersInput } from './users-create-or-connect-without-post-post-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutPost_post_created_byTousersInput {

    @Field(() => usersCreateWithoutPost_post_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutPost_post_created_byTousersInput)
    create?: usersCreateWithoutPost_post_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutPost_post_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutPost_post_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutPost_post_created_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
