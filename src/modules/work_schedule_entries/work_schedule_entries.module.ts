import { CacheModule, Module } from '@nestjs/common';
import { WorkScheduleEntriesService } from './work_schedule_entries.service';
import { WorkScheduleEntriesResolver } from './work_schedule_entries.resolver';
import { PrismaService } from 'src/prisma.service';
import { TokenModule } from '@modules/auth/token.module';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { CacheControlModule } from '@modules/cache_control/cache_control.module';

@Module({
  imports: [TokenModule, CacheControlModule],
  providers: [WorkScheduleEntriesResolver, WorkScheduleEntriesService, PrismaService, CacheControlService],
})
export class WorkScheduleEntriesModule {}
