import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_bonus_pricingUpdateManyMutationInput } from '../order-bonus-pricing/order-bonus-pricing-update-many-mutation.input';
import { Type } from 'class-transformer';
import { order_bonus_pricingWhereInput } from '../order-bonus-pricing/order-bonus-pricing-where.input';

@ArgsType()
export class UpdateManyorderBonusPricingArgs {

    @Field(() => order_bonus_pricingUpdateManyMutationInput, {nullable:false})
    @Type(() => order_bonus_pricingUpdateManyMutationInput)
    data!: order_bonus_pricingUpdateManyMutationInput;

    @Field(() => order_bonus_pricingWhereInput, {nullable:true})
    @Type(() => order_bonus_pricingWhereInput)
    where?: order_bonus_pricingWhereInput;
}
