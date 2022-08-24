import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingWhereUniqueInput } from './delivery-pricing-where-unique.input';
import { Type } from 'class-transformer';
import { delivery_pricingUpdateWithoutDelivery_pricing_organization_idTousersInput } from './delivery-pricing-update-without-delivery-pricing-organization-id-tousers.input';
import { delivery_pricingCreateWithoutDelivery_pricing_organization_idTousersInput } from './delivery-pricing-create-without-delivery-pricing-organization-id-tousers.input';

@InputType()
export class delivery_pricingUpsertWithWhereUniqueWithoutDelivery_pricing_organization_idTousersInput {

    @Field(() => delivery_pricingWhereUniqueInput, {nullable:false})
    @Type(() => delivery_pricingWhereUniqueInput)
    where!: delivery_pricingWhereUniqueInput;

    @Field(() => delivery_pricingUpdateWithoutDelivery_pricing_organization_idTousersInput, {nullable:false})
    @Type(() => delivery_pricingUpdateWithoutDelivery_pricing_organization_idTousersInput)
    update!: delivery_pricingUpdateWithoutDelivery_pricing_organization_idTousersInput;

    @Field(() => delivery_pricingCreateWithoutDelivery_pricing_organization_idTousersInput, {nullable:false})
    @Type(() => delivery_pricingCreateWithoutDelivery_pricing_organization_idTousersInput)
    create!: delivery_pricingCreateWithoutDelivery_pricing_organization_idTousersInput;
}