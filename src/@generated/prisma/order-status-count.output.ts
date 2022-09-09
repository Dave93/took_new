import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Order_statusCount {

    @Field(() => Int, {nullable:false})
    orders_order_status!: number;
}
