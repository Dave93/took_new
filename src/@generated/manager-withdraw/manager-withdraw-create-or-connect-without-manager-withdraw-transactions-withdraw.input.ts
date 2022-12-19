import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawWhereUniqueInput } from './manager-withdraw-where-unique.input';
import { Type } from 'class-transformer';
import { manager_withdrawCreateWithoutManager_withdraw_transactions_withdrawInput } from './manager-withdraw-create-without-manager-withdraw-transactions-withdraw.input';

@InputType()
export class manager_withdrawCreateOrConnectWithoutManager_withdraw_transactions_withdrawInput {

    @Field(() => manager_withdrawWhereUniqueInput, {nullable:false})
    @Type(() => manager_withdrawWhereUniqueInput)
    where!: manager_withdrawWhereUniqueInput;

    @Field(() => manager_withdrawCreateWithoutManager_withdraw_transactions_withdrawInput, {nullable:false})
    @Type(() => manager_withdrawCreateWithoutManager_withdraw_transactions_withdrawInput)
    create!: manager_withdrawCreateWithoutManager_withdraw_transactions_withdrawInput;
}
