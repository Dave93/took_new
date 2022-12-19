import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { courier_terminal_balanceWhereUniqueInput } from './courier-terminal-balance-where-unique.input';
import { Type } from 'class-transformer';
import { courier_terminal_balanceUpdateWithoutCourier_terminal_balance_created_byTousersInput } from './courier-terminal-balance-update-without-courier-terminal-balance-created-by-tousers.input';
import { courier_terminal_balanceCreateWithoutCourier_terminal_balance_created_byTousersInput } from './courier-terminal-balance-create-without-courier-terminal-balance-created-by-tousers.input';

@InputType()
export class courier_terminal_balanceUpsertWithWhereUniqueWithoutCourier_terminal_balance_created_byTousersInput {

    @Field(() => courier_terminal_balanceWhereUniqueInput, {nullable:false})
    @Type(() => courier_terminal_balanceWhereUniqueInput)
    where!: courier_terminal_balanceWhereUniqueInput;

    @Field(() => courier_terminal_balanceUpdateWithoutCourier_terminal_balance_created_byTousersInput, {nullable:false})
    @Type(() => courier_terminal_balanceUpdateWithoutCourier_terminal_balance_created_byTousersInput)
    update!: courier_terminal_balanceUpdateWithoutCourier_terminal_balance_created_byTousersInput;

    @Field(() => courier_terminal_balanceCreateWithoutCourier_terminal_balance_created_byTousersInput, {nullable:false})
    @Type(() => courier_terminal_balanceCreateWithoutCourier_terminal_balance_created_byTousersInput)
    create!: courier_terminal_balanceCreateWithoutCourier_terminal_balance_created_byTousersInput;
}
