import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsWhereUniqueInput } from './order-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { order_transactionsUpdateWithoutOrder_transactions_organizationsInput } from './order-transactions-update-without-order-transactions-organizations.input';

@InputType()
export class order_transactionsUpdateWithWhereUniqueWithoutOrder_transactions_organizationsInput {

    @Field(() => order_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => order_transactionsWhereUniqueInput)
    where!: order_transactionsWhereUniqueInput;

    @Field(() => order_transactionsUpdateWithoutOrder_transactions_organizationsInput, {nullable:false})
    @Type(() => order_transactionsUpdateWithoutOrder_transactions_organizationsInput)
    data!: order_transactionsUpdateWithoutOrder_transactions_organizationsInput;
}
