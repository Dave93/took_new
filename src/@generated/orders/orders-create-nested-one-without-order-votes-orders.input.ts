import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersCreateWithoutOrder_votes_ordersInput } from './orders-create-without-order-votes-orders.input';
import { Type } from 'class-transformer';
import { ordersCreateOrConnectWithoutOrder_votes_ordersInput } from './orders-create-or-connect-without-order-votes-orders.input';
import { ordersWhereUniqueInput } from './orders-where-unique.input';

@InputType()
export class ordersCreateNestedOneWithoutOrder_votes_ordersInput {

    @Field(() => ordersCreateWithoutOrder_votes_ordersInput, {nullable:true})
    @Type(() => ordersCreateWithoutOrder_votes_ordersInput)
    create?: ordersCreateWithoutOrder_votes_ordersInput;

    @Field(() => ordersCreateOrConnectWithoutOrder_votes_ordersInput, {nullable:true})
    @Type(() => ordersCreateOrConnectWithoutOrder_votes_ordersInput)
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_votes_ordersInput;

    @Field(() => ordersWhereUniqueInput, {nullable:true})
    @Type(() => ordersWhereUniqueInput)
    connect?: ordersWhereUniqueInput;
}
