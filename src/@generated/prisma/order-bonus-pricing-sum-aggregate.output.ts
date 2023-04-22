import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Order_bonus_pricingSumAggregate {

    @Field(() => Int, {nullable:true})
    min_distance_km?: number;
}
