import { Module } from '@nestjs/common';
import { OrdersLocationsService } from './orders_locations.service';
import { OrdersLocationsResolver } from './orders_locations.resolver';
import { PrismaService } from '../../prisma.service';
import { BgJobsModule } from '@modules/bg_jobs/bg_jobs.module';
import { BgJobsProcessor } from '@modules/bg_jobs/bg_jobs.processor';
import { BullModule } from '@nestjs/bull';
import { TokenModule } from '@modules/auth/token.module';
import { SearchService } from '@modules/search/search.service';
import { ConfigService } from '@nestjs/config';
import { CacheControlService } from '@modules/cache_control/cache_control.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'bg_jobs',
    }),
    TokenModule,
  ],
  providers: [
    OrdersLocationsResolver,
    OrdersLocationsService,
    PrismaService,
    SearchService,
    ConfigService,
    CacheControlService,
  ],
})
export class OrdersLocationsModule {}
