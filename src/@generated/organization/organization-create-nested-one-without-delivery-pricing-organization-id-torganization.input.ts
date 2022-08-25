import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationCreateWithoutDelivery_pricing_organization_idTorganizationInput } from './organization-create-without-delivery-pricing-organization-id-torganization.input';
import { Type } from 'class-transformer';
import { organizationCreateOrConnectWithoutDelivery_pricing_organization_idTorganizationInput } from './organization-create-or-connect-without-delivery-pricing-organization-id-torganization.input';
import { organizationWhereUniqueInput } from './organization-where-unique.input';

@InputType()
export class organizationCreateNestedOneWithoutDelivery_pricing_organization_idTorganizationInput {

    @Field(() => organizationCreateWithoutDelivery_pricing_organization_idTorganizationInput, {nullable:true})
    @Type(() => organizationCreateWithoutDelivery_pricing_organization_idTorganizationInput)
    create?: organizationCreateWithoutDelivery_pricing_organization_idTorganizationInput;

    @Field(() => organizationCreateOrConnectWithoutDelivery_pricing_organization_idTorganizationInput, {nullable:true})
    @Type(() => organizationCreateOrConnectWithoutDelivery_pricing_organization_idTorganizationInput)
    connectOrCreate?: organizationCreateOrConnectWithoutDelivery_pricing_organization_idTorganizationInput;

    @Field(() => organizationWhereUniqueInput, {nullable:true})
    @Type(() => organizationWhereUniqueInput)
    connect?: organizationWhereUniqueInput;
}
