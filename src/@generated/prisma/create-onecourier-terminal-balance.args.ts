import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { courier_terminal_balanceCreateInput } from '../courier-terminal-balance/courier-terminal-balance-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnecourierTerminalBalanceArgs {

    @Field(() => courier_terminal_balanceCreateInput, {nullable:false})
    @Type(() => courier_terminal_balanceCreateInput)
    data!: courier_terminal_balanceCreateInput;
}
