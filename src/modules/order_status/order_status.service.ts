import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { Injectable } from '@nestjs/common';
import { order_statusWhereInput } from 'src/@generated/order-status/order-status-where.input';
import { CreateOneorderStatusArgs } from 'src/@generated/prisma/create-oneorder-status.args';
import { FindManyorderStatusArgs } from 'src/@generated/prisma/find-manyorder-status.args';
import { UpdateOneorderStatusArgs } from 'src/@generated/prisma/update-oneorder-status.args';
import { order_statusCreateArgs } from 'src/helpers/create-one.args';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderStatusInput } from './dto/create-order_status.input';
import { UpdateOrderStatusInput } from './dto/update-order_status.input';

@Injectable()
export class OrderStatusService {
  constructor(private readonly prismaService: PrismaService, private readonly cacheControl: CacheControlService) {}

  async create(createOrderStatusInput: order_statusCreateArgs) {
    const res = await this.prismaService.order_status.create(createOrderStatusInput);
    await this.cacheControl.cacheOrderStatus();
    return res;
  }

  orderStatusConnection(where: order_statusWhereInput) {
    return this.prismaService.order_status.aggregate({
      where,
      _count: {
        id: true,
      },
    });
  }

  findAll(params: FindManyorderStatusArgs) {
    return this.prismaService.order_status.findMany({
      ...params,
      include: {
        order_status_organization: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.order_status.findUnique({
      where: {
        id,
      },
    });
  }

  async update(updateOrderStatusInput: UpdateOneorderStatusArgs) {
    const res = await this.prismaService.order_status.update(updateOrderStatusInput);
    await this.cacheControl.cacheOrderStatus();
    return res;
  }

  remove(id: number) {
    return `This action removes a #${id} orderStatus`;
  }

  getAllCached() {
    return this.cacheControl.getOrderStatus();
  }
}
