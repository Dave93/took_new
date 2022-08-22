import { Injectable } from '@nestjs/common';
import { delivery_pricingWhereInput } from 'src/@generated/delivery-pricing/delivery-pricing-where.input';
import { CreateOnedeliveryPricingArgs } from 'src/@generated/prisma/create-onedelivery-pricing.args';
import { FindManydeliveryPricingArgs } from 'src/@generated/prisma/find-manydelivery-pricing.args';
import { UpdateOnedeliveryPricingArgs } from 'src/@generated/prisma/update-onedelivery-pricing.args';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DeliveryPricingService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createDeliveryPricingInput: CreateOnedeliveryPricingArgs) {
    return this.prismaService.delivery_pricing.create(createDeliveryPricingInput);
  }

  findAll(params: FindManydeliveryPricingArgs) {
    return this.prismaService.delivery_pricing.findMany(params);
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

  update(updateDeliveryPricingInput: UpdateOnedeliveryPricingArgs) {
    return this.prismaService.delivery_pricing.update(updateDeliveryPricingInput);
  }

  remove(id: string) {
    return `This action removes a #${id} deliveryPricing`;
  }
}
