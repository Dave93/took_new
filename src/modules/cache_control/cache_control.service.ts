import { CACHE_MANAGER, Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { order_bonus_pricing, organization, work_schedules } from '@prisma/client';
import { Cache } from 'cache-manager';
import { PrismaService } from 'src/prisma.service';
import { order_status } from '../../@generated/order-status/order-status.model';
import { api_tokens } from '../../@generated/api-tokens/api-tokens.model';
import { terminals } from '../../@generated/terminals/terminals.model';
import { delivery_pricing } from '../../@generated/delivery-pricing/delivery-pricing.model';

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
    await this.cacheOrderBonusPricing();
    await this.invalidateCache('api_tokens');
    await this.invalidateCache('roles');
    await this.invalidateCache('system_configs');
  }

  /** Caching Start */
  async cacheWorkSchedules() {
    const workSchedules = await this.prismaService.work_schedules.findMany();
    return this.cacheManager.set('workSchedules', workSchedules, { ttl: 0 });
  }

  async cacheDeliveryPricing() {
    const deliveryPricing = await this.prismaService.delivery_pricing.findMany();
    return this.cacheManager.set('deliveryPricing', deliveryPricing, { ttl: 0 });
  }

  async cacheOrderBonusPricing() {
    const orderBonusPricing = await this.prismaService.order_bonus_pricing.findMany();
    return this.cacheManager.set('orderBonusPricing', orderBonusPricing, { ttl: 0 });
  }

  async cacheTerminals() {
    const terminals = await this.prismaService.terminals.findMany({
      include: {
        organization: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    return this.cacheManager.set('all_terminals', terminals, { ttl: 0 });
  }

  async cacheOrganizations() {
    const organizations = await this.prismaService.organization.findMany();
    return this.cacheManager.set('organizations', organizations, { ttl: 0 });
  }

  async cacheOrderStatus() {
    const orderStatus = await this.prismaService.order_status.findMany({
      include: {
        order_status_organization: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    return this.cacheManager.set('orderStatus', orderStatus, { ttl: 0 });
  }

  /** Caching end */

  /** Getters start */

  async getOrganization(id: string) {
    const organizations: organization[] = await this.cacheManager.get('organizations');
    return organizations.find((organization) => organization.id === id);
  }
  async getOrganizations() {
    const organizations: organization[] = await this.cacheManager.get('organizations');
    return organizations;
  }

  getTerminals(): Promise<terminals[]> {
    return this.cacheManager.get('all_terminals');
  }

  getOrderStatus() {
    return this.cacheManager.get('orderStatus');
  }

  getOrderStatuses(): Promise<order_status[]> {
    return this.cacheManager.get('orderStatus');
  }

  getAllApiTokens(): Promise<api_tokens[]> {
    return this.cacheManager.get('api_tokens');
  }

  async getOrganizationDeliveryPricing(organizationId: string) {
    const deliveryPricing: delivery_pricing[] = await this.cacheManager.get('deliveryPricing');
    return deliveryPricing.filter((pricing) => pricing.organization_id === organizationId);
  }

  async getBonusPricing(organizationId: string) {
    const orderBonusPricing: order_bonus_pricing[] = await this.cacheManager.get('orderBonusPricing');
    return orderBonusPricing.filter((pricing) => pricing.organization_id === organizationId);
  }

  async getDeliveryPricingById(id: string) {
    const deliveryPricing: delivery_pricing[] = await this.cacheManager.get('deliveryPricing');
    return deliveryPricing.find((pricing) => pricing.id === id);
  }

  async getSetting(name: string) {
    const systemConfigs = await this.cacheManager.get('system_configs');
    return systemConfigs[name];
  }

  getCachedRoles() {
    return this.cacheManager.get('roles');
  }

  getWorkSchedules() {
    return this.cacheManager.get('workSchedules');
  }

  /** Getters end */

  // async getAllWorkSchedules() {
  //   let workSchedules: work_schedules[] = await this.cacheManager.get('workSchedules');
  //   return workSchedules;
  // }
  async invalidateCache(source: string) {
    await this.cacheManager.del(source);
    switch (source) {
      case 'api_tokens':
        const apiTokens = await this.prismaService.api_tokens.findMany({
          include: {
            api_tokens_organization: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        });
        return this.cacheManager.set('api_tokens', apiTokens, { ttl: 0 });
      case 'roles':
        const roles = await this.prismaService.roles.findMany({
          include: {
            roles_permissions: {
              select: {
                permissions: {
                  select: {
                    slug: true,
                  },
                },
              },
            },
          },
        });
        const result = roles.map((role) => {
          return {
            id: role.id,
            name: role.name,
            code: role.code,
            permissions: role.roles_permissions.map((rolePermission) => rolePermission.permissions.slug),
          };
        });
        return this.cacheManager.set('roles', result, { ttl: 0 });
      case 'system_configs':
        const systemConfigs = await this.prismaService.system_configs.findMany();
        const res = {};
        systemConfigs.forEach((config) => {
          res[config.name] = config.value;
        });
        return this.cacheManager.set('system_configs', res, { ttl: 0 });
    }
  }
}
