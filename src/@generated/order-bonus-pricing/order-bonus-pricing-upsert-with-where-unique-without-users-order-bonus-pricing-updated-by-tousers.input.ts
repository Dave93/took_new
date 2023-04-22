import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_bonus_pricingWhereUniqueInput } from './order-bonus-pricing-where-unique.input';
import { Type } from 'class-transformer';
import { order_bonus_pricingUpdateWithoutUsers_order_bonus_pricing_updated_byTousersInput } from './order-bonus-pricing-update-without-users-order-bonus-pricing-updated-by-tousers.input';
import { order_bonus_pricingCreateWithoutUsers_order_bonus_pricing_updated_byTousersInput } from './order-bonus-pricing-create-without-users-order-bonus-pricing-updated-by-tousers.input';

@InputType()
export class order_bonus_pricingUpsertWithWhereUniqueWithoutUsers_order_bonus_pricing_updated_byTousersInput {

    @Field(() => order_bonus_pricingWhereUniqueInput, {nullable:false})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    where!: order_bonus_pricingWhereUniqueInput;

    @Field(() => order_bonus_pricingUpdateWithoutUsers_order_bonus_pricing_updated_byTousersInput, {nullable:false})
    @Type(() => order_bonus_pricingUpdateWithoutUsers_order_bonus_pricing_updated_byTousersInput)
    update!: order_bonus_pricingUpdateWithoutUsers_order_bonus_pricing_updated_byTousersInput;

    @Field(() => order_bonus_pricingCreateWithoutUsers_order_bonus_pricing_updated_byTousersInput, {nullable:false})
    @Type(() => order_bonus_pricingCreateWithoutUsers_order_bonus_pricing_updated_byTousersInput)
    create!: order_bonus_pricingCreateWithoutUsers_order_bonus_pricing_updated_byTousersInput;
}
