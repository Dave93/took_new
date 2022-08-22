import { Module } from '@nestjs/common';
import { DeliveryPricingService } from './delivery_pricing.service';
import { DeliveryPricingResolver } from './delivery_pricing.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [DeliveryPricingResolver, DeliveryPricingService, PrismaService],
})
export class DeliveryPricingModule {}
