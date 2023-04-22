import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_bonus_pricingCreateInput } from '../order-bonus-pricing/order-bonus-pricing-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneorderBonusPricingArgs {

    @Field(() => order_bonus_pricingCreateInput, {nullable:false})
    @Type(() => order_bonus_pricingCreateInput)
    data!: order_bonus_pricingCreateInput;
}
