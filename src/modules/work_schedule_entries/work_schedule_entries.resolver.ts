import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WorkScheduleEntriesService } from './work_schedule_entries.service';
import { WorkScheduleEntry } from './entities/work_schedule_entry.entity';
import { work_schedule_entries } from 'src/@generated/work-schedule-entries/work-schedule-entries.model';
import OpenTimeEntryArgs, { CloseTimeEntryArgs } from './dto/open-time-entry.args';
import { RealIP } from 'nestjs-real-ip';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@modules/auth/guards';
import { CurrentUser, Permissions } from '@modules/auth';
import { users } from '@prisma/client';
import { WorkScheduleEntriesReportRecord, WorkScheduleEntriesReportRes } from '@helpers';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { work_schedule_entriesWhereInput } from 'src/@generated/work-schedule-entries/work-schedule-entries-where.input';
import { FindManyworkScheduleEntriesArgs } from 'src/@generated/prisma/find-manywork-schedule-entries.args';
import { WorkScheduleEntriesReportArgs, work_schedule_entriesReportWhereInput } from './dto/report.args';
import { UserIp } from '../../decorators/user_id';

@Resolver(() => WorkScheduleEntry)
export class WorkScheduleEntriesResolver {
  constructor(private readonly workScheduleEntriesService: WorkScheduleEntriesService) {}

  @Mutation(() => work_schedule_entries)
  @UseGuards(JwtAuthGuard)
  openTimeEntry(@Args() openTimeLocation: OpenTimeEntryArgs, @UserIp() ip: string, @CurrentUser() user: users) {
    return this.workScheduleEntriesService.openTimeEntry(openTimeLocation, ip, user);
  }

  @Mutation(() => work_schedule_entries)
  @UseGuards(JwtAuthGuard)
  closeTimeEntry(@Args() openTimeLocation: CloseTimeEntryArgs, @UserIp() ip: string, @CurrentUser() user: users) {
    return this.workScheduleEntriesService.closeTimeEntry(openTimeLocation, ip, user);
  }

  @Query(() => PrismaAggregateCount, { name: 'workScheduleEntriesReportConnection' })
  @Permissions('work_schedule_entries_report.list')
  workScheduleEntriesReportConnection(@Args('where') where: work_schedule_entriesReportWhereInput) {
    return {
      _count: {
        id: 100000,
      },
    };
  }

  @Query(() => WorkScheduleEntriesReportRes, { name: 'workScheduleEntriesReport' })
  @Permissions('work_schedule_entries_report.list')
  workScheduleEntriesReport(@Args() params: WorkScheduleEntriesReportArgs) {
    return this.workScheduleEntriesService.workScheduleEntriesReport(params);
  }
}
