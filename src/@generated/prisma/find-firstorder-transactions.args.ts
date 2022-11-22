import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { order_transactionsWhereInput } from '../order-transactions/order-transactions-where.input';
import { Type } from 'class-transformer';
import { order_transactionsOrderByWithRelationInput } from '../order-transactions/order-transactions-order-by-with-relation.input';
import { order_transactionsWhereUniqueInput } from '../order-transactions/order-transactions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Order_transactionsScalarFieldEnum } from './order-transactions-scalar-field.enum';

@ArgsType()
export class FindFirstorderTransactionsArgs {

    @Field(() => order_transactionsWhereInput, {nullable:true})
    @Type(() => order_transactionsWhereInput)
    where?: order_transactionsWhereInput;

    @Field(() => [order_transactionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<order_transactionsOrderByWithRelationInput>;

    @Field(() => order_transactionsWhereUniqueInput, {nullable:true})
    cursor?: order_transactionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Order_transactionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Order_transactionsScalarFieldEnum>;
}
