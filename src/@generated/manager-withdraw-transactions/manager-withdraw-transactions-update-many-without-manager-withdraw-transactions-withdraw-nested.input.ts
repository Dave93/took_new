import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { manager_withdraw_transactionsCreateWithoutManager_withdraw_transactions_withdrawInput } from './manager-withdraw-transactions-create-without-manager-withdraw-transactions-withdraw.input';
import { Type } from 'class-transformer';
import { manager_withdraw_transactionsCreateOrConnectWithoutManager_withdraw_transactions_withdrawInput } from './manager-withdraw-transactions-create-or-connect-without-manager-withdraw-transactions-withdraw.input';
import { manager_withdraw_transactionsUpsertWithWhereUniqueWithoutManager_withdraw_transactions_withdrawInput } from './manager-withdraw-transactions-upsert-with-where-unique-without-manager-withdraw-transactions-withdraw.input';
import { manager_withdraw_transactionsCreateManyManager_withdraw_transactions_withdrawInputEnvelope } from './manager-withdraw-transactions-create-many-manager-withdraw-transactions-withdraw-input-envelope.input';
import { manager_withdraw_transactionsWhereUniqueInput } from './manager-withdraw-transactions-where-unique.input';
import { manager_withdraw_transactionsUpdateWithWhereUniqueWithoutManager_withdraw_transactions_withdrawInput } from './manager-withdraw-transactions-update-with-where-unique-without-manager-withdraw-transactions-withdraw.input';
import { manager_withdraw_transactionsUpdateManyWithWhereWithoutManager_withdraw_transactions_withdrawInput } from './manager-withdraw-transactions-update-many-with-where-without-manager-withdraw-transactions-withdraw.input';
import { manager_withdraw_transactionsScalarWhereInput } from './manager-withdraw-transactions-scalar-where.input';

@InputType()
export class manager_withdraw_transactionsUpdateManyWithoutManager_withdraw_transactions_withdrawNestedInput {

    @Field(() => [manager_withdraw_transactionsCreateWithoutManager_withdraw_transactions_withdrawInput], {nullable:true})
    @Type(() => manager_withdraw_transactionsCreateWithoutManager_withdraw_transactions_withdrawInput)
    create?: Array<manager_withdraw_transactionsCreateWithoutManager_withdraw_transactions_withdrawInput>;

    @Field(() => [manager_withdraw_transactionsCreateOrConnectWithoutManager_withdraw_transactions_withdrawInput], {nullable:true})
    @Type(() => manager_withdraw_transactionsCreateOrConnectWithoutManager_withdraw_transactions_withdrawInput)
    connectOrCreate?: Array<manager_withdraw_transactionsCreateOrConnectWithoutManager_withdraw_transactions_withdrawInput>;

    @Field(() => [manager_withdraw_transactionsUpsertWithWhereUniqueWithoutManager_withdraw_transactions_withdrawInput], {nullable:true})
    @Type(() => manager_withdraw_transactionsUpsertWithWhereUniqueWithoutManager_withdraw_transactions_withdrawInput)
    upsert?: Array<manager_withdraw_transactionsUpsertWithWhereUniqueWithoutManager_withdraw_transactions_withdrawInput>;

    @Field(() => manager_withdraw_transactionsCreateManyManager_withdraw_transactions_withdrawInputEnvelope, {nullable:true})
    @Type(() => manager_withdraw_transactionsCreateManyManager_withdraw_transactions_withdrawInputEnvelope)
    createMany?: manager_withdraw_transactionsCreateManyManager_withdraw_transactions_withdrawInputEnvelope;

    @Field(() => [manager_withdraw_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => manager_withdraw_transactionsWhereUniqueInput)
    set?: Array<manager_withdraw_transactionsWhereUniqueInput>;

    @Field(() => [manager_withdraw_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => manager_withdraw_transactionsWhereUniqueInput)
    disconnect?: Array<manager_withdraw_transactionsWhereUniqueInput>;

    @Field(() => [manager_withdraw_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => manager_withdraw_transactionsWhereUniqueInput)
    delete?: Array<manager_withdraw_transactionsWhereUniqueInput>;

    @Field(() => [manager_withdraw_transactionsWhereUniqueInput], {nullable:true})
    @Type(() => manager_withdraw_transactionsWhereUniqueInput)
    connect?: Array<manager_withdraw_transactionsWhereUniqueInput>;

    @Field(() => [manager_withdraw_transactionsUpdateWithWhereUniqueWithoutManager_withdraw_transactions_withdrawInput], {nullable:true})
    @Type(() => manager_withdraw_transactionsUpdateWithWhereUniqueWithoutManager_withdraw_transactions_withdrawInput)
    update?: Array<manager_withdraw_transactionsUpdateWithWhereUniqueWithoutManager_withdraw_transactions_withdrawInput>;

    @Field(() => [manager_withdraw_transactionsUpdateManyWithWhereWithoutManager_withdraw_transactions_withdrawInput], {nullable:true})
    @Type(() => manager_withdraw_transactionsUpdateManyWithWhereWithoutManager_withdraw_transactions_withdrawInput)
    updateMany?: Array<manager_withdraw_transactionsUpdateManyWithWhereWithoutManager_withdraw_transactions_withdrawInput>;

    @Field(() => [manager_withdraw_transactionsScalarWhereInput], {nullable:true})
    @Type(() => manager_withdraw_transactionsScalarWhereInput)
    deleteMany?: Array<manager_withdraw_transactionsScalarWhereInput>;
}
