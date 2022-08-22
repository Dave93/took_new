import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingCreateWithoutUsers_delivery_pricing_created_byTousersInput } from './delivery-pricing-create-without-users-delivery-pricing-created-by-tousers.input';
import { Type } from 'class-transformer';
import { delivery_pricingCreateOrConnectWithoutUsers_delivery_pricing_created_byTousersInput } from './delivery-pricing-create-or-connect-without-users-delivery-pricing-created-by-tousers.input';
import { delivery_pricingUpsertWithWhereUniqueWithoutUsers_delivery_pricing_created_byTousersInput } from './delivery-pricing-upsert-with-where-unique-without-users-delivery-pricing-created-by-tousers.input';
import { delivery_pricingCreateManyUsers_delivery_pricing_created_byTousersInputEnvelope } from './delivery-pricing-create-many-users-delivery-pricing-created-by-tousers-input-envelope.input';
import { delivery_pricingWhereUniqueInput } from './delivery-pricing-where-unique.input';
import { delivery_pricingUpdateWithWhereUniqueWithoutUsers_delivery_pricing_created_byTousersInput } from './delivery-pricing-update-with-where-unique-without-users-delivery-pricing-created-by-tousers.input';
import { delivery_pricingUpdateManyWithWhereWithoutUsers_delivery_pricing_created_byTousersInput } from './delivery-pricing-update-many-with-where-without-users-delivery-pricing-created-by-tousers.input';
import { delivery_pricingScalarWhereInput } from './delivery-pricing-scalar-where.input';

@InputType()
export class delivery_pricingUncheckedUpdateManyWithoutUsers_delivery_pricing_created_byTousersNestedInput {

    @Field(() => [delivery_pricingCreateWithoutUsers_delivery_pricing_created_byTousersInput], {nullable:true})
    @Type(() => delivery_pricingCreateWithoutUsers_delivery_pricing_created_byTousersInput)
    create?: Array<delivery_pricingCreateWithoutUsers_delivery_pricing_created_byTousersInput>;

    @Field(() => [delivery_pricingCreateOrConnectWithoutUsers_delivery_pricing_created_byTousersInput], {nullable:true})
    @Type(() => delivery_pricingCreateOrConnectWithoutUsers_delivery_pricing_created_byTousersInput)
    connectOrCreate?: Array<delivery_pricingCreateOrConnectWithoutUsers_delivery_pricing_created_byTousersInput>;

    @Field(() => [delivery_pricingUpsertWithWhereUniqueWithoutUsers_delivery_pricing_created_byTousersInput], {nullable:true})
    @Type(() => delivery_pricingUpsertWithWhereUniqueWithoutUsers_delivery_pricing_created_byTousersInput)
    upsert?: Array<delivery_pricingUpsertWithWhereUniqueWithoutUsers_delivery_pricing_created_byTousersInput>;

    @Field(() => delivery_pricingCreateManyUsers_delivery_pricing_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => delivery_pricingCreateManyUsers_delivery_pricing_created_byTousersInputEnvelope)
    createMany?: delivery_pricingCreateManyUsers_delivery_pricing_created_byTousersInputEnvelope;

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

    @Field(() => [delivery_pricingUpdateWithWhereUniqueWithoutUsers_delivery_pricing_created_byTousersInput], {nullable:true})
    @Type(() => delivery_pricingUpdateWithWhereUniqueWithoutUsers_delivery_pricing_created_byTousersInput)
    update?: Array<delivery_pricingUpdateWithWhereUniqueWithoutUsers_delivery_pricing_created_byTousersInput>;

    @Field(() => [delivery_pricingUpdateManyWithWhereWithoutUsers_delivery_pricing_created_byTousersInput], {nullable:true})
    @Type(() => delivery_pricingUpdateManyWithWhereWithoutUsers_delivery_pricing_created_byTousersInput)
    updateMany?: Array<delivery_pricingUpdateManyWithWhereWithoutUsers_delivery_pricing_created_byTousersInput>;

    @Field(() => [delivery_pricingScalarWhereInput], {nullable:true})
    @Type(() => delivery_pricingScalarWhereInput)
    deleteMany?: Array<delivery_pricingScalarWhereInput>;
}
