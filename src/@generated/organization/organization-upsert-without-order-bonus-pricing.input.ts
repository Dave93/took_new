import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationUpdateWithoutOrder_bonus_pricingInput } from './organization-update-without-order-bonus-pricing.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutOrder_bonus_pricingInput } from './organization-create-without-order-bonus-pricing.input';

@InputType()
export class organizationUpsertWithoutOrder_bonus_pricingInput {

    @Field(() => organizationUpdateWithoutOrder_bonus_pricingInput, {nullable:false})
    @Type(() => organizationUpdateWithoutOrder_bonus_pricingInput)
    update!: organizationUpdateWithoutOrder_bonus_pricingInput;

    @Field(() => organizationCreateWithoutOrder_bonus_pricingInput, {nullable:false})
    @Type(() => organizationCreateWithoutOrder_bonus_pricingInput)
    create!: organizationCreateWithoutOrder_bonus_pricingInput;
}
