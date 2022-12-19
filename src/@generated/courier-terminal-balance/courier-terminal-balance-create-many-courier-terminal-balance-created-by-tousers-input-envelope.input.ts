import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { courier_terminal_balanceCreateManyCourier_terminal_balance_created_byTousersInput } from './courier-terminal-balance-create-many-courier-terminal-balance-created-by-tousers.input';
import { Type } from 'class-transformer';

@InputType()
export class courier_terminal_balanceCreateManyCourier_terminal_balance_created_byTousersInputEnvelope {

    @Field(() => [courier_terminal_balanceCreateManyCourier_terminal_balance_created_byTousersInput], {nullable:false})
    @Type(() => courier_terminal_balanceCreateManyCourier_terminal_balance_created_byTousersInput)
    data!: Array<courier_terminal_balanceCreateManyCourier_terminal_balance_created_byTousersInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
