import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_statusWhereInput } from '../order-status/order-status-where.input';

@InputType()
export class Order_statusListRelationFilter {

    @Field(() => order_statusWhereInput, {nullable:true})
    every?: order_statusWhereInput;

    @Field(() => order_statusWhereInput, {nullable:true})
    some?: order_statusWhereInput;

    @Field(() => order_statusWhereInput, {nullable:true})
    none?: order_statusWhereInput;
}
