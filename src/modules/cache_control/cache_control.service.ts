import { CACHE_MANAGER, Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { organization, work_schedules } from '@prisma/client';
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
    await this.cacheOrderStatus();
  }

  /** Caching Start */
  async cacheWorkSchedules() {
    let workSchedules = await this.prismaService.work_schedules.findMany();
    return this.cacheManager.set('workSchedules', workSchedules, { ttl: 0 });
  }

  async cacheDeliveryPricing() {
    let deliveryPricing = await this.prismaService.delivery_pricing.findMany();
    return this.cacheManager.set('deliveryPricing', deliveryPricing, { ttl: 0 });
  }

  async cacheTerminals() {
    let terminals = await this.prismaService.terminals.findMany();
    return this.cacheManager.set('terminals', terminals, { ttl: 0 });
  }

  async cacheOrganizations() {
    let organizations = await this.prismaService.organization.findMany();
    return this.cacheManager.set('organizations', organizations, { ttl: 0 });
  }

  async cacheOrderStatus() {
    let orderStatus = await this.prismaService.order_status.findMany();
    return this.cacheManager.set('orderStatus', orderStatus, { ttl: 0 });
  }

  /** Caching end */

  /** Getters start */

  async getOrganization(id: string) {
    let organizations: organization[] = await this.cacheManager.get('organizations');
    return organizations.find((organization) => organization.id === id);
  }

  /** Getters end */

  // async getAllWorkSchedules() {
  //   let workSchedules: work_schedules[] = await this.cacheManager.get('workSchedules');
  //   return workSchedules;
  // }
}
