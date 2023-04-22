import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsUpdateWithoutOrder_bonus_pricingInput } from './terminals-update-without-order-bonus-pricing.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutOrder_bonus_pricingInput } from './terminals-create-without-order-bonus-pricing.input';

@InputType()
export class terminalsUpsertWithoutOrder_bonus_pricingInput {

    @Field(() => terminalsUpdateWithoutOrder_bonus_pricingInput, {nullable:false})
    @Type(() => terminalsUpdateWithoutOrder_bonus_pricingInput)
    update!: terminalsUpdateWithoutOrder_bonus_pricingInput;

    @Field(() => terminalsCreateWithoutOrder_bonus_pricingInput, {nullable:false})
    @Type(() => terminalsCreateWithoutOrder_bonus_pricingInput)
    create!: terminalsCreateWithoutOrder_bonus_pricingInput;
}
