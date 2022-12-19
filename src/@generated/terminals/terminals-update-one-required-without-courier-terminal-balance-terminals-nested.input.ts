import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsCreateWithoutCourier_terminal_balance_terminalsInput } from './terminals-create-without-courier-terminal-balance-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateOrConnectWithoutCourier_terminal_balance_terminalsInput } from './terminals-create-or-connect-without-courier-terminal-balance-terminals.input';
import { terminalsUpsertWithoutCourier_terminal_balance_terminalsInput } from './terminals-upsert-without-courier-terminal-balance-terminals.input';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { terminalsUpdateWithoutCourier_terminal_balance_terminalsInput } from './terminals-update-without-courier-terminal-balance-terminals.input';

@InputType()
export class terminalsUpdateOneRequiredWithoutCourier_terminal_balance_terminalsNestedInput {

    @Field(() => terminalsCreateWithoutCourier_terminal_balance_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateWithoutCourier_terminal_balance_terminalsInput)
    create?: terminalsCreateWithoutCourier_terminal_balance_terminalsInput;

    @Field(() => terminalsCreateOrConnectWithoutCourier_terminal_balance_terminalsInput, {nullable:true})
    @Type(() => terminalsCreateOrConnectWithoutCourier_terminal_balance_terminalsInput)
    connectOrCreate?: terminalsCreateOrConnectWithoutCourier_terminal_balance_terminalsInput;

    @Field(() => terminalsUpsertWithoutCourier_terminal_balance_terminalsInput, {nullable:true})
    @Type(() => terminalsUpsertWithoutCourier_terminal_balance_terminalsInput)
    upsert?: terminalsUpsertWithoutCourier_terminal_balance_terminalsInput;

    @Field(() => terminalsWhereUniqueInput, {nullable:true})
    @Type(() => terminalsWhereUniqueInput)
    connect?: terminalsWhereUniqueInput;

    @Field(() => terminalsUpdateWithoutCourier_terminal_balance_terminalsInput, {nullable:true})
    @Type(() => terminalsUpdateWithoutCourier_terminal_balance_terminalsInput)
    update?: terminalsUpdateWithoutCourier_terminal_balance_terminalsInput;
}
