import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersWhereUniqueInput } from './orders-where-unique.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutOrder_votes_ordersInput } from './orders-create-without-order-votes-orders.input';

@InputType()
export class ordersCreateOrConnectWithoutOrder_votes_ordersInput {

    @Field(() => ordersWhereUniqueInput, {nullable:false})
    @Type(() => ordersWhereUniqueInput)
    where!: ordersWhereUniqueInput;

    @Field(() => ordersCreateWithoutOrder_votes_ordersInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrder_votes_ordersInput)
    create!: ordersCreateWithoutOrder_votes_ordersInput;
}
