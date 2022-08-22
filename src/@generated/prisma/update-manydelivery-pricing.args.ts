import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { delivery_pricingUpdateManyMutationInput } from '../delivery-pricing/delivery-pricing-update-many-mutation.input';
import { Type } from 'class-transformer';
import { delivery_pricingWhereInput } from '../delivery-pricing/delivery-pricing-where.input';

@ArgsType()
export class UpdateManydeliveryPricingArgs {

    @Field(() => delivery_pricingUpdateManyMutationInput, {nullable:false})
    @Type(() => delivery_pricingUpdateManyMutationInput)
    data!: delivery_pricingUpdateManyMutationInput;

    @Field(() => delivery_pricingWhereInput, {nullable:true})
    @Type(() => delivery_pricingWhereInput)
    where?: delivery_pricingWhereInput;
}
