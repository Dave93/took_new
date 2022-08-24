import { Module } from '@nestjs/common';
import { WorkSchedulesService } from './work_schedules.service';
import { WorkSchedulesResolver } from './work_schedules.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [WorkSchedulesResolver, WorkSchedulesService, PrismaService],
})
export class WorkSchedulesModule {}
