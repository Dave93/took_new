import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { courier_terminal_balanceWhereInput } from '../courier-terminal-balance/courier-terminal-balance-where.input';
import { Type } from 'class-transformer';
import { courier_terminal_balanceOrderByWithAggregationInput } from '../courier-terminal-balance/courier-terminal-balance-order-by-with-aggregation.input';
import { Courier_terminal_balanceScalarFieldEnum } from './courier-terminal-balance-scalar-field.enum';
import { courier_terminal_balanceScalarWhereWithAggregatesInput } from '../courier-terminal-balance/courier-terminal-balance-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBycourierTerminalBalanceArgs {

    @Field(() => courier_terminal_balanceWhereInput, {nullable:true})
    @Type(() => courier_terminal_balanceWhereInput)
    where?: courier_terminal_balanceWhereInput;

    @Field(() => [courier_terminal_balanceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<courier_terminal_balanceOrderByWithAggregationInput>;

    @Field(() => [Courier_terminal_balanceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Courier_terminal_balanceScalarFieldEnum>;

    @Field(() => courier_terminal_balanceScalarWhereWithAggregatesInput, {nullable:true})
    having?: courier_terminal_balanceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
