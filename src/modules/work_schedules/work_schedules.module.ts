import { CacheModule, Module } from '@nestjs/common';
import { WorkSchedulesService } from './work_schedules.service';
import { WorkSchedulesResolver } from './work_schedules.resolver';
import { PrismaService } from 'src/prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';

@Module({
  providers: [WorkSchedulesResolver, WorkSchedulesService, PrismaService, CacheControlService],
})
export class WorkSchedulesModule {}
