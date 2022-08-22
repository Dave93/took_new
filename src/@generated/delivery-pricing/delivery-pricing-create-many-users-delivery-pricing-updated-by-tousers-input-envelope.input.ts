import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingCreateManyUsers_delivery_pricing_updated_byTousersInput } from './delivery-pricing-create-many-users-delivery-pricing-updated-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class delivery_pricingCreateManyUsers_delivery_pricing_updated_byTousersInputEnvelope {

    @Field(() => [delivery_pricingCreateManyUsers_delivery_pricing_updated_byTousersInput], {nullable:false})
    @Type(() => delivery_pricingCreateManyUsers_delivery_pricing_updated_byTousersInput)
    data!: Array<delivery_pricingCreateManyUsers_delivery_pricing_updated_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
