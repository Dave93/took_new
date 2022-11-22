import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { order_transactionsScalarWhereInput } from './order-transactions-scalar-where.input';
import { Type } from 'class-transformer';
import { order_transactionsUpdateManyMutationInput } from './order-transactions-update-many-mutation.input';

@InputType()
export class order_transactionsUpdateManyWithWhereWithoutOrder_transactions_organizationsInput {

    @Field(() => order_transactionsScalarWhereInput, {nullable:false})
    @Type(() => order_transactionsScalarWhereInput)
    where!: order_transactionsScalarWhereInput;

    @Field(() => order_transactionsUpdateManyMutationInput, {nullable:false})
    @Type(() => order_transactionsUpdateManyMutationInput)
    data!: order_transactionsUpdateManyMutationInput;
}
