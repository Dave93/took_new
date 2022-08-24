import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { usersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';
import { usersCreateWithoutOrganization_updated_byTousersInput } from './users-create-without-organization-updated-by-tousers.input';

@InputType()
export class usersCreateOrConnectWithoutOrganization_updated_byTousersInput {

    @Field(() => usersWhereUniqueInput, {nullable:false})
    @Type(() => usersWhereUniqueInput)
    where!: usersWhereUniqueInput;

    @Field(() => usersCreateWithoutOrganization_updated_byTousersInput, {nullable:false})
    @Type(() => usersCreateWithoutOrganization_updated_byTousersInput)
    create!: usersCreateWithoutOrganization_updated_byTousersInput;
}
