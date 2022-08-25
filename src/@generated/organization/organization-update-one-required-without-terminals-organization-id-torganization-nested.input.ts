import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateWithoutTerminals_organization_idTorganizationInput } from './organization-create-without-terminals-organization-id-torganization.input';
import { Type } from 'class-transformer';
import { organizationCreateOrConnectWithoutTerminals_organization_idTorganizationInput } from './organization-create-or-connect-without-terminals-organization-id-torganization.input';
import { organizationUpsertWithoutTerminals_organization_idTorganizationInput } from './organization-upsert-without-terminals-organization-id-torganization.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { organizationUpdateWithoutTerminals_organization_idTorganizationInput } from './organization-update-without-terminals-organization-id-torganization.input';

@InputType()
export class organizationUpdateOneRequiredWithoutTerminals_organization_idTorganizationNestedInput {

    @Field(() => organizationCreateWithoutTerminals_organization_idTorganizationInput, {nullable:true})
    @Type(() => organizationCreateWithoutTerminals_organization_idTorganizationInput)
    create?: organizationCreateWithoutTerminals_organization_idTorganizationInput;

    @Field(() => organizationCreateOrConnectWithoutTerminals_organization_idTorganizationInput, {nullable:true})
    @Type(() => organizationCreateOrConnectWithoutTerminals_organization_idTorganizationInput)
    connectOrCreate?: organizationCreateOrConnectWithoutTerminals_organization_idTorganizationInput;

    @Field(() => organizationUpsertWithoutTerminals_organization_idTorganizationInput, {nullable:true})
    @Type(() => organizationUpsertWithoutTerminals_organization_idTorganizationInput)
    upsert?: organizationUpsertWithoutTerminals_organization_idTorganizationInput;

    @Field(() => organizationWhereUniqueInput, {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    connect?: organizationWhereUniqueInput;

    @Field(() => organizationUpdateWithoutTerminals_organization_idTorganizationInput, {nullable:true})
    @Type(() => organizationUpdateWithoutTerminals_organization_idTorganizationInput)
    update?: organizationUpdateWithoutTerminals_organization_idTorganizationInput;
}
