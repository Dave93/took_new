import { Injectable } from '@nestjs/common';
import { FindManyordersArgs } from 'src/@generated/orders/find-manyorders.args';
import { ordersWhereInput } from 'src/@generated/orders/orders-where.input';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { CacheControlService } from '@modules/cache_control/cache_control.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prismaService: PrismaService, private readonly cacheControl: CacheControlService) {}
  create(createOrderInput: CreateOrderInput) {
    return 'This action adds a new order';
  }

  findAll(params: FindManyordersArgs) {
    return this.prismaService.orders.findMany({
      ...params,
      include: {
        orders_organization: {
          select: {
            id: true,
            name: true,
          },
        },
        orders_couriers: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
          },
        },
        orders_customers: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        orders_order_status: {
          select: {
            id: true,
            name: true,
            color: true,
          },
        },
        orders_terminals: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.orders.findUnique({
      where: {
        id,
      },
      include: {
        orders_organization: {
          select: {
            id: true,
            name: true,
          },
        },
        orders_couriers: {
          select: {
            id: true,
            first_name: true,
            last_name: true,
          },
        },
        orders_customers: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
        orders_order_status: {
          select: {
            id: true,
            name: true,
            color: true,
          },
        },
        orders_terminals: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  update(id: number, updateOrderInput: UpdateOrderInput) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }

  ordersConnection(where: ordersWhereInput) {
    return this.prismaService.orders.aggregate({
      _count: {
        id: true,
      },
      where,
    });
  }

  async getCouriersForOrder(terminalId: string) {
    const roles: any = await this.cacheControl.getCachedRoles();
    const courierRole = roles.find((role) => role.code === 'courier');
    return this.prismaService.users.findMany({
      where: {
        users_terminals: {
          some: {
            terminal_id: terminalId,
          },
        },
        users_roles_usersTousers_roles_user_id: {
          some: {
            role_id: courierRole.id,
          },
        },
        status: 'active',
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
      },
    });
  }

  async changeOrderCourier(orderId: string, courierId: string) {
    return this.prismaService.orders.update({
      where: {
        id: orderId,
      },
      data: {
        orders_couriers: {
          connect: {
            id: courierId,
          },
        },
      },
    });
  }
}
