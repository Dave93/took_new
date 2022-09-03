import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { Enumwork_schedule_entry_statusFilter } from '../prisma/enumwork-schedule-entry-status-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UsersRelationFilter } from '../prisma/users-relation-filter.input';
import { Work_schedulesRelationFilter } from '../prisma/work-schedules-relation-filter.input';

@InputType()
export class work_schedule_entriesWhereInput {

    @Field(() => [work_schedule_entriesWhereInput], {nullable:true})
    AND?: Array<work_schedule_entriesWhereInput>;

    @Field(() => [work_schedule_entriesWhereInput], {nullable:true})
    OR?: Array<work_schedule_entriesWhereInput>;

    @Field(() => [work_schedule_entriesWhereInput], {nullable:true})
    NOT?: Array<work_schedule_entriesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    work_schedule_id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date_start?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_finish?: DateTimeNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    duration?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ip_open?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ip_close?: StringNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    lat_open?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    lat_close?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    lon_open?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    lon_close?: FloatFilter;

    @Field(() => Enumwork_schedule_entry_statusFilter, {nullable:true})
    current_status?: Enumwork_schedule_entry_statusFilter;

    @Field(() => BoolFilter, {nullable:true})
    late?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    created_by?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    updated_by?: StringNullableFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    work_schedule_entries_created_byTousers?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    work_schedule_entries_updated_byTousers?: UsersRelationFilter;

    @Field(() => UsersRelationFilter, {nullable:true})
    work_schedule_entries_users?: UsersRelationFilter;

    @Field(() => Work_schedulesRelationFilter, {nullable:true})
    work_schedule_entries_work_schedules?: Work_schedulesRelationFilter;
}
