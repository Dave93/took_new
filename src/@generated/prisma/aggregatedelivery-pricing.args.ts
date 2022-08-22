import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { delivery_pricingWhereInput } from '../delivery-pricing/delivery-pricing-where.input';
import { Type } from 'class-transformer';
import { delivery_pricingOrderByWithRelationInput } from '../delivery-pricing/delivery-pricing-order-by-with-relation.input';
import { delivery_pricingWhereUniqueInput } from '../delivery-pricing/delivery-pricing-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatedeliveryPricingArgs {

    @Field(() => delivery_pricingWhereInput, {nullable:true})
    @Type(() => delivery_pricingWhereInput)
    where?: delivery_pricingWhereInput;

    @Field(() => [delivery_pricingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<delivery_pricingOrderByWithRelationInput>;

    @Field(() => delivery_pricingWhereUniqueInput, {nullable:true})
    cursor?: delivery_pricingWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
