import { Module } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { SearchService } from '@modules/search/search.service';
import { ConfigService } from '@nestjs/config';
import { OrderIndexProcessor } from '@modules/queues/order_index/order_index.processor';

@Module({
  providers: [OrderIndexProcessor, PrismaService, CacheControlService, SearchService, ConfigService],
})
export class OrderIndexModule {}
