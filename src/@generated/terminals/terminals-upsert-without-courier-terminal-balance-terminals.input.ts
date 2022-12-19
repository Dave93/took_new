import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { terminalsUpdateWithoutCourier_terminal_balance_terminalsInput } from './terminals-update-without-courier-terminal-balance-terminals.input';
import { Type } from 'class-transformer';
import { terminalsCreateWithoutCourier_terminal_balance_terminalsInput } from './terminals-create-without-courier-terminal-balance-terminals.input';

@InputType()
export class terminalsUpsertWithoutCourier_terminal_balance_terminalsInput {

    @Field(() => terminalsUpdateWithoutCourier_terminal_balance_terminalsInput, {nullable:false})
    @Type(() => terminalsUpdateWithoutCourier_terminal_balance_terminalsInput)
    update!: terminalsUpdateWithoutCourier_terminal_balance_terminalsInput;

    @Field(() => terminalsCreateWithoutCourier_terminal_balance_terminalsInput, {nullable:false})
    @Type(() => terminalsCreateWithoutCourier_terminal_balance_terminalsInput)
    create!: terminalsCreateWithoutCourier_terminal_balance_terminalsInput;
}
