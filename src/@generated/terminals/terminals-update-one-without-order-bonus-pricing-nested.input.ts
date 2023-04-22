import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutOrder_bonus_pricingInput } from './terminals-create-without-order-bonus-pricing.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutOrder_bonus_pricingInput } from './terminals-create-or-connect-without-order-bonus-pricing.input';
import { terminalsUpsertWithoutOrder_bonus_pricingInput } from './terminals-upsert-without-order-bonus-pricing.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { terminalsUpdateWithoutOrder_bonus_pricingInput } from './terminals-update-without-order-bonus-pricing.input';

@InputType()
export class terminalsUpdateOneWithoutOrder_bonus_pricingNestedInput {

    @Field(() => terminalsCreateWithoutOrder_bonus_pricingInput, {nullable:true})
    @Type(() => terminalsCreateWithoutOrder_bonus_pricingInput)
    create?: terminalsCreateWithoutOrder_bonus_pricingInput;

    @Field(() => terminalsCreateOrConnectWithoutOrder_bonus_pricingInput, {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutOrder_bonus_pricingInput)
    connectOrCreate?: terminalsCreateOrConnectWithoutOrder_bonus_pricingInput;

    @Field(() => terminalsUpsertWithoutOrder_bonus_pricingInput, {nullable:true})
    @Type(() => terminalsUpsertWithoutOrder_bonus_pricingInput)
    upsert?: terminalsUpsertWithoutOrder_bonus_pricingInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: terminalsWhereUniqueInput;

    @Field(() => terminalsUpdateWithoutOrder_bonus_pricingInput, {nullable:true})
    @Type(() => terminalsUpdateWithoutOrder_bonus_pricingInput)
    update?: terminalsUpdateWithoutOrder_bonus_pricingInput;
}
