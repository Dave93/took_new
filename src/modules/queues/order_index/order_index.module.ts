import { Module } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { SearchService } from '@modules/search/search.service';
import { ConfigService } from '@nestjs/config';
import { OrderIndexProcessor } from '@modules/queues/order_index/order_index.processor';
import { SystemConfigsService } from '@modules/system_configs/system_configs.service';

@Module({
  providers: [
    OrderIndexProcessor,
    PrismaService,
    CacheControlService,
    SystemConfigsService,
    SearchService,
    ConfigService,
  ],
})
export class OrderIndexModule {}
