import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrdersCount {

    @Field(() => Int, {nullable:false})
    order_actions_orders!: number;

    @Field(() => Int, {nullable:false})
    order_locations_orders!: number;
}
