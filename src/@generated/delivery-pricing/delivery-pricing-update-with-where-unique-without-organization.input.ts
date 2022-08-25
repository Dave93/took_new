import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingWhereUniqueInput } from './delivery-pricing-where-unique.input';
import { Type } from 'class-transformer';
import { delivery_pricingUpdateWithoutOrganizationInput } from './delivery-pricing-update-without-organization.input';

@InputType()
export class delivery_pricingUpdateWithWhereUniqueWithoutOrganizationInput {

    @Field(() => delivery_pricingWhereUniqueInput, {nullable:false})
    @Type(() => delivery_pricingWhereUniqueInput)
    where!: delivery_pricingWhereUniqueInput;

    @Field(() => delivery_pricingUpdateWithoutOrganizationInput, {nullable:false})
    @Type(() => delivery_pricingUpdateWithoutOrganizationInput)
    data!: delivery_pricingUpdateWithoutOrganizationInput;
}
