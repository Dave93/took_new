import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersCreateWithoutPost_updated_byTousersInput } from './users-create-without-post-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { usersCreateOrConnectWithoutPost_updated_byTousersInput } from './users-create-or-connect-without-post-updated-by-tousers.input';
import { usersWhereUniqueInput } from './users-where-unique.input';

@InputType()
export class usersCreateNestedOneWithoutPost_updated_byTousersInput {

    @Field(() => usersCreateWithoutPost_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateWithoutPost_updated_byTousersInput)
    create?: usersCreateWithoutPost_updated_byTousersInput;

    @Field(() => usersCreateOrConnectWithoutPost_updated_byTousersInput, {nullable:true})
    @Type(() => usersCreateOrConnectWithoutPost_updated_byTousersInput)
    connectOrCreate?: usersCreateOrConnectWithoutPost_updated_byTousersInput;

    @Field(() => usersWhereUniqueInput, {nullable:true})
    @Type(() => usersWhereUniqueInput)
    connect?: usersWhereUniqueInput;
}
