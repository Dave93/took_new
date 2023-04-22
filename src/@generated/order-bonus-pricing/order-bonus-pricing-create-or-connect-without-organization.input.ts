import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_bonus_pricingWhereUniqueInput } from './order-bonus-pricing-where-unique.input';
import { Type } from 'class-transformer';
import { order_bonus_pricingCreateWithoutOrganizationInput } from './order-bonus-pricing-create-without-organization.input';

@InputType()
export class order_bonus_pricingCreateOrConnectWithoutOrganizationInput {

    @Field(() => order_bonus_pricingWhereUniqueInput, {nullable:false})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    where!: order_bonus_pricingWhereUniqueInput;

    @Field(() => order_bonus_pricingCreateWithoutOrganizationInput, {nullable:false})
    @Type(() => order_bonus_pricingCreateWithoutOrganizationInput)
    create!: order_bonus_pricingCreateWithoutOrganizationInput;
}
