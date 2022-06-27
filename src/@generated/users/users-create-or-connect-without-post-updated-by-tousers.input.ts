import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutPost_updated_byTousersInput } from './users-create-without-post-updated-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutPost_updated_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutPost_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutPost_updated_byTousersInput)
    create!: usersCreateWithoutPost_updated_byTousersInput;
}
