import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdrawCreateWithoutManager_withdraw_transactions_withdrawInput } from './manager-withdraw-create-without-manager-withdraw-transactions-withdraw.input';
import { Type } from 'class-transformer';
import { manager_withdrawCreateOrConnectWithoutManager_withdraw_transactions_withdrawInput } from './manager-withdraw-create-or-connect-without-manager-withdraw-transactions-withdraw.input';
import { manager_withdrawWhereUniqueInput } from './manager-withdraw-where-unique.input';

@InputType()
export class manager_withdrawCreateNestedOneWithoutManager_withdraw_transactions_withdrawInput {

    @Field(() => manager_withdrawCreateWithoutManager_withdraw_transactions_withdrawInput, {nullable:true})
    @Type(() => manager_withdrawCreateWithoutManager_withdraw_transactions_withdrawInput)
    create?: manager_withdrawCreateWithoutManager_withdraw_transactions_withdrawInput;

    @Field(() => manager_withdrawCreateOrConnectWithoutManager_withdraw_transactions_withdrawInput, {nullable:true})
    @Type(() => manager_withdrawCreateOrConnectWithoutManager_withdraw_transactions_withdrawInput)
    connectOrCreate?: manager_withdrawCreateOrConnectWithoutManager_withdraw_transactions_withdrawInput;

    @Field(() => manager_withdrawWhereUniqueInput, {nullable:true})
    @Type(() => manager_withdrawWhereUniqueInput)
    connect?: manager_withdrawWhereUniqueInput;
}
