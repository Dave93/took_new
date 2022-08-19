import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutPost_post_created_byTousersInput } from './users-create-without-post-post-created-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutPost_post_created_byTousersInput } from './users-create-or-connect-without-post-post-created-by-tousers.input';
import { usersUpsertWithoutPost_post_created_byTousersInput } from './users-upsert-without-post-post-created-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutPost_post_created_byTousersInput } from './users-update-without-post-post-created-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutPost_post_created_byTousersNestedInput {

    @Field(() => usersCreateWithoutPost_post_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutPost_post_created_byTousersInput)
    create?: usersCreateWithoutPost_post_created_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutPost_post_created_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutPost_post_created_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutPost_post_created_byTousersInput;

    @Field(() => usersUpsertWithoutPost_post_created_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutPost_post_created_byTousersInput)
    upsert?: usersUpsertWithoutPost_post_created_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutPost_post_created_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutPost_post_created_byTousersInput)
    update?: usersUpdateWithoutPost_post_created_byTousersInput;
}
