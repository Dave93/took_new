import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { courier_terminal_balanceCreateWithoutCourier_terminal_balance_created_byTousersInput } from './courier-terminal-balance-create-without-courier-terminal-balance-created-by-tousers.input';
import { Type } from 'class-transformer';
import { courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_created_byTousersInput } from './courier-terminal-balance-create-or-connect-without-courier-terminal-balance-created-by-tousers.input';
import { courier_terminal_balanceCreateManyCourier_terminal_balance_created_byTousersInputEnvelope } from './courier-terminal-balance-create-many-courier-terminal-balance-created-by-tousers-input-envelope.input';
import { courier_terminal_balanceWhereUniqueInput } from './courier-terminal-balance-where-unique.input';

@InputType()
export class courier_terminal_balanceCreateNestedManyWithoutCourier_terminal_balance_created_byTousersInput {

    @Field(() => [courier_terminal_balanceCreateWithoutCourier_terminal_balance_created_byTousersInput], {nullable:true})
    @Type(() => courier_terminal_balanceCreateWithoutCourier_terminal_balance_created_byTousersInput)
    create?: Array<courier_terminal_balanceCreateWithoutCourier_terminal_balance_created_byTousersInput>;

    @Field(() => [courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_created_byTousersInput], {nullable:true})
    @Type(() => courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_created_byTousersInput)
    connectOrCreate?: Array<courier_terminal_balanceCreateOrConnectWithoutCourier_terminal_balance_created_byTousersInput>;

    @Field(() => courier_terminal_balanceCreateManyCourier_terminal_balance_created_byTousersInputEnvelope, {nullable:true})
    @Type(() => courier_terminal_balanceCreateManyCourier_terminal_balance_created_byTousersInputEnvelope)
    createMany?: courier_terminal_balanceCreateManyCourier_terminal_balance_created_byTousersInputEnvelope;

    @Field(() => [courier_terminal_balanceWhereUniqueInput], {nullable:true})
    @Type(() => courier_terminal_balanceWhereUniqueInput)
    connect?: Array<courier_terminal_balanceWhereUniqueInput>;
}
