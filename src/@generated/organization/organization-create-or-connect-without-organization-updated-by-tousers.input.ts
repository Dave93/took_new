import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutOrganization_updated_byTousersInput } from './organization-create-without-organization-updated-by-tousers.input';

@InputType()
export class organizationCreateOrConnectWithoutOrganization_updated_byTousersInput {

    @Field(() => organizationWhereUniqueInput, {nullable:false})
    @Type(() => organizationWhereUniqueInput)
    where!: organizationWhereUniqueInput;

    @Field(() => organizationCreateWithoutOrganization_updated_byTousersInput, {nullable:false})
    @Type(() => organizationCreateWithoutOrganization_updated_byTousersInput)
    create!: organizationCreateWithoutOrganization_updated_byTousersInput;
}
