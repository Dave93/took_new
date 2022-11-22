import { Process, Processor } from '@nestjs/bull';
import { PrismaService } from '../../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { OrderCompleteService } from '@modules/queues/order_complete/order_complete.service';
import { Job } from 'bull';
import { SearchService } from '@modules/search/search.service';

@Processor('order_index')
export class OrderIndexProcessor {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cacheService: CacheControlService,
    private readonly searchService: SearchService,
  ) {}

  @Process('processOrderIndex')
  async process(job: Job) {
    const { orderId } = job.data;
    const order = await this.prismaService.orders.findUnique({
      where: {
        id: orderId,
      },
      select: {
        id: true,
        organization_id: true,
        terminal_id: true,
        courier_id: true,
        order_status_id: true,
        order_number: true,
        created_at: true,
        cancel_reason: true,
        order_items: true,
        order_price: true,
        customer_id: true,
        delivery_address: true,
        delivery_comment: true,
        delivery_price: true,
        delivery_pricing_id: true,
        delivery_type: true,
        distance: true,
        duration: true,
        finished_date: true,
        from_lat: true,
        from_lon: true,
        payment_type: true,
        pre_distance: true,
        pre_duration: true,
        to_lat: true,
        to_lon: true,
        orders_couriers: {
          select: {
            id: true,
            phone: true,
            first_name: true,
            drive_type: true,
            last_name: true,
            car_model: true,
            car_number: true,
            latitude: true,
            longitude: true,
          },
        },
        orders_customers: {
          select: {
            id: true,
            phone: true,
            name: true,
          },
        },
        orders_order_status: {
          select: {
            id: true,
            name: true,
            cancel: true,
            finish: true,
            waiting: true,
            on_way: true,
            in_terminal: true,
          },
        },
        orders_terminals: {
          select: {
            id: true,
            name: true,
            active: true,
            address: true,
            external_id: true,
          },
        },
        orders_organization: {
          select: {
            id: true,
            name: true,
            active: true,
            external_id: true,
          },
        },
      },
    });

    try {
      order['order_items'] = JSON.parse(order['order_items'] as string);
    } catch (e) {}

    // console.log('indexing order', JSON.stringify(order));

    try {
      console.log('indexing order', JSON.stringify(order));
      await this.searchService.indexOrder(order);
    } catch (e) {
      console.log(e);
    }
  }
}
