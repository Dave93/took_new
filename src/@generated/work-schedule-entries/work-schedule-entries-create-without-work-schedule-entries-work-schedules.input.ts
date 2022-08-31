import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { work_schedule_entry_status } from '../prisma/work-schedule-entry-status.enum';
import { usersCreateNestedOneWithoutWork_schedule_entries_created_byTousersInput } from '../users/users-create-nested-one-without-work-schedule-entries-created-by-tousers.input';
import { usersCreateNestedOneWithoutWork_schedule_entries_updated_byTousersInput } from '../users/users-create-nested-one-without-work-schedule-entries-updated-by-tousers.input';
import { usersCreateNestedOneWithoutWork_schedule_entries_usersInput } from '../users/users-create-nested-one-without-work-schedule-entries-users.input';

@InputType()
export class work_schedule_entriesCreateWithoutWork_schedule_entries_work_schedulesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:false})
    date_start!: Date | string;

    @Field(() => Date, {nullable:true})
    date_finish?: Date | string;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => String, {nullable:true})
    ip_open?: string;

    @Field(() => String, {nullable:true})
    ip_close?: string;

    @Field(() => Float, {nullable:true})
    lat_open?: number;

    @Field(() => Float, {nullable:true})
    lat_close?: number;

    @Field(() => Float, {nullable:true})
    lon_open?: number;

    @Field(() => Float, {nullable:true})
    lon_close?: number;

    @Field(() => work_schedule_entry_status, {nullable:true})
    current_status?: keyof typeof work_schedule_entry_status;

    @Field(() => Boolean, {nullable:true})
    late?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => usersCreateNestedOneWithoutWork_schedule_entries_created_byTousersInput, {nullable:true})
    work_schedule_entries_created_byTousers?: usersCreateNestedOneWithoutWork_schedule_entries_created_byTousersInput;

    @Field(() => usersCreateNestedOneWithoutWork_schedule_entries_updated_byTousersInput, {nullable:true})
    work_schedule_entries_updated_byTousers?: usersCreateNestedOneWithoutWork_schedule_entries_updated_byTousersInput;

    @Field(() => usersCreateNestedOneWithoutWork_schedule_entries_usersInput, {nullable:false})
    work_schedule_entries_users!: usersCreateNestedOneWithoutWork_schedule_entries_usersInput;
}
