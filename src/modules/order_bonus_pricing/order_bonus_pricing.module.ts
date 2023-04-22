import { Module } from '@nestjs/common';
import { OrderBonusPricingService } from './order_bonus_pricing.service';
import { OrderBonusPricingResolver } from './order_bonus_pricing.resolver';
import { PrismaService } from '../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';

@Module({
  providers: [OrderBonusPricingResolver, OrderBonusPricingService, PrismaService, CacheControlService],
})
export class OrderBonusPricingModule {}
