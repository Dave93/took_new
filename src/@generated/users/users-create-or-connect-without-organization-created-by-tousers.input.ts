import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrganization_created_byTousersInput } from './users-create-without-organization-created-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutOrganization_created_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutOrganization_created_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrganization_created_byTousersInput)
    create!: usersCreateWithoutOrganization_created_byTousersInput;
}
