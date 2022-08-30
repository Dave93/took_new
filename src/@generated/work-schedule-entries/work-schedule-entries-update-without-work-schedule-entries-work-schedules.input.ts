import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { work_schedule_entry_status } from '../prisma/work-schedule-entry-status.enum';
import { usersUpdateOneWithoutWork_schedule_entries_created_byTousersNestedInput } from '../users/users-update-one-without-work-schedule-entries-created-by-tousers-nested.input';
import { usersUpdateOneWithoutWork_schedule_entries_updated_byTousersNestedInput } from '../users/users-update-one-without-work-schedule-entries-updated-by-tousers-nested.input';
import { usersUpdateOneRequiredWithoutWork_schedule_entries_usersNestedInput } from '../users/users-update-one-required-without-work-schedule-entries-users-nested.input';

@InputType()
export class work_schedule_entriesUpdateWithoutWork_schedule_entries_work_schedulesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    date_start?: Date | string;

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

    @Field(() => usersUpdateOneWithoutWork_schedule_entries_created_byTousersNestedInput, {nullable:true})
    work_schedule_entries_created_byTousers?: usersUpdateOneWithoutWork_schedule_entries_created_byTousersNestedInput;

    @Field(() => usersUpdateOneWithoutWork_schedule_entries_updated_byTousersNestedInput, {nullable:true})
    work_schedule_entries_updated_byTousers?: usersUpdateOneWithoutWork_schedule_entries_updated_byTousersNestedInput;

    @Field(() => usersUpdateOneRequiredWithoutWork_schedule_entries_usersNestedInput, {nullable:true})
    work_schedule_entries_users?: usersUpdateOneRequiredWithoutWork_schedule_entries_usersNestedInput;
}
