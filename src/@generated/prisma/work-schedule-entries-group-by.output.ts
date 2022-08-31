import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { work_schedule_entry_status } from './work-schedule-entry-status.enum';
import { Work_schedule_entriesCountAggregate } from './work-schedule-entries-count-aggregate.output';
import { Work_schedule_entriesAvgAggregate } from './work-schedule-entries-avg-aggregate.output';
import { Work_schedule_entriesSumAggregate } from './work-schedule-entries-sum-aggregate.output';
import { Work_schedule_entriesMinAggregate } from './work-schedule-entries-min-aggregate.output';
import { Work_schedule_entriesMaxAggregate } from './work-schedule-entries-max-aggregate.output';

@ObjectType()
export class Work_schedule_entriesGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    work_schedule_id!: string;

    @Field(() => Date, {nullable:false})
    date_start!: Date | string;

    @Field(() => Date, {nullable:true})
    date_finish?: Date | string;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => String, {nullable:true})
    ip_open?: string;

    @Field(() => String, {nullable:true})
    ip_close?: string;

    @Field(() => Float, {nullable:false})
    lat_open!: number;

    @Field(() => Float, {nullable:false})
    lat_close!: number;

    @Field(() => Float, {nullable:false})
    lon_open!: number;

    @Field(() => Float, {nullable:false})
    lon_close!: number;

    @Field(() => work_schedule_entry_status, {nullable:false})
    current_status!: keyof typeof work_schedule_entry_status;

    @Field(() => Boolean, {nullable:false})
    late!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Work_schedule_entriesCountAggregate, {nullable:true})
    _count?: Work_schedule_entriesCountAggregate;

    @Field(() => Work_schedule_entriesAvgAggregate, {nullable:true})
    _avg?: Work_schedule_entriesAvgAggregate;

    @Field(() => Work_schedule_entriesSumAggregate, {nullable:true})
    _sum?: Work_schedule_entriesSumAggregate;

    @Field(() => Work_schedule_entriesMinAggregate, {nullable:true})
    _min?: Work_schedule_entriesMinAggregate;

    @Field(() => Work_schedule_entriesMaxAggregate, {nullable:true})
    _max?: Work_schedule_entriesMaxAggregate;
}
