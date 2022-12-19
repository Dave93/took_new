import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { usersCreateNestedOneWithoutCourier_terminal_balance_created_byTousersInput } from '../users/users-create-nested-one-without-courier-terminal-balance-created-by-tousers.input';
import { usersCreateNestedOneWithoutCourier_terminal_balance_couriersInput } from '../users/users-create-nested-one-without-courier-terminal-balance-couriers.input';
import { terminalsCreateNestedOneWithoutCourier_terminal_balance_terminalsInput } from '../terminals/terminals-create-nested-one-without-courier-terminal-balance-terminals.input';

@InputType()
export class courier_terminal_balanceCreateWithoutCourier_terminal_balance_organizationsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:true})
    balance?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutCourier_terminal_balance_created_byTousersInput, {nullable:true})
    courier_terminal_balance_created_byTousers?: usersCreateNestedOneWithoutCourier_terminal_balance_created_byTousersInput;

    @Field(() => usersCreateNestedOneWithoutCourier_terminal_balance_couriersInput, {nullable:false})
    courier_terminal_balance_couriers!: usersCreateNestedOneWithoutCourier_terminal_balance_couriersInput;

    @Field(() => terminalsCreateNestedOneWithoutCourier_terminal_balance_terminalsInput, {nullable:false})
    courier_terminal_balance_terminals!: terminalsCreateNestedOneWithoutCourier_terminal_balance_terminalsInput;
}
