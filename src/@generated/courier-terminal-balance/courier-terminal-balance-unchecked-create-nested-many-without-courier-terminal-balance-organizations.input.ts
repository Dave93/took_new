import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { courier_terminal_balanceCreateWithoutCourier_terminal_balance_organizationsInput } from './courier-terminal-balance-create-without-courier-terminal-balance-organizations.input';
import { Type } from 'class-transformer';
import { courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_organizationsInput } from './courier-terminal-balance-create-or-connect-without-courier-terminal-balance-organizations.input';
import { courier_terminal_balanceCreateManyCourier_terminal_balance_organizationsInputEnvelope } from './courier-terminal-balance-create-many-courier-terminal-balance-organizations-input-envelope.input';
import { courier_terminal_balanceWhereUniqueInput } from './courier-terminal-balance-where-unique.input';

@InputType()
export class courier_terminal_balanceUncheckedCreateNestedManyWithoutCourier_terminal_balance_organizationsInput {

    @Field(() => [courier_terminal_balanceCreateWithoutCourier_terminal_balance_organizationsInput], {nullable:true})
    @Type(() => courier_terminal_balanceCreateWithoutCourier_terminal_balance_organizationsInput)
    create?: Array<courier_terminal_balanceCreateWithoutCourier_terminal_balance_organizationsInput>;

    @Field(() => [courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_organizationsInput], {nullable:true})
    @Type(() => courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_organizationsInput)
    connectOrCreate?: Array<courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_organizationsInput>;

    @Field(() => courier_terminal_balanceCreateManyCourier_terminal_balance_organizationsInputEnvelope, {nullable:true})
    @Type(() => courier_terminal_balanceCreateManyCourier_terminal_balance_organizationsInputEnvelope)
    createMany?: courier_terminal_balanceCreateManyCourier_terminal_balance_organizationsInputEnvelope;

    @Field(() => [courier_terminal_balanceWhereUniqueInput], {nullable:true})
    @Type(() => courier_terminal_balanceWhereUniqueInput)
    connect?: Array<courier_terminal_balanceWhereUniqueInput>;
}
