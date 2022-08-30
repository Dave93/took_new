import { CacheModule, Module } from '@nestjs/common';
import { WorkScheduleEntriesService } from './work_schedule_entries.service';
import { WorkScheduleEntriesResolver } from './work_schedule_entries.resolver';
import { PrismaService } from 'src/prisma.service';
import { TokenModule } from '@modules/auth/token.module';

@Module({
  imports: [CacheModule.register(), TokenModule],
  providers: [WorkScheduleEntriesResolver, WorkScheduleEntriesService, PrismaService],
})
export class WorkScheduleEntriesModule {}
