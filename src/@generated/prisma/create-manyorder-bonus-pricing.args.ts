import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_bonus_pricingCreateManyInput } from '../order-bonus-pricing/order-bonus-pricing-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyorderBonusPricingArgs {

    @Field(() => [order_bonus_pricingCreateManyInput], {nullable:false})
    @Type(() => order_bonus_pricingCreateManyInput)
    data!: Array<order_bonus_pricingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
