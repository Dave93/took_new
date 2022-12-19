import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { courier_terminal_balanceWhereInput } from '../courier-terminal-balance/courier-terminal-balance-where.input';

@InputType()
export class Courier_terminal_balanceListRelationFilter {

    @Field(() => courier_terminal_balanceWhereInput, {nullable:true})
    every?: courier_terminal_balanceWhereInput;

    @Field(() => courier_terminal_balanceWhereInput, {nullable:true})
    some?: courier_terminal_balanceWhereInput;

    @Field(() => courier_terminal_balanceWhereInput, {nullable:true})
    none?: courier_terminal_balanceWhereInput;
}
