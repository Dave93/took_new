import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_bonus_pricingWhereUniqueInput } from '../order-bonus-pricing/order-bonus-pricing-where-unique.input';
import { Type } from 'class-transformer';
import { order_bonus_pricingCreateInput } from '../order-bonus-pricing/order-bonus-pricing-create.input';
import { order_bonus_pricingUpdateInput } from '../order-bonus-pricing/order-bonus-pricing-update.input';

@ArgsType()
export class UpsertOneorderBonusPricingArgs {

    @Field(() => order_bonus_pricingWhereUniqueInput, {nullable:false})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    where!: order_bonus_pricingWhereUniqueInput;

    @Field(() => order_bonus_pricingCreateInput, {nullable:false})
    @Type(() => order_bonus_pricingCreateInput)
    create!: order_bonus_pricingCreateInput;

    @Field(() => order_bonus_pricingUpdateInput, {nullable:false})
    @Type(() => order_bonus_pricingUpdateInput)
    update!: order_bonus_pricingUpdateInput;
}
