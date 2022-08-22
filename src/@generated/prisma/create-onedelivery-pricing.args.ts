import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { delivery_pricingCreateInput } from '../delivery-pricing/delivery-pricing-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnedeliveryPricingArgs {

    @Field(() => delivery_pricingCreateInput, {nullable:false})
    @Type(() => delivery_pricingCreateInput)
    data!: delivery_pricingCreateInput;
}
