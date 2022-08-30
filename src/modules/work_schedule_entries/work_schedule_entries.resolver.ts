import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WorkScheduleEntriesService } from './work_schedule_entries.service';
import { WorkScheduleEntry } from './entities/work_schedule_entry.entity';
import { work_schedule_entries } from 'src/@generated/work-schedule-entries/work-schedule-entries.model';
import OpenTimeEntryArgs from './dto/open-time-entry.args';
import { RealIP } from 'nestjs-real-ip';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@modules/auth/guards';
import { CurrentUser } from '@modules/auth';
import { users } from '@prisma/client';

@Resolver(() => WorkScheduleEntry)
export class WorkScheduleEntriesResolver {
  constructor(private readonly workScheduleEntriesService: WorkScheduleEntriesService) {}

  @Mutation(() => work_schedule_entries)
  @UseGuards(JwtAuthGuard)
  openTimeEntry(@Args() openTimeLocation: OpenTimeEntryArgs, @RealIP() ip: string, @CurrentUser() user: users) {
    return this.workScheduleEntriesService.openTimeEntry(openTimeLocation, ip, user);
  }
}
