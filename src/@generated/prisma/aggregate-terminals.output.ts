import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TerminalsCountAggregate } from './terminals-count-aggregate.output';
import { TerminalsAvgAggregate } from './terminals-avg-aggregate.output';
import { TerminalsSumAggregate } from './terminals-sum-aggregate.output';
import { TerminalsMinAggregate } from './terminals-min-aggregate.output';
import { TerminalsMaxAggregate } from './terminals-max-aggregate.output';

@ObjectType()
export class AggregateTerminals {

    @Field(() => TerminalsCountAggregate, {nullable:true})
    _count?: TerminalsCountAggregate;

    @Field(() => TerminalsAvgAggregate, {nullable:true})
    _avg?: TerminalsAvgAggregate;

    @Field(() => TerminalsSumAggregate, {nullable:true})
    _sum?: TerminalsSumAggregate;

    @Field(() => TerminalsMinAggregate, {nullable:true})
    _min?: TerminalsMinAggregate;

    @Field(() => TerminalsMaxAggregate, {nullable:true})
    _max?: TerminalsMaxAggregate;
}
