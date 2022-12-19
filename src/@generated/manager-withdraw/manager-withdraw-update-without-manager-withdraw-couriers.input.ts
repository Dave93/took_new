import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { usersUpdateOneWithoutManager_withdraw_created_byTousersNestedInput } from '../users/users-update-one-without-manager-withdraw-created-by-tousers-nested.input';
import { usersUpdateOneRequiredWithoutManager_withdraw_managersNestedInput } from '../users/users-update-one-required-without-manager-withdraw-managers-nested.input';
import { organizationUpdateOneRequiredWithoutManager_withdraw_organizationsNestedInput } from '../organization/organization-update-one-required-without-manager-withdraw-organizations-nested.input';
import { terminalsUpdateOneRequiredWithoutManager_withdraw_terminalsNestedInput } from '../terminals/terminals-update-one-required-without-manager-withdraw-terminals-nested.input';
import { manager_withdraw_transactionsUpdateManyWithoutManager_withdraw_transactions_withdrawNestedInput } from '../manager-withdraw-transactions/manager-withdraw-transactions-update-many-without-manager-withdraw-transactions-withdraw-nested.input';

@InputType()
export class manager_withdrawUpdateWithoutManager_withdraw_couriersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    amount_before?: number;

    @Field(() => Float, {nullable:true})
    amount_after?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    payed_date?: Date | string;

    @Field(() => usersUpdateOneWithoutManager_withdraw_created_byTousersNestedInput, {nullable:true})
    manager_withdraw_created_byTousers?: usersUpdateOneWithoutManager_withdraw_created_byTousersNestedInput;

    @Field(() => usersUpdateOneRequiredWithoutManager_withdraw_managersNestedInput, {nullable:true})
    manager_withdraw_managers?: usersUpdateOneRequiredWithoutManager_withdraw_managersNestedInput;

    @Field(() => organizationUpdateOneRequiredWithoutManager_withdraw_organizationsNestedInput, {nullable:true})
    manager_withdraw_organizations?: organizationUpdateOneRequiredWithoutManager_withdraw_organizationsNestedInput;

    @Field(() => terminalsUpdateOneRequiredWithoutManager_withdraw_terminalsNestedInput, {nullable:true})
    manager_withdraw_terminals?: terminalsUpdateOneRequiredWithoutManager_withdraw_terminalsNestedInput;

    @Field(() => manager_withdraw_transactionsUpdateManyWithoutManager_withdraw_transactions_withdrawNestedInput, {nullable:true})
    manager_withdraw_transactions_withdraw?: manager_withdraw_transactionsUpdateManyWithoutManager_withdraw_transactions_withdrawNestedInput;
}
