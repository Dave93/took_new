import { Process, Processor } from '@nestjs/bull';
import { PrismaService } from '../../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { SearchService } from '@modules/search/search.service';
import { Job } from 'bull';
import { order_status } from '../../../@generated/order-status/order-status.model';
import { organization_payment_types } from '../../../@generated/organization/organization-payment-types.enum';
import { order_transaction_type } from '../../../@generated/prisma/order-transaction-type.enum';
import { order_transaction_status } from '../../../@generated/prisma/order-transaction-status.enum';
import { OrderCompleteService } from '@modules/queues/order_complete/order_complete.service';
import { order_transaction_payment_type } from '../../../@generated/prisma/order-transaction-payment-type.enum';
import dayjs from 'dayjs';
import { getMinutes, getMinutesNow } from '../../../helpers/dates';
import { max, sort } from 'radash';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from '@nestjs/axios';

@Processor('order_ecommerce_webhook_actions')
export class OrderEcommerceWebhookProcessor {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cacheService: CacheControlService,
    private readonly httpService: HttpService,
  ) {}

  @Process('processOrderEcommerceWebhook')
  async process(job: Job) {
    const { order } = job.data;
    const orderStatuses: order_status[] = await this.cacheService.getOrderStatuses();
    // get order organization statuses
    const orderOrganizationStatuses = orderStatuses.filter(
      (orderStatus) => orderStatus.organization_id === order.organization_id,
    );

    // get organization
    const organization = await this.cacheService.getOrganization(order.organization_id);

    const webhookUrl = organization.webhook;
    if (!webhookUrl) {
      return;
    }

    const apiToken = await this.prismaService.api_tokens.findFirst({
      where: {
        organization_id: order.organization_id,
      },
      select: {
        token: true,
      },
    });

    const orderStatus = orderOrganizationStatuses.find(
      (orderStatus) => orderStatus.id === order.orders_order_status.id,
    );

    const orderStatusCode = orderStatus.code;
    if (orderStatusCode) {
      const data: any = {
        log: {
          action: orderStatusCode,
          text: orderStatus.status_change_text,
        },
        order: {
          id: order.id,
        },
      };

      if (order.courier_id) {
        const courier = await this.prismaService.users.findUnique({
          where: {
            id: order.courier_id,
          },
          select: {
            id: true,
            first_name: true,
            last_name: true,
            phone: true,
          },
        });
        data.courier = {
          id: courier.id,
          lastName: `${courier.last_name} ${courier.first_name}`,
          phone: courier.phone,
        };
      }

      await lastValueFrom(
        this.httpService
          .post(webhookUrl, data, {
            headers: {
              Authorization: `Bearer ${apiToken.token}`,
            },
          })
          .pipe(map((response) => response.data)),
      );
    }
  }
}
