import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { usersOrderByWithRelationInput } from '../users/users-order-by-with-relation.input';
import { work_schedulesOrderByWithRelationInput } from '../work-schedules/work-schedules-order-by-with-relation.input';

@InputType()
export class work_schedule_entriesOrderByWithRelationInput {

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

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    work_schedule_entries_created_byTousers?: usersOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    work_schedule_entries_updated_byTousers?: usersOrderByWithRelationInput;

    @Field(() => usersOrderByWithRelationInput, {nullable:true})
    work_schedule_entries_users?: usersOrderByWithRelationInput;

    @Field(() => work_schedulesOrderByWithRelationInput, {nullable:true})
    work_schedule_entries_work_schedules?: work_schedulesOrderByWithRelationInput;
}
