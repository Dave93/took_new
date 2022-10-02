import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Order_locationsCountAggregate } from './order-locations-count-aggregate.output';
import { Order_locationsAvgAggregate } from './order-locations-avg-aggregate.output';
import { Order_locationsSumAggregate } from './order-locations-sum-aggregate.output';
import { Order_locationsMinAggregate } from './order-locations-min-aggregate.output';
import { Order_locationsMaxAggregate } from './order-locations-max-aggregate.output';

@ObjectType()
export class Order_locationsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    order_id!: string;

    @Field(() => String, {nullable:false})
    terminal_id!: string;

    @Field(() => String, {nullable:false})
    courier_id!: string;

    @Field(() => String, {nullable:false})
    order_status_id!: string;

    @Field(() => Float, {nullable:false})
    lat!: number;

    @Field(() => Float, {nullable:false})
    lon!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => Order_locationsCountAggregate, {nullable:true})
    _count?: Order_locationsCountAggregate;

    @Field(() => Order_locationsAvgAggregate, {nullable:true})
    _avg?: Order_locationsAvgAggregate;

    @Field(() => Order_locationsSumAggregate, {nullable:true})
    _sum?: Order_locationsSumAggregate;

    @Field(() => Order_locationsMinAggregate, {nullable:true})
    _min?: Order_locationsMinAggregate;

    @Field(() => Order_locationsMaxAggregate, {nullable:true})
    _max?: Order_locationsMaxAggregate;
}
