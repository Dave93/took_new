import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutCourier_terminal_balance_terminalsInput } from './terminals-create-without-courier-terminal-balance-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutCourier_terminal_balance_terminalsInput } from './terminals-create-or-connect-without-courier-terminal-balance-terminals.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';

@InputType()
export class terminalsCreateNestedOneWithoutCourier_terminal_balance_terminalsInput {

    @Field(() => terminalsCreateWithoutCourier_terminal_balance_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateWithoutCourier_terminal_balance_terminalsInput)
    create?: terminalsCreateWithoutCourier_terminal_balance_terminalsInput;

    @Field(() => terminalsCreateOrConnectWithoutCourier_terminal_balance_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutCourier_terminal_balance_terminalsInput)
    connectOrCreate?: terminalsCreateOrConnectWithoutCourier_terminal_balance_terminalsInput;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: terminalsWhereUniqueInput;
}
