import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { organizationWhereUniqueInput } from './organization-where-unique.input';
import { Type } from 'class-transformer';
import { organizationCreateWithoutOrder_bonus_pricingInput } from './organization-create-without-order-bonus-pricing.input';

@InputType()
export class organizationCreateOrConnectWithoutOrder_bonus_pricingInput {

    @Field(() => organizationWhereUniqueInput, {nullable:false})
    @Type(() => organizationWhereUniqueInput)
    where!: organizationWhereUniqueInput;

    @Field(() => organizationCreateWithoutOrder_bonus_pricingInput, {nullable:false})
    @Type(() => organizationCreateWithoutOrder_bonus_pricingInput)
    create!: organizationCreateWithoutOrder_bonus_pricingInput;
}
