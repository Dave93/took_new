import { CACHE_MANAGER, Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CacheControlService implements OnModuleInit {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache, private readonly prismaService: PrismaService) {}
  async onModuleInit() {
    await this.cacheAll();
  }

  async cacheAll() {
    await this.cacheWorkSchedules();
    await this.cacheDeliveryPricing();
    await this.cacheTerminals();
    await this.cacheOrganizations();
  }

  async cacheWorkSchedules() {
    let workSchedules = await this.prismaService.work_schedules.findMany();
    return this.cacheManager.set('workSchedules', workSchedules);
  }

  async cacheDeliveryPricing() {
    let deliveryPricing = await this.prismaService.delivery_pricing.findMany();
    return this.cacheManager.set('deliveryPricing', deliveryPricing);
  }

  async cacheTerminals() {
    let terminals = await this.prismaService.terminals.findMany();
    return this.cacheManager.set('terminals', terminals);
  }

  async cacheOrganizations() {
    let organizations = await this.prismaService.organization.findMany();
    return this.cacheManager.set('organizations', organizations);
  }
}
