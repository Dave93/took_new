import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrder_actions_ordersInput } from './orders-create-without-order-actions-orders.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrder_actions_ordersInput } from './orders-create-or-connect-without-order-actions-orders.input';
import { ordersUpsertWithoutOrder_actions_ordersInput } from './orders-upsert-without-order-actions-orders.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { ordersUpdateWithoutOrder_actions_ordersInput } from './orders-update-without-order-actions-orders.input';

@InputType()
export class ordersUpdateOneRequiredWithoutOrder_actions_ordersNestedInput {

    @Field(() => ordersCreateWithoutOrder_actions_ordersInput, {nullable:true})
    @Type(() => ordersCreateWithoutOrder_actions_ordersInput)
    create?: ordersCreateWithoutOrder_actions_ordersInput;

    @Field(() => ordersCreateOrConnectWithoutOrder_actions_ordersInput, {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrder_actions_ordersInput)
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_actions_ordersInput;

    @Field(() => ordersUpsertWithoutOrder_actions_ordersInput, {nullable:true})
    @Type(() => ordersUpsertWithoutOrder_actions_ordersInput)
    upsert?: ordersUpsertWithoutOrder_actions_ordersInput;

    @Field(() => ordersWhereUniqueInput, {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: ordersWhereUniqueInput;

    @Field(() => ordersUpdateWithoutOrder_actions_ordersInput, {nullable:true})
    @Type(() => ordersUpdateWithoutOrder_actions_ordersInput)
    update?: ordersUpdateWithoutOrder_actions_ordersInput;
}
