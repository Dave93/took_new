import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_transactionsUpdateManyMutationInput } from '../order-transactions/order-transactions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { order_transactionsWhereInput } from '../order-transactions/order-transactions-where.input';

@ArgsType()
export class UpdateManyorderTransactionsArgs {

    @Field(() => order_transactionsUpdateManyMutationInput, {nullable:false})
    @Type(() => order_transactionsUpdateManyMutationInput)
    data!: order_transactionsUpdateManyMutationInput;

    @Field(() => order_transactionsWhereInput, {nullable:true})
    @Type(() => order_transactionsWhereInput)
    where?: order_transactionsWhereInput;
}
