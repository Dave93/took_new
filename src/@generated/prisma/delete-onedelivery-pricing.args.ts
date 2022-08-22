import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { delivery_pricingWhereUniqueInput } from '../delivery-pricing/delivery-pricing-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnedeliveryPricingArgs {

    @Field(() => delivery_pricingWhereUniqueInput, {nullable:false})
    @Type(() => delivery_pricingWhereUniqueInput)
    where!: delivery_pricingWhereUniqueInput;
}
