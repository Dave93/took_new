import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { courier_terminal_balanceUpdateInput } from '../courier-terminal-balance/courier-terminal-balance-update.input';
import { Type } from 'class-transformer';
import { courier_terminal_balanceWhereUniqueInput } from '../courier-terminal-balance/courier-terminal-balance-where-unique.input';

@ArgsType()
export class UpdateOnecourierTerminalBalanceArgs {

    @Field(() => courier_terminal_balanceUpdateInput, {nullable:false})
    @Type(() => courier_terminal_balanceUpdateInput)
    data!: courier_terminal_balanceUpdateInput;

    @Field(() => courier_terminal_balanceWhereUniqueInput, {nullable:false})
    @Type(() => courier_terminal_balanceWhereUniqueInput)
    where!: courier_terminal_balanceWhereUniqueInput;
}
