import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { courier_terminal_balanceCreateManyCourier_terminal_balance_terminalsInput } from './courier-terminal-balance-create-many-courier-terminal-balance-terminals.input';
import { Type } from 'class-transformer';

@InputType()
export class courier_terminal_balanceCreateManyCourier_terminal_balance_terminalsInputEnvelope {

    @Field(() => [courier_terminal_balanceCreateManyCourier_terminal_balance_terminalsInput], {nullable:false})
    @Type(() => courier_terminal_balanceCreateManyCourier_terminal_balance_terminalsInput)
    data!: Array<courier_terminal_balanceCreateManyCourier_terminal_balance_terminalsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
