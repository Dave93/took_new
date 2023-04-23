import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { PrismaService } from '../../prisma.service';
import { BgJobsProcessor } from '@modules/bg_jobs/bg_jobs.processor';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { SearchService } from '@modules/search/search.service';
import { SearchModule } from '@modules/search/search.module';
import { ConfigService } from '@nestjs/config';
import { SystemConfigsService } from '@modules/system_configs/system_configs.service';

@Module({
  imports: [],
  providers: [PrismaService, BgJobsProcessor, CacheControlService, SystemConfigsService, SearchService],
})
export class BgJobsModule {}
