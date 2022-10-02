import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { PrismaService } from '../../prisma.service';
import { BgJobsProcessor } from '@modules/bg_jobs/bg_jobs.processor';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { SearchService } from '@modules/search/search.service';
import { SearchModule } from '@modules/search/search.module';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'bg_jobs',
    }),
  ],
  providers: [PrismaService, BgJobsProcessor, CacheControlService, SearchService, ConfigService],
})
export class BgJobsModule {}
