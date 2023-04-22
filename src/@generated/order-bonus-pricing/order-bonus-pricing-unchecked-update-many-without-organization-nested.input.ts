import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_bonus_pricingCreateWithoutOrganizationInput } from './order-bonus-pricing-create-without-organization.input';
import { Type } from 'class-transformer';
import { order_bonus_pricingCreateOrConnectWithoutOrganizationInput } from './order-bonus-pricing-create-or-connect-without-organization.input';
import { order_bonus_pricingUpsertWithWhereUniqueWithoutOrganizationInput } from './order-bonus-pricing-upsert-with-where-unique-without-organization.input';
import { order_bonus_pricingCreateManyOrganizationInputEnvelope } from './order-bonus-pricing-create-many-organization-input-envelope.input';
import { order_bonus_pricingWhereUniqueInput } from './order-bonus-pricing-where-unique.input';
import { order_bonus_pricingUpdateWithWhereUniqueWithoutOrganizationInput } from './order-bonus-pricing-update-with-where-unique-without-organization.input';
import { order_bonus_pricingUpdateManyWithWhereWithoutOrganizationInput } from './order-bonus-pricing-update-many-with-where-without-organization.input';
import { order_bonus_pricingScalarWhereInput } from './order-bonus-pricing-scalar-where.input';

@InputType()
export class order_bonus_pricingUncheckedUpdateManyWithoutOrganizationNestedInput {

    @Field(() => [order_bonus_pricingCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => order_bonus_pricingCreateWithoutOrganizationInput)
    create?: Array<order_bonus_pricingCreateWithoutOrganizationInput>;

    @Field(() => [order_bonus_pricingCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => order_bonus_pricingCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<order_bonus_pricingCreateOrConnectWithoutOrganizationInput>;

    @Field(() => [order_bonus_pricingUpsertWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => order_bonus_pricingUpsertWithWhereUniqueWithoutOrganizationInput)
    upsert?: Array<order_bonus_pricingUpsertWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => order_bonus_pricingCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => order_bonus_pricingCreateManyOrganizationInputEnvelope)
    createMany?: order_bonus_pricingCreateManyOrganizationInputEnvelope;

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

    @Field(() => [order_bonus_pricingUpdateWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => order_bonus_pricingUpdateWithWhereUniqueWithoutOrganizationInput)
    update?: Array<order_bonus_pricingUpdateWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => [order_bonus_pricingUpdateManyWithWhereWithoutOrganizationInput], {nullable:true})
    @Type(() => order_bonus_pricingUpdateManyWithWhereWithoutOrganizationInput)
    updateMany?: Array<order_bonus_pricingUpdateManyWithWhereWithoutOrganizationInput>;

    @Field(() => [order_bonus_pricingScalarWhereInput], {nullable:true})
    @Type(() => order_bonus_pricingScalarWhereInput)
    deleteMany?: Array<order_bonus_pricingScalarWhereInput>;
}
