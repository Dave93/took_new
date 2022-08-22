import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { delivery_pricingWhereInput } from '../delivery-pricing/delivery-pricing-where.input';

@InputType()
export class Delivery_pricingListRelationFilter {

    @Field(() => delivery_pricingWhereInput, {nullable:true})
    every?: delivery_pricingWhereInput;

    @Field(() => delivery_pricingWhereInput, {nullable:true})
    some?: delivery_pricingWhereInput;

    @Field(() => delivery_pricingWhereInput, {nullable:true})
    none?: delivery_pricingWhereInput;
}
