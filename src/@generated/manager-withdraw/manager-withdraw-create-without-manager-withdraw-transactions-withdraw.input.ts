import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutManager_withdraw_created_byTousersInput } from '../users/users-create-nested-one-without-manager-withdraw-created-by-tousers.input';
import { usersCreateNestedOneWithoutManager_withdraw_managersInput } from '../users/users-create-nested-one-without-manager-withdraw-managers.input';
import { organizationCreateNestedOneWithoutManager_withdraw_organizationsInput } from '../organization/organization-create-nested-one-without-manager-withdraw-organizations.input';
import { usersCreateNestedOneWithoutManager_withdraw_couriersInput } from '../users/users-create-nested-one-without-manager-withdraw-couriers.input';
import { terminalsCreateNestedOneWithoutManager_withdraw_terminalsInput } from '../terminals/terminals-create-nested-one-without-manager-withdraw-terminals.input';

@InputType()
export class manager_withdrawCreateWithoutManager_withdraw_transactions_withdrawInput {

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

    @Field(() => usersCreateNestedOneWithoutManager_withdraw_created_byTousersInput, {nullable:true})
    manager_withdraw_created_byTousers?: usersCreateNestedOneWithoutManager_withdraw_created_byTousersInput;

    @Field(() => usersCreateNestedOneWithoutManager_withdraw_managersInput, {nullable:false})
    manager_withdraw_managers!: usersCreateNestedOneWithoutManager_withdraw_managersInput;

    @Field(() => organizationCreateNestedOneWithoutManager_withdraw_organizationsInput, {nullable:false})
    manager_withdraw_organizations!: organizationCreateNestedOneWithoutManager_withdraw_organizationsInput;

    @Field(() => usersCreateNestedOneWithoutManager_withdraw_couriersInput, {nullable:false})
    manager_withdraw_couriers!: usersCreateNestedOneWithoutManager_withdraw_couriersInput;

    @Field(() => terminalsCreateNestedOneWithoutManager_withdraw_terminalsInput, {nullable:false})
    manager_withdraw_terminals!: terminalsCreateNestedOneWithoutManager_withdraw_terminalsInput;
}
