import { Injectable } from '@nestjs/common';
import { CreateOrdersLocationInput } from './dto/create-orders_location.input';
import { UpdateOrdersLocationInput } from './dto/update-orders_location.input';
import { CurrentUser } from '@auth';
import { users } from '@prisma/client';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { PrismaService } from '../../prisma.service';
import { SearchService } from '@modules/search/search.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';

@Injectable()
export class OrdersLocationsService {
  constructor(
    private readonly prismaService: PrismaService,
    @InjectQueue('bg_jobs') private readonly bgJobsQueue: Queue,
    private readonly searchService: SearchService,
    private readonly cacheControlService: CacheControlService,
  ) {}
  create(createOrdersLocationInput: CreateOrdersLocationInput) {
    return 'This action adds a new ordersLocation';
  }

  findAll() {
    return `This action returns all ordersLocations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordersLocation`;
  }

  update(id: number, updateOrdersLocationInput: UpdateOrdersLocationInput) {
    return `This action updates a #${id} ordersLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordersLocation`;
  }

  async storeLocation(data: CreateOrdersLocationInput, @CurrentUser() user: users) {
    if (data.latitude) {
      const updateData = {
        latitude: data.latitude,
        longitude: data.longitude,
      };
      if (data.appVersion) {
        updateData['app_version'] = data.appVersion;
      }
      try {
        await this.prismaService.users.update({
          where: {
            id: user.id,
          },
          data: updateData,
        });
        await this.bgJobsQueue.add('registerCourierLocation', {
          data,
          user,
        });
      } catch (e) {}
    }
    return {
      success: true,
    };
  }

  async findOrderLocations(orderId: string) {
    let res = await this.searchService.findOrderLocations(orderId);
    const orderStatuses = await this.cacheControlService.getOrderStatuses();
    res = res.map((item) => {
      const status = orderStatuses.find((status) => status.id === item.order_status_id);
      return {
        ...item,
        status_color: status?.color,
        status_name: status?.name,
      };
    });
    return res;
  }
}
