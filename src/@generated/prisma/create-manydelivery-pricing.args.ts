import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { delivery_pricingCreateManyInput } from '../delivery-pricing/delivery-pricing-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManydeliveryPricingArgs {

    @Field(() => [delivery_pricingCreateManyInput], {nullable:false})
    @Type(() => delivery_pricingCreateManyInput)
    data!: Array<delivery_pricingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
