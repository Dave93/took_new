import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { courier_terminal_balanceCreateWithoutCourier_terminal_balance_terminalsInput } from './courier-terminal-balance-create-without-courier-terminal-balance-terminals.input';
import { Type } from 'class-transformer';
import { courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_terminalsInput } from './courier-terminal-balance-create-or-connect-without-courier-terminal-balance-terminals.input';
import { courier_terminal_balanceCreateManyCourier_terminal_balance_terminalsInputEnvelope } from './courier-terminal-balance-create-many-courier-terminal-balance-terminals-input-envelope.input';
import { courier_terminal_balanceWhereUniqueInput } from './courier-terminal-balance-where-unique.input';

@InputType()
export class courier_terminal_balanceCreateNestedManyWithoutCourier_terminal_balance_terminalsInput {

    @Field(() => [courier_terminal_balanceCreateWithoutCourier_terminal_balance_terminalsInput], {nullable:true})
    @Type(() => courier_terminal_balanceCreateWithoutCourier_terminal_balance_terminalsInput)
    create?: Array<courier_terminal_balanceCreateWithoutCourier_terminal_balance_terminalsInput>;

    @Field(() => [courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_terminalsInput], {nullable:true})
    @Type(() => courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_terminalsInput)
    connectOrCreate?: Array<courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_terminalsInput>;

    @Field(() => courier_terminal_balanceCreateManyCourier_terminal_balance_terminalsInputEnvelope, {nullable:true})
    @Type(() => courier_terminal_balanceCreateManyCourier_terminal_balance_terminalsInputEnvelope)
    createMany?: courier_terminal_balanceCreateManyCourier_terminal_balance_terminalsInputEnvelope;

    @Field(() => [courier_terminal_balanceWhereUniqueInput], {nullable:true})
    @Type(() => courier_terminal_balanceWhereUniqueInput)
    connect?: Array<courier_terminal_balanceWhereUniqueInput>;
}
