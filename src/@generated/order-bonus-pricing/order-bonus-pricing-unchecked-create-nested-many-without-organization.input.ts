import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_bonus_pricingCreateWithoutOrganizationInput } from './order-bonus-pricing-create-without-organization.input';
import { Type } from 'class-transformer';
import { order_bonus_pricingCreateOrConnectWithoutOrganizationInput } from './order-bonus-pricing-create-or-connect-without-organization.input';
import { order_bonus_pricingCreateManyOrganizationInputEnvelope } from './order-bonus-pricing-create-many-organization-input-envelope.input';
import { order_bonus_pricingWhereUniqueInput } from './order-bonus-pricing-where-unique.input';

@InputType()
export class order_bonus_pricingUncheckedCreateNestedManyWithoutOrganizationInput {

    @Field(() => [order_bonus_pricingCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => order_bonus_pricingCreateWithoutOrganizationInput)
    create?: Array<order_bonus_pricingCreateWithoutOrganizationInput>;

    @Field(() => [order_bonus_pricingCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => order_bonus_pricingCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<order_bonus_pricingCreateOrConnectWithoutOrganizationInput>;

    @Field(() => order_bonus_pricingCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => order_bonus_pricingCreateManyOrganizationInputEnvelope)
    createMany?: order_bonus_pricingCreateManyOrganizationInputEnvelope;

    @Field(() => [order_bonus_pricingWhereUniqueInput], {nullable:true})
    @Type(() => order_bonus_pricingWhereUniqueInput)
    connect?: Array<order_bonus_pricingWhereUniqueInput>;
}
