import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_bonus_pricingWhereUniqueInput } from '../order-bonus-pricing/order-bonus-pricing-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneorderBonusPricingArgs {

    @Field(() => order_bonus_pricingWhereUniqueInput, {nullable:false})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    where!: order_bonus_pricingWhereUniqueInput;
}
