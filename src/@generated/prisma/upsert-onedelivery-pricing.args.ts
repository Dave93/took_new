import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { delivery_pricingWhereUniqueInput } from '../delivery-pricing/delivery-pricing-where-unique.input';
import { Type } from 'class-transformer';
import { delivery_pricingCreateInput } from '../delivery-pricing/delivery-pricing-create.input';
import { delivery_pricingUpdateInput } from '../delivery-pricing/delivery-pricing-update.input';

@ArgsType()
export class UpsertOnedeliveryPricingArgs {

    @Field(() => delivery_pricingWhereUniqueInput, {nullable:false})
    @Type(() => delivery_pricingWhereUniqueInput)
    where!: delivery_pricingWhereUniqueInput;

    @Field(() => delivery_pricingCreateInput, {nullable:false})
    @Type(() => delivery_pricingCreateInput)
    create!: delivery_pricingCreateInput;

    @Field(() => delivery_pricingUpdateInput, {nullable:false})
    @Type(() => delivery_pricingUpdateInput)
    update!: delivery_pricingUpdateInput;
}
