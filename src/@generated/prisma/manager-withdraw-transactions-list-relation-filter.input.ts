import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdraw_transactionsWhereInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-where.input';

@InputType()
export class Manager_withdraw_transactionsListRelationFilter {

    @Field(() => manager_withdraw_transactionsWhereInput, {nullable:true})
    every?: manager_withdraw_transactionsWhereInput;

    @Field(() => manager_withdraw_transactionsWhereInput, {nullable:true})
    some?: manager_withdraw_transactionsWhereInput;

    @Field(() => manager_withdraw_transactionsWhereInput, {nullable:true})
    none?: manager_withdraw_transactionsWhereInput;
}
