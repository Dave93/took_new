import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { courier_terminal_balanceCreateManyCourier_terminal_balance_couriersInput } from './courier-terminal-balance-create-many-courier-terminal-balance-couriers.input';
import { Type } from 'class-transformer';

@InputType()
export class courier_terminal_balanceCreateManyCourier_terminal_balance_couriersInputEnvelope {

    @Field(() => [courier_terminal_balanceCreateManyCourier_terminal_balance_couriersInput], {nullable:false})
    @Type(() => courier_terminal_balanceCreateManyCourier_terminal_balance_couriersInput)
    data!: Array<courier_terminal_balanceCreateManyCourier_terminal_balance_couriersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
