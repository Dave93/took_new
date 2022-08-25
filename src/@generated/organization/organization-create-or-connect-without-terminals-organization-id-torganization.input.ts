import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutTerminals_organization_idTorganizationInput } from './organization-create-without-terminals-organization-id-torganization.input';

@InputType()
export class organizationCreateOrConnectWithoutTerminals_organization_idTorganizationInput {

    @Field(() => organizationWhereUniqueInput, {nullable:false})
    @Type(() => organizationWhereUniqueInput)
    where!: organizationWhereUniqueInput;

    @Field(() => organizationCreateWithoutTerminals_organization_idTorganizationInput, {nullable:false})
    @Type(() => organizationCreateWithoutTerminals_organization_idTorganizationInput)
    create!: organizationCreateWithoutTerminals_organization_idTorganizationInput;
}
