import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_bonus_pricingUpdateInput } from '../order-bonus-pricing/order-bonus-pricing-update.input';
import { Type } from 'class-transformer';
import { order_bonus_pricingWhereUniqueInput } from '../order-bonus-pricing/order-bonus-pricing-where-unique.input';

@ArgsType()
export class UpdateOneorderBonusPricingArgs {

    @Field(() => order_bonus_pricingUpdateInput, {nullable:false})
    @Type(() => order_bonus_pricingUpdateInput)
    data!: order_bonus_pricingUpdateInput;

    @Field(() => order_bonus_pricingWhereUniqueInput, {nullable:false})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    where!: order_bonus_pricingWhereUniqueInput;
}
