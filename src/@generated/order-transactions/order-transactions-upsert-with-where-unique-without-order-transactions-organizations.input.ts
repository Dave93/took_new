import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsWhereUniqueInput } from './order-transactions-where-unique.input';
import { Type } from 'class-transformer';
import { order_transactionsUpdateWithoutOrder_transactions_organizationsInput } from './order-transactions-update-without-order-transactions-organizations.input';
import { order_transactionsCreateWithoutOrder_transactions_organizationsInput } from './order-transactions-create-without-order-transactions-organizations.input';

@InputType()
export class order_transactionsUpsertWithWhereUniqueWithoutOrder_transactions_organizationsInput {

    @Field(() => order_transactionsWhereUniqueInput, {nullable:false})
    @Type(() => order_transactionsWhereUniqueInput)
    where!: order_transactionsWhereUniqueInput;

    @Field(() => order_transactionsUpdateWithoutOrder_transactions_organizationsInput, {nullable:false})
    @Type(() => order_transactionsUpdateWithoutOrder_transactions_organizationsInput)
    update!: order_transactionsUpdateWithoutOrder_transactions_organizationsInput;

    @Field(() => order_transactionsCreateWithoutOrder_transactions_organizationsInput, {nullable:false})
    @Type(() => order_transactionsCreateWithoutOrder_transactions_organizationsInput)
    create!: order_transactionsCreateWithoutOrder_transactions_organizationsInput;
}
