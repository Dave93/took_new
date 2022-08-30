import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class work_schedule_entriesSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lat_open?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lat_close?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lon_open?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lon_close?: keyof typeof SortOrder;
}
