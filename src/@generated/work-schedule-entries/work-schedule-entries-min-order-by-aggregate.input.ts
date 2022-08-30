import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class work_schedule_entriesMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    work_schedule_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_start?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_finish?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip_open?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip_close?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lat_open?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lat_close?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lon_open?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lon_close?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    current_status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    late?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_by?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: keyof typeof SortOrder;
}
