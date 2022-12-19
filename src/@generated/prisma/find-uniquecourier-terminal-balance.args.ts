import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { courier_terminal_balanceWhereUniqueInput } from '../courier-terminal-balance/courier-terminal-balance-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquecourierTerminalBalanceArgs {

    @Field(() => courier_terminal_balanceWhereUniqueInput, {nullable:false})
    @Type(() => courier_terminal_balanceWhereUniqueInput)
    where!: courier_terminal_balanceWhereUniqueInput;
}
