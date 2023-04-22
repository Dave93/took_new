import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutOrder_bonus_pricingInput } from './terminals-create-without-order-bonus-pricing.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutOrder_bonus_pricingInput } from './terminals-create-or-connect-without-order-bonus-pricing.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';

@InputType()
export class terminalsCreateNestedOneWithoutOrder_bonus_pricingInput {

    @Field(() => terminalsCreateWithoutOrder_bonus_pricingInput, {nullable:true})
    @Type(() => terminalsCreateWithoutOrder_bonus_pricingInput)
    create?: terminalsCreateWithoutOrder_bonus_pricingInput;

    @Field(() => terminalsCreateOrConnectWithoutOrder_bonus_pricingInput, {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutOrder_bonus_pricingInput)
    connectOrCreate?: terminalsCreateOrConnectWithoutOrder_bonus_pricingInput;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: terminalsWhereUniqueInput;
}
