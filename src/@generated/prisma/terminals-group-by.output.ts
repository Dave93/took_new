import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { TerminalsCountAggregate } from './terminals-count-aggregate.output';
import { TerminalsAvgAggregate } from './terminals-avg-aggregate.output';
import { TerminalsSumAggregate } from './terminals-sum-aggregate.output';
import { TerminalsMinAggregate } from './terminals-min-aggregate.output';
import { TerminalsMaxAggregate } from './terminals-max-aggregate.output';

@ObjectType()
export class TerminalsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => Float, {nullable:false})
    latitude!: number;

    @Field(() => Float, {nullable:false})
    longitude!: number;

    @Field(() => String, {nullable:false})
    external_id!: string;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => String, {nullable:true})
    manager_name?: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

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
