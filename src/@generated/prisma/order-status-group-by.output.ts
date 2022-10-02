import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Order_statusCountAggregate } from './order-status-count-aggregate.output';
import { Order_statusAvgAggregate } from './order-status-avg-aggregate.output';
import { Order_statusSumAggregate } from './order-status-sum-aggregate.output';
import { Order_statusMinAggregate } from './order-status-min-aggregate.output';
import { Order_statusMaxAggregate } from './order-status-max-aggregate.output';

@ObjectType()
export class Order_statusGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    sort!: number;

    @Field(() => String, {nullable:false})
    organization_id!: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => Boolean, {nullable:false})
    finish!: boolean;

    @Field(() => Boolean, {nullable:false})
    cancel!: boolean;

    @Field(() => Boolean, {nullable:false})
    waiting!: boolean;

    @Field(() => Boolean, {nullable:false})
    need_location!: boolean;

    @Field(() => Order_statusCountAggregate, {nullable:true})
    _count?: Order_statusCountAggregate;

    @Field(() => Order_statusAvgAggregate, {nullable:true})
    _avg?: Order_statusAvgAggregate;

    @Field(() => Order_statusSumAggregate, {nullable:true})
    _sum?: Order_statusSumAggregate;

    @Field(() => Order_statusMinAggregate, {nullable:true})
    _min?: Order_statusMinAggregate;

    @Field(() => Order_statusMaxAggregate, {nullable:true})
    _max?: Order_statusMaxAggregate;
}
