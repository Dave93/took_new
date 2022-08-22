import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingWhereUniqueInput } from './delivery-pricing-where-unique.input';
import { Type } from 'class-transformer';
import { delivery_pricingUpdateWithoutUsers_delivery_pricing_updated_byTousersInput } from './delivery-pricing-update-without-users-delivery-pricing-updated-by-tousers.input';
import { delivery_pricingCreateWithoutUsers_delivery_pricing_updated_byTousersInput } from './delivery-pricing-create-without-users-delivery-pricing-updated-by-tousers.input';

@InputType()
export class delivery_pricingUpsertWithWhereUniqueWithoutUsers_delivery_pricing_updated_byTousersInput {

    @Field(() => delivery_pricingWhereUniqueInput, {nullable:false})
    @Type(() => delivery_pricingWhereUniqueInput)
    where!: delivery_pricingWhereUniqueInput;

    @Field(() => delivery_pricingUpdateWithoutUsers_delivery_pricing_updated_byTousersInput, {nullable:false})
    @Type(() => delivery_pricingUpdateWithoutUsers_delivery_pricing_updated_byTousersInput)
    update!: delivery_pricingUpdateWithoutUsers_delivery_pricing_updated_byTousersInput;

    @Field(() => delivery_pricingCreateWithoutUsers_delivery_pricing_updated_byTousersInput, {nullable:false})
    @Type(() => delivery_pricingCreateWithoutUsers_delivery_pricing_updated_byTousersInput)
    create!: delivery_pricingCreateWithoutUsers_delivery_pricing_updated_byTousersInput;
}
