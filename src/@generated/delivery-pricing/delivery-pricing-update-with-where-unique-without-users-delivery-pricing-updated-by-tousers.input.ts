import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingWhereUniqueInput } from './delivery-pricing-where-unique.input';
import { Type } from 'class-transformer';
import { delivery_pricingUpdateWithoutUsers_delivery_pricing_updated_byTousersInput } from './delivery-pricing-update-without-users-delivery-pricing-updated-by-tousers.input';

@InputType()
export class delivery_pricingUpdateWithWhereUniqueWithoutUsers_delivery_pricing_updated_byTousersInput {

    @Field(() => delivery_pricingWhereUniqueInput, {nullable:false})
    @Type(() => delivery_pricingWhereUniqueInput)
    where!: delivery_pricingWhereUniqueInput;

    @Field(() => delivery_pricingUpdateWithoutUsers_delivery_pricing_updated_byTousersInput, {nullable:false})
    @Type(() => delivery_pricingUpdateWithoutUsers_delivery_pricing_updated_byTousersInput)
    data!: delivery_pricingUpdateWithoutUsers_delivery_pricing_updated_byTousersInput;
}
