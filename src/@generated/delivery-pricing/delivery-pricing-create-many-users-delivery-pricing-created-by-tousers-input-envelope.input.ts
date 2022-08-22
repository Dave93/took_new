import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingCreateManyUsers_delivery_pricing_created_byTousersInput } from './delivery-pricing-create-many-users-delivery-pricing-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class delivery_pricingCreateManyUsers_delivery_pricing_created_byTousersInputEnvelope {

    @Field(() => [delivery_pricingCreateManyUsers_delivery_pricing_created_byTousersInput], {nullable:false})
    @Type(() => delivery_pricingCreateManyUsers_delivery_pricing_created_byTousersInput)
    data!: Array<delivery_pricingCreateManyUsers_delivery_pricing_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
