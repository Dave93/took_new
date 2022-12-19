import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { courier_terminal_balanceWhereUniqueInput } from './courier-terminal-balance-where-unique.input';
import { Type } from 'class-transformer';
import { courier_terminal_balanceCreateWithoutCourier_terminal_balance_terminalsInput } from './courier-terminal-balance-create-without-courier-terminal-balance-terminals.input';

@InputType()
export class courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_terminalsInput {

    @Field(() => courier_terminal_balanceWhereUniqueInput, {nullable:false})
    @Type(() => courier_terminal_balanceWhereUniqueInput)
    where!: courier_terminal_balanceWhereUniqueInput;

    @Field(() => courier_terminal_balanceCreateWithoutCourier_terminal_balance_terminalsInput, {nullable:false})
    @Type(() => courier_terminal_balanceCreateWithoutCourier_terminal_balance_terminalsInput)
    create!: courier_terminal_balanceCreateWithoutCourier_terminal_balance_terminalsInput;
}
