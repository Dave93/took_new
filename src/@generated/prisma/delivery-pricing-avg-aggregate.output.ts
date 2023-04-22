import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Delivery_pricingAvgAggregate {

    @Field(() => Float, {nullable:true})
    min_price?: number;

    @Field(() => Float, {nullable:true})
    price_per_km?: number;

    @Field(() => Float, {nullable:true})
    customer_price_per_km?: number;

    @Field(() => Float, {nullable:true})
    min_distance_km?: number;
}
