import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsWhereUniqueInput } from './order-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { order_transactionsCreateWithoutOrder_transactions_terminalsInput } from './order-transactions-create-without-order-transactions-terminals.input';

@InputType()
export class order_transactionsCreateOrConnectWithoutOrder_transactions_terminalsInput {

    @Field(() => order_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => order_transactionsWhereUniqueInput)
    where!: order_transactionsWhereUniqueInput;

    @Field(() => order_transactionsCreateWithoutOrder_transactions_terminalsInput, {nullable:false})
    @Type(() => order_transactionsCreateWithoutOrder_transactions_terminalsInput)
    create!: order_transactionsCreateWithoutOrder_transactions_terminalsInput;
}
