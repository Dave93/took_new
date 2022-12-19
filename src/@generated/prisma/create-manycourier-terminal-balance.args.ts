import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { courier_terminal_balanceCreateManyInput } from '../courier-terminal-balance/courier-terminal-balance-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManycourierTerminalBalanceArgs {

    @Field(() => [courier_terminal_balanceCreateManyInput], {nullable:false})
    @Type(() => courier_terminal_balanceCreateManyInput)
    data!: Array<courier_terminal_balanceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
