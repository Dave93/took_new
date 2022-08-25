import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingCreateWithoutOrganizationInput } from './delivery-pricing-create-without-organization.input';
import { Type } from 'class-transformer';
import { delivery_pricingCreateOrConnectWithoutOrganizationInput } from './delivery-pricing-create-or-connect-without-organization.input';
import { delivery_pricingUpsertWithWhereUniqueWithoutOrganizationInput } from './delivery-pricing-upsert-with-where-unique-without-organization.input';
import { delivery_pricingCreateManyOrganizationInputEnvelope } from './delivery-pricing-create-many-organization-input-envelope.input';
import { delivery_pricingWhereUniqueInput } from './delivery-pricing-where-unique.input';
import { delivery_pricingUpdateWithWhereUniqueWithoutOrganizationInput } from './delivery-pricing-update-with-where-unique-without-organization.input';
import { delivery_pricingUpdateManyWithWhereWithoutOrganizationInput } from './delivery-pricing-update-many-with-where-without-organization.input';
import { delivery_pricingScalarWhereInput } from './delivery-pricing-scalar-where.input';

@InputType()
export class delivery_pricingUpdateManyWithoutOrganizationNestedInput {

    @Field(() => [delivery_pricingCreateWithoutOrganizationInput], {nullable:true})
    @Type(() => delivery_pricingCreateWithoutOrganizationInput)
    create?: Array<delivery_pricingCreateWithoutOrganizationInput>;

    @Field(() => [delivery_pricingCreateOrConnectWithoutOrganizationInput], {nullable:true})
    @Type(() => delivery_pricingCreateOrConnectWithoutOrganizationInput)
    connectOrCreate?: Array<delivery_pricingCreateOrConnectWithoutOrganizationInput>;

    @Field(() => [delivery_pricingUpsertWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => delivery_pricingUpsertWithWhereUniqueWithoutOrganizationInput)
    upsert?: Array<delivery_pricingUpsertWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => delivery_pricingCreateManyOrganizationInputEnvelope, {nullable:true})
    @Type(() => delivery_pricingCreateManyOrganizationInputEnvelope)
    createMany?: delivery_pricingCreateManyOrganizationInputEnvelope;

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

    @Field(() => [delivery_pricingUpdateWithWhereUniqueWithoutOrganizationInput], {nullable:true})
    @Type(() => delivery_pricingUpdateWithWhereUniqueWithoutOrganizationInput)
    update?: Array<delivery_pricingUpdateWithWhereUniqueWithoutOrganizationInput>;

    @Field(() => [delivery_pricingUpdateManyWithWhereWithoutOrganizationInput], {nullable:true})
    @Type(() => delivery_pricingUpdateManyWithWhereWithoutOrganizationInput)
    updateMany?: Array<delivery_pricingUpdateManyWithWhereWithoutOrganizationInput>;

    @Field(() => [delivery_pricingScalarWhereInput], {nullable:true})
    @Type(() => delivery_pricingScalarWhereInput)
    deleteMany?: Array<delivery_pricingScalarWhereInput>;
}
