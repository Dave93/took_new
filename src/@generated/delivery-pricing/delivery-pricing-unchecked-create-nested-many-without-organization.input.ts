import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingCreateWithoutOrganizationInput } from './delivery-pricing-create-without-organization.input';
import { Type } from 'class-transformer';
import { delivery_pricingCreateOrConnectWithoutOrganizationInput } from './delivery-pricing-create-or-connect-without-organization.input';
import { delivery_pricingCreateManyOrganizationInputEnvelope } from './delivery-pricing-create-many-organization-input-envelope.input';
import { delivery_pricingWhereUniqueInput } from './delivery-pricing-where-unique.input';

@InputType()
export class delivery_pricingUncheckedCreateNestedManyWithoutOrganizationInput {

    @Field(() => [delivery_pricingCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => delivery_pricingCreateWithoutOrganizationInput)
    create?: Array<delivery_pricingCreateWithoutOrganizationInput>;

    @Field(() => [delivery_pricingCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => delivery_pricingCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<delivery_pricingCreateOrConnectWithoutOrganizationInput>;

    @Field(() => delivery_pricingCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => delivery_pricingCreateManyOrganizationInputEnvelope)
    createMany?: delivery_pricingCreateManyOrganizationInputEnvelope;

    @Field(() => [delivery_pricingWhereUniqueInput], {nullable:true})
    @Type(() => delivery_pricingWhereUniqueInput)
    connect?: Array<delivery_pricingWhereUniqueInput>;
}
