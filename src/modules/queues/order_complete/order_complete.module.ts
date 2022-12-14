import { Module } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { SearchService } from '@modules/search/search.service';
import { ConfigService } from '@nestjs/config';
import { OrderCompleteService } from './order_complete.service';
import { OrderCompleteProcessor } from '@modules/queues/order_complete/order_complete.processor';

@Module({
  providers: [
    OrderCompleteProcessor,
    PrismaService,
    CacheControlService,
    SearchService,
    ConfigService,
    OrderCompleteService,
  ],
})
export class OrderCompleteModule {}
