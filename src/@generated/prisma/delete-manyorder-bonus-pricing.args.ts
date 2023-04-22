import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_bonus_pricingWhereInput } from '../order-bonus-pricing/order-bonus-pricing-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyorderBonusPricingArgs {

    @Field(() => order_bonus_pricingWhereInput, {nullable:true})
    @Type(() => order_bonus_pricingWhereInput)
    where?: order_bonus_pricingWhereInput;
}
