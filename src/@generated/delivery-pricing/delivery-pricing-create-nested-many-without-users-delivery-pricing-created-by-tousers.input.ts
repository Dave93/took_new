import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingCreateWithoutUsers_delivery_pricing_created_byTousersInput } from './delivery-pricing-create-without-users-delivery-pricing-created-by-tousers.input';
import { Type } from 'class-transformer';
import { delivery_pricingCreateOrConnectWithoutUsers_delivery_pricing_created_byTousersInput } from './delivery-pricing-create-or-connect-without-users-delivery-pricing-created-by-tousers.input';
import { delivery_pricingCreateManyUsers_delivery_pricing_created_byTousersInputEnvelope } from './delivery-pricing-create-many-users-delivery-pricing-created-by-tousers-input-envelope.input';
import { delivery_pricingWhereUniqueInput } from './delivery-pricing-where-unique.input';

@InputType()
export class delivery_pricingCreateNestedManyWithoutUsers_delivery_pricing_created_byTousersInput {

    @Field(() => [delivery_pricingCreateWithoutUsers_delivery_pricing_created_byTousersInput], {nullable:true})
    @Type(() => delivery_pricingCreateWithoutUsers_delivery_pricing_created_byTousersInput)
    create?: Array<delivery_pricingCreateWithoutUsers_delivery_pricing_created_byTousersInput>;

    @Field(() => [delivery_pricingCreateOrConnectWithoutUsers_delivery_pricing_created_byTousersInput], {nullable:true})
    @Type(() => delivery_pricingCreateOrConnectWithoutUsers_delivery_pricing_created_byTousersInput)
    connectOrCreate?: Array<delivery_pricingCreateOrConnectWithoutUsers_delivery_pricing_created_byTousersInput>;

    @Field(() => delivery_pricingCreateManyUsers_delivery_pricing_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => delivery_pricingCreateManyUsers_delivery_pricing_created_byTousersInputEnvelope)
    createMany?: delivery_pricingCreateManyUsers_delivery_pricing_created_byTousersInputEnvelope;

    @Field(() => [delivery_pricingWhereUniqueInput], {nullable:true})
    @Type(() => delivery_pricingWhereUniqueInput)
    connect?: Array<delivery_pricingWhereUniqueInput>;
}
