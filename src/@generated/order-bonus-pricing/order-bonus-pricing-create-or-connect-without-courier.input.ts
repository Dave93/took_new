import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_bonus_pricingWhereUniqueInput } from './order-bonus-pricing-where-unique.input';
import { Type } from 'class-transformer';
import { order_bonus_pricingCreateWithoutCourierInput } from './order-bonus-pricing-create-without-courier.input';

@InputType()
export class order_bonus_pricingCreateOrConnectWithoutCourierInput {

    @Field(() => order_bonus_pricingWhereUniqueInput, {nullable:false})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    where!: order_bonus_pricingWhereUniqueInput;

    @Field(() => order_bonus_pricingCreateWithoutCourierInput, {nullable:false})
    @Type(() => order_bonus_pricingCreateWithoutCourierInput)
    create!: order_bonus_pricingCreateWithoutCourierInput;
}
