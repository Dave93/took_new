import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_actionsWhereInput } from '../order-actions/order-actions-where.input';

@InputType()
export class Order_actionsListRelationFilter {

    @Field(() => order_actionsWhereInput, {nullable:true})
    every?: order_actionsWhereInput;

    @Field(() => order_actionsWhereInput, {nullable:true})
    some?: order_actionsWhereInput;

    @Field(() => order_actionsWhereInput, {nullable:true})
    none?: order_actionsWhereInput;
}
