import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereInput } from '../orders/orders-where.input';

@InputType()
export class OrdersListRelationFilter {

    @Field(() => ordersWhereInput, {nullable:true})
    every?: ordersWhereInput;

    @Field(() => ordersWhereInput, {nullable:true})
    some?: ordersWhereInput;

    @Field(() => ordersWhereInput, {nullable:true})
    none?: ordersWhereInput;
}
