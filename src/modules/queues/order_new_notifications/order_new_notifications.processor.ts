import { Inject, Module } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { SearchService } from '@modules/search/search.service';
import { ConfigService } from '@nestjs/config';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { PUB_SUB } from '@modules/pubsub/pubsub.module';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { order_status } from '../../../@generated/order-status/order-status.model';
import { FcmService } from 'nestjs-fcm';
import { sendNotification } from '../../../helpers/send_notification';

@Processor('new_order_notifications')
export class OrderNewNotificationsProcessor {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cacheService: CacheControlService,
    private readonly configService: ConfigService,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
  ) {}

  @Process('newOrderNotify')
  async process(job: Job) {
    const { order } = job.data;
    console.log(job.data);
    const orderStatuses: order_status[] = await this.cacheService.getOrderStatuses();
    // get order organization statuses
    const orderOrganizationStatuses = orderStatuses.filter(
      (orderStatus) => orderStatus.organization_id === order.organization_id,
    );
    // get order statuses that need notification
    const orderStatusesThatNeedNotification = orderOrganizationStatuses.filter(
      (orderStatus) => !orderStatus.finish && !orderStatus.cancel,
    );

    // get organization from cache
    const organization = await this.cacheService.getOrganization(order.organization_id);

    // organization max active order count
    const maxActiveOrderCount = organization.max_active_order_count;

    // get active orders for terminal and group by courier_id and aggregate count
    const activeOrders = await this.prismaService.orders.groupBy({
      by: ['courier_id'],
      where: {
        terminal_id: order.terminal_id,
        order_status_id: {
          in: orderStatusesThatNeedNotification.map((orderStatus) => orderStatus.id),
        },
        courier_id: {
          not: null,
        },
      },
      _count: {
        id: true,
      },
      having: {
        id: {
          _count: {
            lt: maxActiveOrderCount,
          },
        },
      },
    });

    const courierIds = activeOrders.map((o) => o.courier_id);
    // console.log('courierIds', courierIds);
    // get online users
    const onlineUsers = await this.prismaService.users.findMany({
      where: {
        id: {
          in: courierIds,
        },
        is_online: true,
      },
      select: {
        id: true,
        fcm_token: true,
      },
    });

    // console.log(onlineUsers.map((user) => user.fcm_token));
    if (onlineUsers.length > 0) {
      try {
        const serverKey = await this.configService.get('FCM_SERVER_KEY');
        const data = await sendNotification(
          serverKey,
          onlineUsers.map((user) => user.fcm_token),
          {
            notification: {
              title: 'New order',
              body: `New order ${order.id} is available for you`,
            },
            data: {
              order_id: order.id,
              order_status_id: order.order_status_id,
              terminal_id: order.terminal_id,
              actionButtons: [
                {
                  key: 'REDIRECT',
                  label: 'Redirect',
                  // autoDismissible: true,
                },
                {
                  key: 'DISMISS',
                  label: 'Dismiss',
                  actionType: 'DismissAction',
                  isDangerousOption: true,
                  // autoDismissible: true,
                },
              ],
            },
          },
        );

        await this.pubSub.publish('newApproveOrder', {
          newApproveOrder: order,
        });
        // const data = await this.fcmService.sendNotification(
        //   onlineUsers.map((user) => user.fcm_token),
        //   {
        //     mutable_content: true,
        //     notification: {
        //       title: 'New order',
        //       body: `New order ${order.id} is available for you`,
        //     },
        //     data: {
        //       order_id: order.id,
        //       order_status_id: order.order_status_id,
        //       terminal_id: order.terminal_id,
        //     },
        //   },
        //   false,
        // );

        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
