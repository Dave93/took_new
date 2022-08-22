import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Delivery_pricingSumAggregate {

    @Field(() => Int, {nullable:true})
    min_price?: number;

    @Field(() => Int, {nullable:true})
    price_per_km?: number;
}
