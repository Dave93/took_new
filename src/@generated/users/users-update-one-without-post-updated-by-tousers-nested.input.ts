import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutPost_updated_byTousersInput } from './users-create-without-post-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutPost_updated_byTousersInput } from './users-create-or-connect-without-post-updated-by-tousers.input';
import { usersUpsertWithoutPost_updated_byTousersInput } from './users-upsert-without-post-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { usersUpdateWithoutPost_updated_byTousersInput } from './users-update-without-post-updated-by-tousers.input';

@InputType()
export class usersUpdateOneWithoutPost_updated_byTousersNestedInput {

    @Field(() => usersCreateWithoutPost_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutPost_updated_byTousersInput)
    create?: usersCreateWithoutPost_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutPost_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutPost_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutPost_updated_byTousersInput;

    @Field(() => usersUpsertWithoutPost_updated_byTousersInput, {nullable:true})
    @Type(() => usersUpsertWithoutPost_updated_byTousersInput)
    upsert?: usersUpsertWithoutPost_updated_byTousersInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;

    @Field(() => usersUpdateWithoutPost_updated_byTousersInput, {nullable:true})
    @Type(() => usersUpdateWithoutPost_updated_byTousersInput)
    update?: usersUpdateWithoutPost_updated_byTousersInput;
}
