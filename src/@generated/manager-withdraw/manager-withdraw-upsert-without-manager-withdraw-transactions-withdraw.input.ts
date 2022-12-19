import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawUpdateWithoutManager_withdraw_transactions_withdrawInput } from './manager-withdraw-update-without-manager-withdraw-transactions-withdraw.input';
import { Type } from 'class-transformer';
import { manager_withdrawCreateWithoutManager_withdraw_transactions_withdrawInput } from './manager-withdraw-create-without-manager-withdraw-transactions-withdraw.input';

@InputType()
export class manager_withdrawUpsertWithoutManager_withdraw_transactions_withdrawInput {

    @Field(() => manager_withdrawUpdateWithoutManager_withdraw_transactions_withdrawInput, {nullable:false})
    @Type(() => manager_withdrawUpdateWithoutManager_withdraw_transactions_withdrawInput)
    update!: manager_withdrawUpdateWithoutManager_withdraw_transactions_withdrawInput;

    @Field(() => manager_withdrawCreateWithoutManager_withdraw_transactions_withdrawInput, {nullable:false})
    @Type(() => manager_withdrawCreateWithoutManager_withdraw_transactions_withdrawInput)
    create!: manager_withdrawCreateWithoutManager_withdraw_transactions_withdrawInput;
}
