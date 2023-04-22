import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_bonus_pricingCreateWithoutUsers_order_bonus_pricing_created_byTousersInput } from './order-bonus-pricing-create-without-users-order-bonus-pricing-created-by-tousers.input';
import { Type } from 'class-transformer';
import { order_bonus_pricingCreateOrConnectWithoutUsers_order_bonus_pricing_created_byTousersInput } from './order-bonus-pricing-create-or-connect-without-users-order-bonus-pricing-created-by-tousers.input';
import { order_bonus_pricingCreateManyUsers_order_bonus_pricing_created_byTousersInputEnvelope } from './order-bonus-pricing-create-many-users-order-bonus-pricing-created-by-tousers-input-envelope.input';
import { order_bonus_pricingWhereUniqueInput } from './order-bonus-pricing-where-unique.input';

@InputType()
export class order_bonus_pricingCreateNestedManyWithoutUsers_order_bonus_pricing_created_byTousersInput {

    @Field(() => [order_bonus_pricingCreateWithoutUsers_order_bonus_pricing_created_byTousersInput], {nullable:true})
    @Type(() => order_bonus_pricingCreateWithoutUsers_order_bonus_pricing_created_byTousersInput)
    create?: Array<order_bonus_pricingCreateWithoutUsers_order_bonus_pricing_created_byTousersInput>;

    @Field(() => [order_bonus_pricingCreateOrConnectWithoutUsers_order_bonus_pricing_created_byTousersInput], {nullable:true})
    @Type(() => order_bonus_pricingCreateOrConnectWithoutUsers_order_bonus_pricing_created_byTousersInput)
    connectOrCreate?: Array<order_bonus_pricingCreateOrConnectWithoutUsers_order_bonus_pricing_created_byTousersInput>;

    @Field(() => order_bonus_pricingCreateManyUsers_order_bonus_pricing_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => order_bonus_pricingCreateManyUsers_order_bonus_pricing_created_byTousersInputEnvelope)
    createMany?: order_bonus_pricingCreateManyUsers_order_bonus_pricing_created_byTousersInputEnvelope;

    @Field(() => [order_bonus_pricingWhereUniqueInput], {nullable:true})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    connect?: Array<order_bonus_pricingWhereUniqueInput>;
}
