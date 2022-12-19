import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { courier_terminal_balanceWhereInput } from '../courier-terminal-balance/courier-terminal-balance-where.input';
import { Type } from 'class-transformer';
import { courier_terminal_balanceOrderByWithRelationInput } from '../courier-terminal-balance/courier-terminal-balance-order-by-with-relation.input';
import { courier_terminal_balanceWhereUniqueInput } from '../courier-terminal-balance/courier-terminal-balance-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatecourierTerminalBalanceArgs {

    @Field(() => courier_terminal_balanceWhereInput, {nullable:true})
    @Type(() => courier_terminal_balanceWhereInput)
    where?: courier_terminal_balanceWhereInput;

    @Field(() => [courier_terminal_balanceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<courier_terminal_balanceOrderByWithRelationInput>;

    @Field(() => courier_terminal_balanceWhereUniqueInput, {nullable:true})
    cursor?: courier_terminal_balanceWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
