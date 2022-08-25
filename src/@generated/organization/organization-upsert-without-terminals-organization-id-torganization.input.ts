import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationUpdateWithoutTerminals_organization_idTorganizationInput } from './organization-update-without-terminals-organization-id-torganization.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutTerminals_organization_idTorganizationInput } from './organization-create-without-terminals-organization-id-torganization.input';

@InputType()
export class organizationUpsertWithoutTerminals_organization_idTorganizationInput {

    @Field(() => organizationUpdateWithoutTerminals_organization_idTorganizationInput, {nullable:false})
    @Type(() => organizationUpdateWithoutTerminals_organization_idTorganizationInput)
    update!: organizationUpdateWithoutTerminals_organization_idTorganizationInput;

    @Field(() => organizationCreateWithoutTerminals_organization_idTorganizationInput, {nullable:false})
    @Type(() => organizationCreateWithoutTerminals_organization_idTorganizationInput)
    create!: organizationCreateWithoutTerminals_organization_idTorganizationInput;
}
