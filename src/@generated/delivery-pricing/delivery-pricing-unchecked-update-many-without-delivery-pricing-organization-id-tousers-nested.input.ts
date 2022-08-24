import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingCreateWithoutDelivery_pricing_organization_idTousersInput } from './delivery-pricing-create-without-delivery-pricing-organization-id-tousers.input';
import { Type } from 'class-transformer';
import { delivery_pricingCreateOrConnectWithoutDelivery_pricing_organization_idTousersInput } from './delivery-pricing-create-or-connect-without-delivery-pricing-organization-id-tousers.input';
import { delivery_pricingUpsertWithWhereUniqueWithoutDelivery_pricing_organization_idTousersInput } from './delivery-pricing-upsert-with-where-unique-without-delivery-pricing-organization-id-tousers.input';
import { delivery_pricingCreateManyDelivery_pricing_organization_idTousersInputEnvelope } from './delivery-pricing-create-many-delivery-pricing-organization-id-tousers-input-envelope.input';
import { delivery_pricingWhereUniqueInput } from './delivery-pricing-where-unique.input';
import { delivery_pricingUpdateWithWhereUniqueWithoutDelivery_pricing_organization_idTousersInput } from './delivery-pricing-update-with-where-unique-without-delivery-pricing-organization-id-tousers.input';
import { delivery_pricingUpdateManyWithWhereWithoutDelivery_pricing_organization_idTousersInput } from './delivery-pricing-update-many-with-where-without-delivery-pricing-organization-id-tousers.input';
import { delivery_pricingScalarWhereInput } from './delivery-pricing-scalar-where.input';

@InputType()
export class delivery_pricingUncheckedUpdateManyWithoutDelivery_pricing_organization_idTousersNestedInput {

    @Field(() => [delivery_pricingCreateWithoutDelivery_pricing_organization_idTousersInput], {nullable:true})
    @Type(() => delivery_pricingCreateWithoutDelivery_pricing_organization_idTousersInput)
    create?: Array<delivery_pricingCreateWithoutDelivery_pricing_organization_idTousersInput>;

    @Field(() => [delivery_pricingCreateOrConnectWithoutDelivery_pricing_organization_idTousersInput], {nullable:true})
    @Type(() => delivery_pricingCreateOrConnectWithoutDelivery_pricing_organization_idTousersInput)
    connectOrCreate?: Array<delivery_pricingCreateOrConnectWithoutDelivery_pricing_organization_idTousersInput>;

    @Field(() => [delivery_pricingUpsertWithWhereUniqueWithoutDelivery_pricing_organization_idTousersInput], {nullable:true})
    @Type(() => delivery_pricingUpsertWithWhereUniqueWithoutDelivery_pricing_organization_idTousersInput)
    upsert?: Array<delivery_pricingUpsertWithWhereUniqueWithoutDelivery_pricing_organization_idTousersInput>;

    @Field(() => delivery_pricingCreateManyDelivery_pricing_organization_idTousersInputEnvelope, {nullable:true})
    @Type(() => delivery_pricingCreateManyDelivery_pricing_organization_idTousersInputEnvelope)
    createMany?: delivery_pricingCreateManyDelivery_pricing_organization_idTousersInputEnvelope;

    @Field(() => [delivery_pricingWhereUniqueInput], {nullable:true})
    @Type(() => delivery_pricingWhereUniqueInput)
    set?: Array<delivery_pricingWhereUniqueInput>;

    @Field(() => [delivery_pricingWhereUniqueInput], {nullable:true})
    @Type(() => delivery_pricingWhereUniqueInput)
    disconnect?: Array<delivery_pricingWhereUniqueInput>;

    @Field(() => [delivery_pricingWhereUniqueInput], {nullable:true})
    @Type(() => delivery_pricingWhereUniqueInput)
    delete?: Array<delivery_pricingWhereUniqueInput>;

    @Field(() => [delivery_pricingWhereUniqueInput], {nullable:true})
    @Type(() => delivery_pricingWhereUniqueInput)
    connect?: Array<delivery_pricingWhereUniqueInput>;

    @Field(() => [delivery_pricingUpdateWithWhereUniqueWithoutDelivery_pricing_organization_idTousersInput], {nullable:true})
    @Type(() => delivery_pricingUpdateWithWhereUniqueWithoutDelivery_pricing_organization_idTousersInput)
    update?: Array<delivery_pricingUpdateWithWhereUniqueWithoutDelivery_pricing_organization_idTousersInput>;

    @Field(() => [delivery_pricingUpdateManyWithWhereWithoutDelivery_pricing_organization_idTousersInput], {nullable:true})
    @Type(() => delivery_pricingUpdateManyWithWhereWithoutDelivery_pricing_organization_idTousersInput)
    updateMany?: Array<delivery_pricingUpdateManyWithWhereWithoutDelivery_pricing_organization_idTousersInput>;

    @Field(() => [delivery_pricingScalarWhereInput], {nullable:true})
    @Type(() => delivery_pricingScalarWhereInput)
    deleteMany?: Array<delivery_pricingScalarWhereInput>;
}
