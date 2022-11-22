import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsWhereUniqueInput } from './order-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { order_transactionsUpdateWithoutOrder_transactions_couriersInput } from './order-transactions-update-without-order-transactions-couriers.input';

@InputType()
export class order_transactionsUpdateWithWhereUniqueWithoutOrder_transactions_couriersInput {

    @Field(() => order_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => order_transactionsWhereUniqueInput)
    where!: order_transactionsWhereUniqueInput;

    @Field(() => order_transactionsUpdateWithoutOrder_transactions_couriersInput, {nullable:false})
    @Type(() => order_transactionsUpdateWithoutOrder_transactions_couriersInput)
    data!: order_transactionsUpdateWithoutOrder_transactions_couriersInput;
}
