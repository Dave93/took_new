import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateWithoutDelivery_pricing_organization_idTorganizationInput } from './organization-create-without-delivery-pricing-organization-id-torganization.input';
import { Type } from 'class-transformer';
import { organizationCreateOrConnectWithoutDelivery_pricing_organization_idTorganizationInput } from './organization-create-or-connect-without-delivery-pricing-organization-id-torganization.input';
import { organizationUpsertWithoutDelivery_pricing_organization_idTorganizationInput } from './organization-upsert-without-delivery-pricing-organization-id-torganization.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { organizationUpdateWithoutDelivery_pricing_organization_idTorganizationInput } from './organization-update-without-delivery-pricing-organization-id-torganization.input';

@InputType()
export class organizationUpdateOneRequiredWithoutDelivery_pricing_organization_idTorganizationNestedInput {

    @Field(() => organizationCreateWithoutDelivery_pricing_organization_idTorganizationInput, {nullable:true})
    @Type(() => organizationCreateWithoutDelivery_pricing_organization_idTorganizationInput)
    create?: organizationCreateWithoutDelivery_pricing_organization_idTorganizationInput;

    @Field(() => organizationCreateOrConnectWithoutDelivery_pricing_organization_idTorganizationInput, {nullable:true})
    @Type(() => organizationCreateOrConnectWithoutDelivery_pricing_organization_idTorganizationInput)
    connectOrCreate?: organizationCreateOrConnectWithoutDelivery_pricing_organization_idTorganizationInput;

    @Field(() => organizationUpsertWithoutDelivery_pricing_organization_idTorganizationInput, {nullable:true})
    @Type(() => organizationUpsertWithoutDelivery_pricing_organization_idTorganizationInput)
    upsert?: organizationUpsertWithoutDelivery_pricing_organization_idTorganizationInput;

    @Field(() => organizationWhereUniqueInput, {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    connect?: organizationWhereUniqueInput;

    @Field(() => organizationUpdateWithoutDelivery_pricing_organization_idTorganizationInput, {nullable:true})
    @Type(() => organizationUpdateWithoutDelivery_pricing_organization_idTorganizationInput)
    update?: organizationUpdateWithoutDelivery_pricing_organization_idTorganizationInput;
}
