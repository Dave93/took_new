import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manager_withdraw_transactionsWhereInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-where.input';
import { Type } from 'class-transformer';
import { manager_withdraw_transactionsOrderByWithRelationInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-order-by-with-relation.input';
import { manager_withdraw_transactionsWhereUniqueInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Manager_withdraw_transactionsScalarFieldEnum } from './manager-withdraw-transactions-scalar-field.enum';

@ArgsType()
export class FindManymanagerWithdrawTransactionsArgs {

    @Field(() => manager_withdraw_transactionsWhereInput, {nullable:true})
    @Type(() => manager_withdraw_transactionsWhereInput)
    where?: manager_withdraw_transactionsWhereInput;

    @Field(() => [manager_withdraw_transactionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<manager_withdraw_transactionsOrderByWithRelationInput>;

    @Field(() => manager_withdraw_transactionsWhereUniqueInput, {nullable:true})
    cursor?: manager_withdraw_transactionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Manager_withdraw_transactionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Manager_withdraw_transactionsScalarFieldEnum>;
}
