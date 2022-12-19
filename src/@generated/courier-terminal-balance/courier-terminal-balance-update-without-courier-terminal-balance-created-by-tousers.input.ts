import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { usersUpdateOneRequiredWithoutCourier_terminal_balance_couriersNestedInput } from '../users/users-update-one-required-without-courier-terminal-balance-couriers-nested.input';
import { terminalsUpdateOneRequiredWithoutCourier_terminal_balance_terminalsNestedInput } from '../terminals/terminals-update-one-required-without-courier-terminal-balance-terminals-nested.input';
import { organizationUpdateOneRequiredWithoutCourier_terminal_balance_organizationsNestedInput } from '../organization/organization-update-one-required-without-courier-terminal-balance-organizations-nested.input';

@InputType()
export class courier_terminal_balanceUpdateWithoutCourier_terminal_balance_created_byTousersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:true})
    balance?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => usersUpdateOneRequiredWithoutCourier_terminal_balance_couriersNestedInput, {nullable:true})
    courier_terminal_balance_couriers?: usersUpdateOneRequiredWithoutCourier_terminal_balance_couriersNestedInput;

    @Field(() => terminalsUpdateOneRequiredWithoutCourier_terminal_balance_terminalsNestedInput, {nullable:true})
    courier_terminal_balance_terminals?: terminalsUpdateOneRequiredWithoutCourier_terminal_balance_terminalsNestedInput;

    @Field(() => organizationUpdateOneRequiredWithoutCourier_terminal_balance_organizationsNestedInput, {nullable:true})
    courier_terminal_balance_organizations?: organizationUpdateOneRequiredWithoutCourier_terminal_balance_organizationsNestedInput;
}
