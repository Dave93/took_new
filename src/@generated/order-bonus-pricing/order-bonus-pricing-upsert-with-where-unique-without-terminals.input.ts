import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_bonus_pricingWhereUniqueInput } from './order-bonus-pricing-where-unique.input';
import { Type } from 'class-transformer';
import { order_bonus_pricingUpdateWithoutTerminalsInput } from './order-bonus-pricing-update-without-terminals.input';
import { order_bonus_pricingCreateWithoutTerminalsInput } from './order-bonus-pricing-create-without-terminals.input';

@InputType()
export class order_bonus_pricingUpsertWithWhereUniqueWithoutTerminalsInput {

    @Field(() => order_bonus_pricingWhereUniqueInput, {nullable:false})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    where!: order_bonus_pricingWhereUniqueInput;

    @Field(() => order_bonus_pricingUpdateWithoutTerminalsInput, {nullable:false})
    @Type(() => order_bonus_pricingUpdateWithoutTerminalsInput)
    update!: order_bonus_pricingUpdateWithoutTerminalsInput;

    @Field(() => order_bonus_pricingCreateWithoutTerminalsInput, {nullable:false})
    @Type(() => order_bonus_pricingCreateWithoutTerminalsInput)
    create!: order_bonus_pricingCreateWithoutTerminalsInput;
}
