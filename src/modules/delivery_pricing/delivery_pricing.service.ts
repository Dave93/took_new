import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { Injectable } from '@nestjs/common';
import { delivery_pricingWhereInput } from 'src/@generated/delivery-pricing/delivery-pricing-where.input';
import { FindManydeliveryPricingArgs } from 'src/@generated/prisma/find-manydelivery-pricing.args';
import { UpdateOnedeliveryPricingArgs } from 'src/@generated/prisma/update-onedelivery-pricing.args';
import { CreateOnedeliveryPricingArgs } from 'src/helpers/create-one.args';

import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DeliveryPricingService {
  constructor(private readonly prismaService: PrismaService, private readonly cacheControl: CacheControlService) {}
  async create(createDeliveryPricingInput: CreateOnedeliveryPricingArgs) {
    let res = await this.prismaService.delivery_pricing.create(createDeliveryPricingInput);
    await this.cacheControl.cacheDeliveryPricing();
    return res;
  }

  findAll(params: FindManydeliveryPricingArgs) {
    return this.prismaService.delivery_pricing.findMany({
      ...params,
      include: {
        organization: true,
      },
    });
  }

  deliveryPricingConnection(where: delivery_pricingWhereInput) {
    return this.prismaService.delivery_pricing.aggregate({
      _count: {
        id: true,
      },
      where,
    });
  }

  findOne(id: string) {
    return this.prismaService.delivery_pricing.findUnique({
      where: {
        id,
      },
    });
  }

  async update(updateDeliveryPricingInput: UpdateOnedeliveryPricingArgs) {
    let res = await this.prismaService.delivery_pricing.update(updateDeliveryPricingInput);
    await this.cacheControl.cacheDeliveryPricing();
    return res;
  }

  remove(id: string) {
    return `This action removes a #${id} deliveryPricing`;
  }
}
