import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsWhereUniqueInput } from './order-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { order_transactionsCreateWithoutOrder_transactions_created_byTousersInput } from './order-transactions-create-without-order-transactions-created-by-tousers.input';

@InputType()
export class order_transactionsCreateOrConnectWithoutOrder_transactions_created_byTousersInput {

    @Field(() => order_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => order_transactionsWhereUniqueInput)
    where!: order_transactionsWhereUniqueInput;

    @Field(() => order_transactionsCreateWithoutOrder_transactions_created_byTousersInput, {nullable:false})
    @Type(() => order_transactionsCreateWithoutOrder_transactions_created_byTousersInput)
    create!: order_transactionsCreateWithoutOrder_transactions_created_byTousersInput;
}
