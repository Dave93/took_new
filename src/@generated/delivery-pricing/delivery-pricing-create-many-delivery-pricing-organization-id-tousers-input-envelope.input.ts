import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingCreateManyDelivery_pricing_organization_idTousersInput } from './delivery-pricing-create-many-delivery-pricing-organization-id-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class delivery_pricingCreateManyDelivery_pricing_organization_idTousersInputEnvelope {

    @Field(() => [delivery_pricingCreateManyDelivery_pricing_organization_idTousersInput], {nullable:false})
    @Type(() => delivery_pricingCreateManyDelivery_pricing_organization_idTousersInput)
    data!: Array<delivery_pricingCreateManyDelivery_pricing_organization_idTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
