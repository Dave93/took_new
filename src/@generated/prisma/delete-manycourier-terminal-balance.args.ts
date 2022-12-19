import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { courier_terminal_balanceWhereInput } from '../courier-terminal-balance/courier-terminal-balance-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManycourierTerminalBalanceArgs {

    @Field(() => courier_terminal_balanceWhereInput, {nullable:true})
    @Type(() => courier_terminal_balanceWhereInput)
    where?: courier_terminal_balanceWhereInput;
}
