import { ArgsType, Field, InputType, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { BoolFilter } from 'src/@generated/prisma/bool-filter.input';
import { DateTimeFilter } from 'src/@generated/prisma/date-time-filter.input';
import { DateTimeNullableFilter } from 'src/@generated/prisma/date-time-nullable-filter.input';
import { Enumwork_schedule_entry_statusFilter } from 'src/@generated/prisma/enumwork-schedule-entry-status-filter.input';
import { FloatFilter } from 'src/@generated/prisma/float-filter.input';
import { IntFilter } from 'src/@generated/prisma/int-filter.input';
import { StringFilter } from 'src/@generated/prisma/string-filter.input';
import { StringNullableFilter } from 'src/@generated/prisma/string-nullable-filter.input';
import { UsersRelationFilter } from 'src/@generated/prisma/users-relation-filter.input';
import { Work_schedule_entriesScalarFieldEnum } from 'src/@generated/prisma/work-schedule-entries-scalar-field.enum';
import { Work_schedulesRelationFilter } from 'src/@generated/prisma/work-schedules-relation-filter.input';
import { work_schedule_entriesOrderByWithRelationInput } from 'src/@generated/work-schedule-entries/work-schedule-entries-order-by-with-relation.input';
import { work_schedule_entriesWhereUniqueInput } from 'src/@generated/work-schedule-entries/work-schedule-entries-where-unique.input';

@InputType()
export class work_schedule_entriesReportWhereInput {
  @Field(() => [work_schedule_entriesReportWhereInput], { nullable: true })
  AND?: Array<work_schedule_entriesReportWhereInput>;

  @Field(() => [work_schedule_entriesReportWhereInput], { nullable: true })
  OR?: Array<work_schedule_entriesReportWhereInput>;

  @Field(() => [work_schedule_entriesReportWhereInput], { nullable: true })
  NOT?: Array<work_schedule_entriesReportWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  user_id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  work_schedule_id?: StringFilter;

  @Field(() => Date)
  report_start: Date;

  @Field(() => Date)
  report_end: Date;

  @Field(() => DateTimeFilter, { nullable: true })
  date_start?: DateTimeFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  date_finish?: DateTimeNullableFilter;

  @Field(() => IntFilter, { nullable: true })
  duration?: IntFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  ip_open?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  ip_close?: StringNullableFilter;

  @Field(() => FloatFilter, { nullable: true })
  lat_open?: FloatFilter;

  @Field(() => FloatFilter, { nullable: true })
  lat_close?: FloatFilter;

  @Field(() => FloatFilter, { nullable: true })
  lon_open?: FloatFilter;

  @Field(() => FloatFilter, { nullable: true })
  lon_close?: FloatFilter;

  @Field(() => Enumwork_schedule_entry_statusFilter, { nullable: true })
  current_status?: Enumwork_schedule_entry_statusFilter;

  @Field(() => BoolFilter, { nullable: true })
  late?: BoolFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  created_by?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  updated_by?: StringNullableFilter;

  @Field(() => UsersRelationFilter, { nullable: true })
  work_schedule_entries_created_byTousers?: UsersRelationFilter;

  @Field(() => UsersRelationFilter, { nullable: true })
  work_schedule_entries_updated_byTousers?: UsersRelationFilter;

  @Field(() => UsersRelationFilter, { nullable: true })
  work_schedule_entries_users?: UsersRelationFilter;

  @Field(() => Work_schedulesRelationFilter, { nullable: true })
  work_schedule_entries_work_schedules?: Work_schedulesRelationFilter;
}

@ArgsType()
export class WorkScheduleEntriesReportArgs {
  @Field(() => work_schedule_entriesReportWhereInput, { nullable: true })
  @Type(() => work_schedule_entriesReportWhereInput)
  where?: work_schedule_entriesReportWhereInput;

  @Field(() => [work_schedule_entriesOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<work_schedule_entriesOrderByWithRelationInput>;

  @Field(() => work_schedule_entriesWhereUniqueInput, { nullable: true })
  cursor?: work_schedule_entriesWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [Work_schedule_entriesScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof Work_schedule_entriesScalarFieldEnum>;
}
