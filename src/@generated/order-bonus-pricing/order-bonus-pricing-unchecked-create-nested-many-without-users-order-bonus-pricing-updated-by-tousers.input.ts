import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_bonus_pricingCreateWithoutUsers_order_bonus_pricing_updated_byTousersInput } from './order-bonus-pricing-create-without-users-order-bonus-pricing-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { order_bonus_pricingCreateOrConnectWithoutUsers_order_bonus_pricing_updated_byTousersInput } from './order-bonus-pricing-create-or-connect-without-users-order-bonus-pricing-updated-by-tousers.input';
import { order_bonus_pricingCreateManyUsers_order_bonus_pricing_updated_byTousersInputEnvelope } from './order-bonus-pricing-create-many-users-order-bonus-pricing-updated-by-tousers-input-envelope.input';
import { order_bonus_pricingWhereUniqueInput } from './order-bonus-pricing-where-unique.input';

@InputType()
export class order_bonus_pricingUncheckedCreateNestedManyWithoutUsers_order_bonus_pricing_updated_byTousersInput {

    @Field(() => [order_bonus_pricingCreateWithoutUsers_order_bonus_pricing_updated_byTousersInput], {nullable:true})
    @Type(() => order_bonus_pricingCreateWithoutUsers_order_bonus_pricing_updated_byTousersInput)
    create?: Array<order_bonus_pricingCreateWithoutUsers_order_bonus_pricing_updated_byTousersInput>;

    @Field(() => [order_bonus_pricingCreateOrConnectWithoutUsers_order_bonus_pricing_updated_byTousersInput], {nullable:true})
    @Type(() => order_bonus_pricingCreateOrConnectWithoutUsers_order_bonus_pricing_updated_byTousersInput)
    connectOrCreate?: Array<order_bonus_pricingCreateOrConnectWithoutUsers_order_bonus_pricing_updated_byTousersInput>;

    @Field(() => order_bonus_pricingCreateManyUsers_order_bonus_pricing_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => order_bonus_pricingCreateManyUsers_order_bonus_pricing_updated_byTousersInputEnvelope)
    createMany?: order_bonus_pricingCreateManyUsers_order_bonus_pricing_updated_byTousersInputEnvelope;

    @Field(() => [order_bonus_pricingWhereUniqueInput], {nullable:true})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    connect?: Array<order_bonus_pricingWhereUniqueInput>;
}
