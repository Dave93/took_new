import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Manager_withdrawCountAggregate } from './manager-withdraw-count-aggregate.output';
import { Manager_withdrawAvgAggregate } from './manager-withdraw-avg-aggregate.output';
import { Manager_withdrawSumAggregate } from './manager-withdraw-sum-aggregate.output';
import { Manager_withdrawMinAggregate } from './manager-withdraw-min-aggregate.output';
import { Manager_withdrawMaxAggregate } from './manager-withdraw-max-aggregate.output';

@ObjectType()
export class Manager_withdrawGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    manager_id!: string;

    @Field(() => String, {nullable:false})
    courier_id!: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:false})
    amount_before!: number;

    @Field(() => Float, {nullable:false})
    amount_after!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:true})
    payed_date?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Manager_withdrawCountAggregate, {nullable:true})
    _count?: Manager_withdrawCountAggregate;

    @Field(() => Manager_withdrawAvgAggregate, {nullable:true})
    _avg?: Manager_withdrawAvgAggregate;

    @Field(() => Manager_withdrawSumAggregate, {nullable:true})
    _sum?: Manager_withdrawSumAggregate;

    @Field(() => Manager_withdrawMinAggregate, {nullable:true})
    _min?: Manager_withdrawMinAggregate;

    @Field(() => Manager_withdrawMaxAggregate, {nullable:true})
    _max?: Manager_withdrawMaxAggregate;
}
