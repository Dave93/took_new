import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrder_actions_ordersInput } from './orders-create-without-order-actions-orders.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrder_actions_ordersInput } from './orders-create-or-connect-without-order-actions-orders.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';

@InputType()
export class ordersCreateNestedOneWithoutOrder_actions_ordersInput {

    @Field(() => ordersCreateWithoutOrder_actions_ordersInput, {nullable:true})
    @Type(() => ordersCreateWithoutOrder_actions_ordersInput)
    create?: ordersCreateWithoutOrder_actions_ordersInput;

    @Field(() => ordersCreateOrConnectWithoutOrder_actions_ordersInput, {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrder_actions_ordersInput)
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_actions_ordersInput;

    @Field(() => ordersWhereUniqueInput, {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: ordersWhereUniqueInput;
}
