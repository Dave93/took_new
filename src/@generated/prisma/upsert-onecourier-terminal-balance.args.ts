import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { courier_terminal_balanceWhereUniqueInput } from '../courier-terminal-balance/courier-terminal-balance-where-unique.input';
import { Type } from 'class-transformer';
import { courier_terminal_balanceCreateInput } from '../courier-terminal-balance/courier-terminal-balance-create.input';
import { courier_terminal_balanceUpdateInput } from '../courier-terminal-balance/courier-terminal-balance-update.input';

@ArgsType()
export class UpsertOnecourierTerminalBalanceArgs {

    @Field(() => courier_terminal_balanceWhereUniqueInput, {nullable:false})
    @Type(() => courier_terminal_balanceWhereUniqueInput)
    where!: courier_terminal_balanceWhereUniqueInput;

    @Field(() => courier_terminal_balanceCreateInput, {nullable:false})
    @Type(() => courier_terminal_balanceCreateInput)
    create!: courier_terminal_balanceCreateInput;

    @Field(() => courier_terminal_balanceUpdateInput, {nullable:false})
    @Type(() => courier_terminal_balanceUpdateInput)
    update!: courier_terminal_balanceUpdateInput;
}
