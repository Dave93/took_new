import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { manager_withdraw_transactionsCreateManyInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManymanagerWithdrawTransactionsArgs {

    @Field(() => [manager_withdraw_transactionsCreateManyInput], {nullable:false})
    @Type(() => manager_withdraw_transactionsCreateManyInput)
    data!: Array<manager_withdraw_transactionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
