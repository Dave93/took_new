import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdraw_transactionsScalarWhereInput } from './manager-withdraw-transactions-scalar-where.input';
import { Type } from 'class-transformer';
import { manager_withdraw_transactionsUpdateManyMutationInput } from './manager-withdraw-transactions-update-many-mutation.input';

@InputType()
export class manager_withdraw_transactionsUpdateManyWithWhereWithoutManager_withdraw_transactions_withdrawInput {

    @Field(() => manager_withdraw_transactionsScalarWhereInput, {nullable:false})
    @Type(() => manager_withdraw_transactionsScalarWhereInput)
    where!: manager_withdraw_transactionsScalarWhereInput;

    @Field(() => manager_withdraw_transactionsUpdateManyMutationInput, {nullable:false})
    @Type(() => manager_withdraw_transactionsUpdateManyMutationInput)
    data!: manager_withdraw_transactionsUpdateManyMutationInput;
}
