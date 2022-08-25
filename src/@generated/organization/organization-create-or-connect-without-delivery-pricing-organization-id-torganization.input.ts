import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutDelivery_pricing_organization_idTorganizationInput } from './organization-create-without-delivery-pricing-organization-id-torganization.input';

@InputType()
export class organizationCreateOrConnectWithoutDelivery_pricing_organization_idTorganizationInput {

    @Field(() => organizationWhereUniqueInput, {nullable:false})
    @Type(() => organizationWhereUniqueInput)
    where!: organizationWhereUniqueInput;

    @Field(() => organizationCreateWithoutDelivery_pricing_organization_idTorganizationInput, {nullable:false})
    @Type(() => organizationCreateWithoutDelivery_pricing_organization_idTorganizationInput)
    create!: organizationCreateWithoutDelivery_pricing_organization_idTorganizationInput;
}
