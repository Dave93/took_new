import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationUpdateWithoutDelivery_pricing_organization_idTorganizationInput } from './organization-update-without-delivery-pricing-organization-id-torganization.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutDelivery_pricing_organization_idTorganizationInput } from './organization-create-without-delivery-pricing-organization-id-torganization.input';

@InputType()
export class organizationUpsertWithoutDelivery_pricing_organization_idTorganizationInput {

    @Field(() => organizationUpdateWithoutDelivery_pricing_organization_idTorganizationInput, {nullable:false})
    @Type(() => organizationUpdateWithoutDelivery_pricing_organization_idTorganizationInput)
    update!: organizationUpdateWithoutDelivery_pricing_organization_idTorganizationInput;

    @Field(() => organizationCreateWithoutDelivery_pricing_organization_idTorganizationInput, {nullable:false})
    @Type(() => organizationCreateWithoutDelivery_pricing_organization_idTorganizationInput)
    create!: organizationCreateWithoutDelivery_pricing_organization_idTorganizationInput;
}
