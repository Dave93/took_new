import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsWhereUniqueInput } from './terminals-where-unique.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutCourier_terminal_balance_terminalsInput } from './terminals-create-without-courier-terminal-balance-terminals.input';

@InputType()
export class terminalsCreateOrConnectWithoutCourier_terminal_balance_terminalsInput {

    @Field(() => terminalsWhereUniqueInput, {nullable:false})
    @Type(() => terminalsWhereUniqueInput)
    where!: terminalsWhereUniqueInput;

    @Field(() => terminalsCreateWithoutCourier_terminal_balance_terminalsInput, {nullable:false})
    @Type(() => terminalsCreateWithoutCourier_terminal_balance_terminalsInput)
    create!: terminalsCreateWithoutCourier_terminal_balance_terminalsInput;
}
