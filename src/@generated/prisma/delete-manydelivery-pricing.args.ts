import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { delivery_pricingWhereInput } from '../delivery-pricing/delivery-pricing-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManydeliveryPricingArgs {

    @Field(() => delivery_pricingWhereInput, {nullable:true})
    @Type(() => delivery_pricingWhereInput)
    where?: delivery_pricingWhereInput;
}
