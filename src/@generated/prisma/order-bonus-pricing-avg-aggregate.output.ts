import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Order_bonus_pricingAvgAggregate {

    @Field(() => Float, {nullable:true})
    min_distance_km?: number;
}
