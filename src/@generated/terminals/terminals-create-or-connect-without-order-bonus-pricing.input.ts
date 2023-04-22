import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutOrder_bonus_pricingInput } from './terminals-create-without-order-bonus-pricing.input';

@InputType()
export class terminalsCreateOrConnectWithoutOrder_bonus_pricingInput {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;

    @Field(() => terminalsCreateWithoutOrder_bonus_pricingInput, {nullable:false})
    @Type(() => terminalsCreateWithoutOrder_bonus_pricingInput)
    create!: terminalsCreateWithoutOrder_bonus_pricingInput;
}
