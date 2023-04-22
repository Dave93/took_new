import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_bonus_pricingWhereInput } from '../order-bonus-pricing/order-bonus-pricing-where.input';

@InputType()
export class Order_bonus_pricingListRelationFilter {

    @Field(() => order_bonus_pricingWhereInput, {nullable:true})
    every?: order_bonus_pricingWhereInput;

    @Field(() => order_bonus_pricingWhereInput, {nullable:true})
    some?: order_bonus_pricingWhereInput;

    @Field(() => order_bonus_pricingWhereInput, {nullable:true})
    none?: order_bonus_pricingWhereInput;
}
