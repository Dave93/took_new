import { Module } from '@nestjs/common';
import { OrderStatusService } from './order_status.service';
import { OrderStatusResolver } from './order_status.resolver';
import { PrismaService } from 'src/prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';

@Module({
  providers: [OrderStatusResolver, OrderStatusService, PrismaService, CacheControlService],
})
export class OrderStatusModule {}
