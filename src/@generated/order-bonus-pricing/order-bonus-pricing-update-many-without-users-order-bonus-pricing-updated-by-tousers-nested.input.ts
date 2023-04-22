import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_bonus_pricingCreateWithoutUsers_order_bonus_pricing_updated_byTousersInput } from './order-bonus-pricing-create-without-users-order-bonus-pricing-updated-by-tousers.input';
import { Type } from 'class-transformer';
import { order_bonus_pricingCreateOrConnectWithoutUsers_order_bonus_pricing_updated_byTousersInput } from './order-bonus-pricing-create-or-connect-without-users-order-bonus-pricing-updated-by-tousers.input';
import { order_bonus_pricingUpsertWithWhereUniqueWithoutUsers_order_bonus_pricing_updated_byTousersInput } from './order-bonus-pricing-upsert-with-where-unique-without-users-order-bonus-pricing-updated-by-tousers.input';
import { order_bonus_pricingCreateManyUsers_order_bonus_pricing_updated_byTousersInputEnvelope } from './order-bonus-pricing-create-many-users-order-bonus-pricing-updated-by-tousers-input-envelope.input';
import { order_bonus_pricingWhereUniqueInput } from './order-bonus-pricing-where-unique.input';
import { order_bonus_pricingUpdateWithWhereUniqueWithoutUsers_order_bonus_pricing_updated_byTousersInput } from './order-bonus-pricing-update-with-where-unique-without-users-order-bonus-pricing-updated-by-tousers.input';
import { order_bonus_pricingUpdateManyWithWhereWithoutUsers_order_bonus_pricing_updated_byTousersInput } from './order-bonus-pricing-update-many-with-where-without-users-order-bonus-pricing-updated-by-tousers.input';
import { order_bonus_pricingScalarWhereInput } from './order-bonus-pricing-scalar-where.input';

@InputType()
export class order_bonus_pricingUpdateManyWithoutUsers_order_bonus_pricing_updated_byTousersNestedInput {

    @Field(() => [order_bonus_pricingCreateWithoutUsers_order_bonus_pricing_updated_byTousersInput], {nullable:true})
    @Type(() => order_bonus_pricingCreateWithoutUsers_order_bonus_pricing_updated_byTousersInput)
    create?: Array<order_bonus_pricingCreateWithoutUsers_order_bonus_pricing_updated_byTousersInput>;

    @Field(() => [order_bonus_pricingCreateOrConnectWithoutUsers_order_bonus_pricing_updated_byTousersInput], {nullable:true})
    @Type(() => order_bonus_pricingCreateOrConnectWithoutUsers_order_bonus_pricing_updated_byTousersInput)
    connectOrCreate?: Array<order_bonus_pricingCreateOrConnectWithoutUsers_order_bonus_pricing_updated_byTousersInput>;

    @Field(() => [order_bonus_pricingUpsertWithWhereUniqueWithoutUsers_order_bonus_pricing_updated_byTousersInput], {nullable:true})
    @Type(() => order_bonus_pricingUpsertWithWhereUniqueWithoutUsers_order_bonus_pricing_updated_byTousersInput)
    upsert?: Array<order_bonus_pricingUpsertWithWhereUniqueWithoutUsers_order_bonus_pricing_updated_byTousersInput>;

    @Field(() => order_bonus_pricingCreateManyUsers_order_bonus_pricing_updated_byTousersInputEnvelope, {nullable:true})
    @Type(() => order_bonus_pricingCreateManyUsers_order_bonus_pricing_updated_byTousersInputEnvelope)
    createMany?: order_bonus_pricingCreateManyUsers_order_bonus_pricing_updated_byTousersInputEnvelope;

    @Field(() => [order_bonus_pricingWhereUniqueInput], {nullable:true})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    set?: Array<order_bonus_pricingWhereUniqueInput>;

    @Field(() => [order_bonus_pricingWhereUniqueInput], {nullable:true})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    disconnect?: Array<order_bonus_pricingWhereUniqueInput>;

    @Field(() => [order_bonus_pricingWhereUniqueInput], {nullable:true})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    delete?: Array<order_bonus_pricingWhereUniqueInput>;

    @Field(() => [order_bonus_pricingWhereUniqueInput], {nullable:true})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    connect?: Array<order_bonus_pricingWhereUniqueInput>;

    @Field(() => [order_bonus_pricingUpdateWithWhereUniqueWithoutUsers_order_bonus_pricing_updated_byTousersInput], {nullable:true})
    @Type(() => order_bonus_pricingUpdateWithWhereUniqueWithoutUsers_order_bonus_pricing_updated_byTousersInput)
    update?: Array<order_bonus_pricingUpdateWithWhereUniqueWithoutUsers_order_bonus_pricing_updated_byTousersInput>;

    @Field(() => [order_bonus_pricingUpdateManyWithWhereWithoutUsers_order_bonus_pricing_updated_byTousersInput], {nullable:true})
    @Type(() => order_bonus_pricingUpdateManyWithWhereWithoutUsers_order_bonus_pricing_updated_byTousersInput)
    updateMany?: Array<order_bonus_pricingUpdateManyWithWhereWithoutUsers_order_bonus_pricing_updated_byTousersInput>;

    @Field(() => [order_bonus_pricingScalarWhereInput], {nullable:true})
    @Type(() => order_bonus_pricingScalarWhereInput)
    deleteMany?: Array<order_bonus_pricingScalarWhereInput>;
}
