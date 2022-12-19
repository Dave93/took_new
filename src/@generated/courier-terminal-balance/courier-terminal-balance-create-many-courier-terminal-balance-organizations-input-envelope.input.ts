import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { courier_terminal_balanceCreateManyCourier_terminal_balance_organizationsInput } from './courier-terminal-balance-create-many-courier-terminal-balance-organizations.input';
import { Type } from 'class-transformer';

@InputType()
export class courier_terminal_balanceCreateManyCourier_terminal_balance_organizationsInputEnvelope {

    @Field(() => [courier_terminal_balanceCreateManyCourier_terminal_balance_organizationsInput], {nullable:false})
    @Type(() => courier_terminal_balanceCreateManyCourier_terminal_balance_organizationsInput)
    data!: Array<courier_terminal_balanceCreateManyCourier_terminal_balance_organizationsInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
