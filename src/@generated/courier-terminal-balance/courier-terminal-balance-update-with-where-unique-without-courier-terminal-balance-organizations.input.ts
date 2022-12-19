import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { courier_terminal_balanceWhereUniqueInput } from './courier-terminal-balance-where-unique.input';
import { Type } from 'class-transformer';
import { courier_terminal_balanceUpdateWithoutCourier_terminal_balance_organizationsInput } from './courier-terminal-balance-update-without-courier-terminal-balance-organizations.input';

@InputType()
export class courier_terminal_balanceUpdateWithWhereUniqueWithoutCourier_terminal_balance_organizationsInput {

    @Field(() => courier_terminal_balanceWhereUniqueInput, {nullable:false})
    @Type(() => courier_terminal_balanceWhereUniqueInput)
    where!: courier_terminal_balanceWhereUniqueInput;

    @Field(() => courier_terminal_balanceUpdateWithoutCourier_terminal_balance_organizationsInput, {nullable:false})
    @Type(() => courier_terminal_balanceUpdateWithoutCourier_terminal_balance_organizationsInput)
    data!: courier_terminal_balanceUpdateWithoutCourier_terminal_balance_organizationsInput;
}
