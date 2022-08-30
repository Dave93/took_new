import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { work_schedule_entry_status } from '../prisma/work-schedule-entry-status.enum';

@InputType()
export class work_schedule_entriesUncheckedCreateWithoutWork_schedule_entries_work_schedulesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => Date, {nullable:false})
    date_start!: Date | string;

    @Field(() => Date, {nullable:false})
    date_finish!: Date | string;

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

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;
}
