import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Courier_terminal_balanceCountAggregate } from './courier-terminal-balance-count-aggregate.output';
import { Courier_terminal_balanceAvgAggregate } from './courier-terminal-balance-avg-aggregate.output';
import { Courier_terminal_balanceSumAggregate } from './courier-terminal-balance-sum-aggregate.output';
import { Courier_terminal_balanceMinAggregate } from './courier-terminal-balance-min-aggregate.output';
import { Courier_terminal_balanceMaxAggregate } from './courier-terminal-balance-max-aggregate.output';

@ObjectType()
export class Courier_terminal_balanceGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    courier_id!: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => Float, {nullable:false})
    balance!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Courier_terminal_balanceCountAggregate, {nullable:true})
    _count?: Courier_terminal_balanceCountAggregate;

    @Field(() => Courier_terminal_balanceAvgAggregate, {nullable:true})
    _avg?: Courier_terminal_balanceAvgAggregate;

    @Field(() => Courier_terminal_balanceSumAggregate, {nullable:true})
    _sum?: Courier_terminal_balanceSumAggregate;

    @Field(() => Courier_terminal_balanceMinAggregate, {nullable:true})
    _min?: Courier_terminal_balanceMinAggregate;

    @Field(() => Courier_terminal_balanceMaxAggregate, {nullable:true})
    _max?: Courier_terminal_balanceMaxAggregate;
}
