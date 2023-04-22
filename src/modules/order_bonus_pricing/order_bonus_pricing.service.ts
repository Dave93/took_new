import { Injectable } from '@nestjs/common';
import { CreateOrderBonusPricingInput } from './dto/create-order_bonus_pricing.input';
import { UpdateOrderBonusPricingInput } from './dto/update-order_bonus_pricing.input';
import { CreateOneorderBonusPricingArgs, order_bonus_pricingUpdateArgs } from '../../helpers/create-one.args';
import { PrismaService } from '../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { FindManyorderBonusPricingArgs } from '../../@generated/prisma/find-manyorder-bonus-pricing.args';
import { order_bonus_pricingWhereInput } from '../../@generated/order-bonus-pricing/order-bonus-pricing-where.input';

@Injectable()
export class OrderBonusPricingService {
  constructor(private readonly prismaService: PrismaService, private readonly cacheControl: CacheControlService) {}
  async create(createOrderBonusPricingInput: CreateOneorderBonusPricingArgs) {
    const res = await this.prismaService.order_bonus_pricing.create(createOrderBonusPricingInput);
    await this.cacheControl.cacheOrderBonusPricing();
    return res;
  }

  findAll(params: FindManyorderBonusPricingArgs) {
    return this.prismaService.order_bonus_pricing.findMany({
      ...params,
      include: {
        organization: true,
        terminals: true,
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.order_bonus_pricing.findUnique({
      where: {
        id,
      },
    });
  }

  async update(updateOrderBonusPricingInput: order_bonus_pricingUpdateArgs) {
    const res = await this.prismaService.order_bonus_pricing.update(updateOrderBonusPricingInput);
    await this.cacheControl.cacheOrderBonusPricing();
    return res;
  }

  remove(id: number) {
    return `This action removes a #${id} orderBonusPricing`;
  }

  orderBonusPricingsConnection(where: order_bonus_pricingWhereInput) {
    return this.prismaService.order_bonus_pricing.aggregate({
      _count: {
        id: true,
      },
      where,
    });
  }
}
