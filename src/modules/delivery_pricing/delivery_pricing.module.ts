import { CacheModule, Module } from '@nestjs/common';
import { DeliveryPricingService } from './delivery_pricing.service';
import { DeliveryPricingResolver } from './delivery_pricing.resolver';
import { PrismaService } from 'src/prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';

@Module({
  providers: [DeliveryPricingResolver, DeliveryPricingService, PrismaService, CacheControlService],
})
export class DeliveryPricingModule {}
