import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_bonus_pricingCreateManyUsers_order_bonus_pricing_updated_byTousersInput } from './order-bonus-pricing-create-many-users-order-bonus-pricing-updated-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class order_bonus_pricingCreateManyUsers_order_bonus_pricing_updated_byTousersInputEnvelope {

    @Field(() => [order_bonus_pricingCreateManyUsers_order_bonus_pricing_updated_byTousersInput], {nullable:false})
    @Type(() => order_bonus_pricingCreateManyUsers_order_bonus_pricing_updated_byTousersInput)
    data!: Array<order_bonus_pricingCreateManyUsers_order_bonus_pricing_updated_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
