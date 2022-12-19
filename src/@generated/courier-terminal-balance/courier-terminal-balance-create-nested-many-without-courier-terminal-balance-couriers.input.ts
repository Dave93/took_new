import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { courier_terminal_balanceCreateWithoutCourier_terminal_balance_couriersInput } from './courier-terminal-balance-create-without-courier-terminal-balance-couriers.input';
import { Type } from 'class-transformer';
import { courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_couriersInput } from './courier-terminal-balance-create-or-connect-without-courier-terminal-balance-couriers.input';
import { courier_terminal_balanceCreateManyCourier_terminal_balance_couriersInputEnvelope } from './courier-terminal-balance-create-many-courier-terminal-balance-couriers-input-envelope.input';
import { courier_terminal_balanceWhereUniqueInput } from './courier-terminal-balance-where-unique.input';

@InputType()
export class courier_terminal_balanceCreateNestedManyWithoutCourier_terminal_balance_couriersInput {

    @Field(() => [courier_terminal_balanceCreateWithoutCourier_terminal_balance_couriersInput], {nullable:true})
    @Type(() => courier_terminal_balanceCreateWithoutCourier_terminal_balance_couriersInput)
    create?: Array<courier_terminal_balanceCreateWithoutCourier_terminal_balance_couriersInput>;

    @Field(() => [courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_couriersInput], {nullable:true})
    @Type(() => courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_couriersInput)
    connectOrCreate?: Array<courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_couriersInput>;

    @Field(() => courier_terminal_balanceCreateManyCourier_terminal_balance_couriersInputEnvelope, {nullable:true})
    @Type(() => courier_terminal_balanceCreateManyCourier_terminal_balance_couriersInputEnvelope)
    createMany?: courier_terminal_balanceCreateManyCourier_terminal_balance_couriersInputEnvelope;

    @Field(() => [courier_terminal_balanceWhereUniqueInput], {nullable:true})
    @Type(() => courier_terminal_balanceWhereUniqueInput)
    connect?: Array<courier_terminal_balanceWhereUniqueInput>;
}
