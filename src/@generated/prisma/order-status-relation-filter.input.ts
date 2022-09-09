import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_statusWhereInput } from '../order-status/order-status-where.input';

@InputType()
export class Order_statusRelationFilter {

    @Field(() => order_statusWhereInput, {nullable:true})
    is?: order_statusWhereInput;

    @Field(() => order_statusWhereInput, {nullable:true})
    isNot?: order_statusWhereInput;
}
