import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { courier_terminal_balanceUpdateManyMutationInput } from '../courier-terminal-balance/courier-terminal-balance-update-many-mutation.input';
import { Type } from 'class-transformer';
import { courier_terminal_balanceWhereInput } from '../courier-terminal-balance/courier-terminal-balance-where.input';

@ArgsType()
export class UpdateManycourierTerminalBalanceArgs {

    @Field(() => courier_terminal_balanceUpdateManyMutationInput, {nullable:false})
    @Type(() => courier_terminal_balanceUpdateManyMutationInput)
    data!: courier_terminal_balanceUpdateManyMutationInput;

    @Field(() => courier_terminal_balanceWhereInput, {nullable:true})
    @Type(() => courier_terminal_balanceWhereInput)
    where?: courier_terminal_balanceWhereInput;
}
