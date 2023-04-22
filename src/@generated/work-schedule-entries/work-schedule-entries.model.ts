import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { work_schedule_entry_status } from '../prisma/work-schedule-entry-status.enum';
import { users } from '../users/users.model';
import { work_schedules } from '../work-schedules/work-schedules.model';

@ObjectType()
export class work_schedule_entries {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    work_schedule_id!: string;

    @Field(() => Date, {nullable:false})
    date_start!: Date;

    @Field(() => Date, {nullable:true})
    date_finish!: Date | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    duration!: number;

    @Field(() => String, {nullable:true})
    ip_open!: string | null;

    @Field(() => String, {nullable:true})
    ip_close!: string | null;

    @Field(() => Float, {nullable:false,defaultValue:0})
    lat_open!: number;

    @Field(() => Float, {nullable:true,defaultValue:0})
    lat_close!: number | null;

    @Field(() => Float, {nullable:false,defaultValue:0})
    lon_open!: number;

    @Field(() => Float, {nullable:true,defaultValue:0})
    lon_close!: number | null;

    @Field(() => work_schedule_entry_status, {nullable:false,defaultValue:'open'})
    current_status!: keyof typeof work_schedule_entry_status;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    late!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:true})
    created_by!: string | null;

    @Field(() => String, {nullable:true})
    updated_by!: string | null;

    @Field(() => users, {nullable:true})
    work_schedule_entries_created_byTousers?: users | null;

    @Field(() => users, {nullable:true})
    work_schedule_entries_updated_byTousers?: users | null;

    @Field(() => users, {nullable:false})
    work_schedule_entries_users?: users;

    @Field(() => work_schedules, {nullable:false})
    work_schedule_entries_work_schedules?: work_schedules;
}
