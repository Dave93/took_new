import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereInput } from '../orders/orders-where.input';

@InputType()
export class OrdersRelationFilter {

    @Field(() => ordersWhereInput, {nullable:true})
    is?: ordersWhereInput;

    @Field(() => ordersWhereInput, {nullable:true})
    isNot?: ordersWhereInput;
}
