import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ordersUpdateWithoutOrder_votes_ordersInput } from './orders-update-without-order-votes-orders.input';
import { Type } from 'class-transformer';
import { ordersCreateWithoutOrder_votes_ordersInput } from './orders-create-without-order-votes-orders.input';

@InputType()
export class ordersUpsertWithoutOrder_votes_ordersInput {

    @Field(() => ordersUpdateWithoutOrder_votes_ordersInput, {nullable:false})
    @Type(() => ordersUpdateWithoutOrder_votes_ordersInput)
    update!: ordersUpdateWithoutOrder_votes_ordersInput;

    @Field(() => ordersCreateWithoutOrder_votes_ordersInput, {nullable:false})
    @Type(() => ordersCreateWithoutOrder_votes_ordersInput)
    create!: ordersCreateWithoutOrder_votes_ordersInput;
}
