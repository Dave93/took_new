import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { courier_terminal_balanceCreateWithoutCourier_terminal_balance_couriersInput } from './courier-terminal-balance-create-without-courier-terminal-balance-couriers.input';
import { Type } from 'class-transformer';
import { courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_couriersInput } from './courier-terminal-balance-create-or-connect-without-courier-terminal-balance-couriers.input';
import { courier_terminal_balanceUpsertWithWhereUniqueWithoutCourier_terminal_balance_couriersInput } from './courier-terminal-balance-upsert-with-where-unique-without-courier-terminal-balance-couriers.input';
import { courier_terminal_balanceCreateManyCourier_terminal_balance_couriersInputEnvelope } from './courier-terminal-balance-create-many-courier-terminal-balance-couriers-input-envelope.input';
import { courier_terminal_balanceWhereUniqueInput } from './courier-terminal-balance-where-unique.input';
import { courier_terminal_balanceUpdateWithWhereUniqueWithoutCourier_terminal_balance_couriersInput } from './courier-terminal-balance-update-with-where-unique-without-courier-terminal-balance-couriers.input';
import { courier_terminal_balanceUpdateManyWithWhereWithoutCourier_terminal_balance_couriersInput } from './courier-terminal-balance-update-many-with-where-without-courier-terminal-balance-couriers.input';
import { courier_terminal_balanceScalarWhereInput } from './courier-terminal-balance-scalar-where.input';

@InputType()
export class courier_terminal_balanceUpdateManyWithoutCourier_terminal_balance_couriersNestedInput {

    @Field(() => [courier_terminal_balanceCreateWithoutCourier_terminal_balance_couriersInput], {nullable:true})
    @Type(() => courier_terminal_balanceCreateWithoutCourier_terminal_balance_couriersInput)
    create?: Array<courier_terminal_balanceCreateWithoutCourier_terminal_balance_couriersInput>;

    @Field(() => [courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_couriersInput], {nullable:true})
    @Type(() => courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_couriersInput)
    connectOrCreate?: Array<courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_couriersInput>;

    @Field(() => [courier_terminal_balanceUpsertWithWhereUniqueWithoutCourier_terminal_balance_couriersInput], {nullable:true})
    @Type(() => courier_terminal_balanceUpsertWithWhereUniqueWithoutCourier_terminal_balance_couriersInput)
    upsert?: Array<courier_terminal_balanceUpsertWithWhereUniqueWithoutCourier_terminal_balance_couriersInput>;

    @Field(() => courier_terminal_balanceCreateManyCourier_terminal_balance_couriersInputEnvelope, {nullable:true})
    @Type(() => courier_terminal_balanceCreateManyCourier_terminal_balance_couriersInputEnvelope)
    createMany?: courier_terminal_balanceCreateManyCourier_terminal_balance_couriersInputEnvelope;

    @Field(() => [courier_terminal_balanceWhereUniqueInput], {nullable:true})
    @Type(() => courier_terminal_balanceWhereUniqueInput)
    set?: Array<courier_terminal_balanceWhereUniqueInput>;

    @Field(() => [courier_terminal_balanceWhereUniqueInput], {nullable:true})
    @Type(() => courier_terminal_balanceWhereUniqueInput)
    disconnect?: Array<courier_terminal_balanceWhereUniqueInput>;

    @Field(() => [courier_terminal_balanceWhereUniqueInput], {nullable:true})
    @Type(() => courier_terminal_balanceWhereUniqueInput)
    delete?: Array<courier_terminal_balanceWhereUniqueInput>;

    @Field(() => [courier_terminal_balanceWhereUniqueInput], {nullable:true})
    @Type(() => courier_terminal_balanceWhereUniqueInput)
    connect?: Array<courier_terminal_balanceWhereUniqueInput>;

    @Field(() => [courier_terminal_balanceUpdateWithWhereUniqueWithoutCourier_terminal_balance_couriersInput], {nullable:true})
    @Type(() => courier_terminal_balanceUpdateWithWhereUniqueWithoutCourier_terminal_balance_couriersInput)
    update?: Array<courier_terminal_balanceUpdateWithWhereUniqueWithoutCourier_terminal_balance_couriersInput>;

    @Field(() => [courier_terminal_balanceUpdateManyWithWhereWithoutCourier_terminal_balance_couriersInput], {nullable:true})
    @Type(() => courier_terminal_balanceUpdateManyWithWhereWithoutCourier_terminal_balance_couriersInput)
    updateMany?: Array<courier_terminal_balanceUpdateManyWithWhereWithoutCourier_terminal_balance_couriersInput>;

    @Field(() => [courier_terminal_balanceScalarWhereInput], {nullable:true})
    @Type(() => courier_terminal_balanceScalarWhereInput)
    deleteMany?: Array<courier_terminal_balanceScalarWhereInput>;
}
