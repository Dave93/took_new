import { CACHE_MANAGER, Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { order_bonus_pricing, organization, work_schedules } from '@prisma/client';
import { Cache } from 'cache-manager';
import { PrismaService } from 'src/prisma.service';
import { order_status } from '../../@generated/order-status/order-status.model';
import { api_tokens } from '../../@generated/api-tokens/api-tokens.model';
import { terminals } from '../../@generated/terminals/terminals.model';
import { delivery_pricing } from '../../@generated/delivery-pricing/delivery-pricing.model';
import {ConfigService} from "@nestjs/config";

@Injectable()
export class CacheControlService implements OnModuleInit {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache, private readonly prismaService: PrismaService,
              private readonly configService: ConfigService) {}
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
    await this.cacheApiTokens();
    await this.cacheRoles();
    await this.cacheSystemConfigs();
  }

  /** Caching Start */
  async cacheWorkSchedules() {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    const workSchedules = await this.prismaService.work_schedules.findMany();
    return this.cacheManager.set(`${projectPrefix}_workSchedules`, workSchedules, { ttl: 0 });
  }

  async cacheDeliveryPricing() {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    const deliveryPricing = await this.prismaService.delivery_pricing.findMany();
    return this.cacheManager.set(`${projectPrefix}_deliveryPricing`, deliveryPricing, { ttl: 0 });
  }

  async cacheOrderBonusPricing() {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    const orderBonusPricing = await this.prismaService.order_bonus_pricing.findMany();
    return this.cacheManager.set(`${projectPrefix}_orderBonusPricing`, orderBonusPricing, { ttl: 0 });
  }

  async cacheTerminals() {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
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
    return this.cacheManager.set(`${projectPrefix}_all_terminals`, terminals, { ttl: 0 });
  }

  async cacheOrganizations() {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    const organizations = await this.prismaService.organization.findMany();
    return this.cacheManager.set(`${projectPrefix}_organizations`, organizations, { ttl: 0 });
  }

  async cacheOrderStatus() {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
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
    return this.cacheManager.set(`${projectPrefix}_orderStatus`, orderStatus, { ttl: 0 });
  }

  async cacheApiTokens() {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
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
    return this.cacheManager.set(`${projectPrefix}_api_tokens`, apiTokens, { ttl: 0 });
  }

  async cacheRoles() {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
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
    return this.cacheManager.set(`${projectPrefix}_roles`, result, { ttl: 0 });
  }

  async cacheSystemConfigs() {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    const systemConfigs = await this.prismaService.system_configs.findMany();
    const res = {};
    systemConfigs.forEach((config) => {
      res[config.name] = config.value;
    });
    return this.cacheManager.set(`${projectPrefix}_system_configs`, res, { ttl: 0 });
  }

  /** Caching end */

  /** Getters start */

  async getOrganization(id: string) {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    const organizations: organization[] = await this.cacheManager.get(`${projectPrefix}_organizations`);
    return organizations.find((organization) => organization.id === id);
  }
  async getOrganizations() {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    const organizations: organization[] = await this.cacheManager.get(`${projectPrefix}_organizations`);
    return organizations;
  }

  async getTerminals(): Promise<terminals[]> {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    return this.cacheManager.get(`${projectPrefix}_all_terminals`);
  }

  async getOrderStatus() {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    return this.cacheManager.get(`${projectPrefix}_orderStatus`);
  }

  async getOrderStatuses(): Promise<order_status[]> {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    return this.cacheManager.get(`${projectPrefix}_orderStatus`);
  }

  async getAllApiTokens(): Promise<api_tokens[]> {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    return this.cacheManager.get(`${projectPrefix}_api_tokens`);
  }

  async getOrganizationDeliveryPricing(organizationId: string) {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    const deliveryPricing: delivery_pricing[] = await this.cacheManager.get(`${projectPrefix}_deliveryPricing`);
    return deliveryPricing.filter((pricing) => pricing.organization_id === organizationId);
  }

  async getBonusPricing(organizationId: string) {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    const orderBonusPricing: order_bonus_pricing[] = await this.cacheManager.get(`${projectPrefix}_orderBonusPricing`);
    return orderBonusPricing.filter((pricing) => pricing.organization_id === organizationId);
  }

  async getDeliveryPricingById(id: string) {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    const deliveryPricing: delivery_pricing[] = await this.cacheManager.get(`${projectPrefix}_deliveryPricing`);
    return deliveryPricing.find((pricing) => pricing.id === id);
  }

  async getSetting(name: string) {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    const systemConfigs = await this.cacheManager.get(`${projectPrefix}_system_configs`);
    return systemConfigs[name];
  }

  async getCachedRoles() {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    return this.cacheManager.get(`${projectPrefix}_roles`);
  }

  async getWorkSchedules() {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    return this.cacheManager.get(`${projectPrefix}_workSchedules`);
  }

  /** Getters end */

}
