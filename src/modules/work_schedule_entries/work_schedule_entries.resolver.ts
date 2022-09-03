import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WorkScheduleEntriesService } from './work_schedule_entries.service';
import { WorkScheduleEntry } from './entities/work_schedule_entry.entity';
import { work_schedule_entries } from 'src/@generated/work-schedule-entries/work-schedule-entries.model';
import OpenTimeEntryArgs, { CloseTimeEntryArgs } from './dto/open-time-entry.args';
import { RealIP } from 'nestjs-real-ip';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@modules/auth/guards';
import { CurrentUser } from '@modules/auth';
import { users } from '@prisma/client';
import { WorkScheduleEnrtiesReportRecord } from '@helpers';

@Resolver(() => WorkScheduleEntry)
export class WorkScheduleEntriesResolver {
  constructor(private readonly workScheduleEntriesService: WorkScheduleEntriesService) {}

  @Mutation(() => work_schedule_entries)
  @UseGuards(JwtAuthGuard)
  openTimeEntry(@Args() openTimeLocation: OpenTimeEntryArgs, @RealIP() ip: string, @CurrentUser() user: users) {
    return this.workScheduleEntriesService.openTimeEntry(openTimeLocation, ip, user);
  }

  @Mutation(() => work_schedule_entries)
  @UseGuards(JwtAuthGuard)
  closeTimeEntry(@Args() openTimeLocation: CloseTimeEntryArgs, @RealIP() ip: string, @CurrentUser() user: users) {
    return this.workScheduleEntriesService.closeTimeEntry(openTimeLocation, ip, user);
  }

  @Query(() => [WorkScheduleEnrtiesReportRecord], { name: 'workScheduleEntriesReport' })
  @UseGuards(JwtAuthGuard)
  workScheduleEntriesReport(
    @Args('start_date') start_date: Date,
    @Args('end_date') end_date: Date,
    @CurrentUser() user: users,
  ) {
    return this.workScheduleEntriesService.workScheduleEntriesReportForPeriod(start_date, end_date, user);
  }
}
