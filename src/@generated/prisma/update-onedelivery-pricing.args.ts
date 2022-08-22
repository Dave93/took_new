import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { delivery_pricingUpdateInput } from '../delivery-pricing/delivery-pricing-update.input';
import { Type } from 'class-transformer';
import { delivery_pricingWhereUniqueInput } from '../delivery-pricing/delivery-pricing-where-unique.input';

@ArgsType()
export class UpdateOnedeliveryPricingArgs {

    @Field(() => delivery_pricingUpdateInput, {nullable:false})
    @Type(() => delivery_pricingUpdateInput)
    data!: delivery_pricingUpdateInput;

    @Field(() => delivery_pricingWhereUniqueInput, {nullable:false})
    @Type(() => delivery_pricingWhereUniqueInput)
    where!: delivery_pricingWhereUniqueInput;
}
