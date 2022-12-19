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

@Processor('order_complete_actions')
export class OrderCompleteProcessor {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cacheService: CacheControlService,
    private readonly orderCompleteService: OrderCompleteService,
  ) {}

  @Process('processOrderComplete')
  async process(job: Job) {
    const { order } = job.data;
    const orderStatuses: order_status[] = await this.cacheService.getOrderStatuses();
    // get order organization statuses
    const orderOrganizationStatuses = orderStatuses.filter(
      (orderStatus) => orderStatus.organization_id === order.organization_id,
    );

    // get organization
    const organization = await this.cacheService.getOrganization(order.organization_id);
    if (organization.payment_type == organization_payment_types.client) {
      return;
    }

    // check if order transaction exists
    const orderTransaction = await this.prismaService.order_transactions.findFirst({
      where: {
        order_id: order.id,
      },
    });
    if (orderTransaction) {
      return;
    }

    let isCash = false;
    if (order.payment_type == order_transaction_payment_type.cash) {
      isCash = true;
    } else {
      // get delivery pricing
      const deliveryPricing = await this.prismaService.delivery_pricing.findUnique({
        where: {
          id: order.delivery_pricing_id,
        },
        select: {
          payment_type: true,
        },
      });
      isCash = deliveryPricing.payment_type == order_transaction_payment_type.cash;
    }

    if (isCash) {
      try {
        // create order transaction
        await this.prismaService.order_transactions.create({
          data: {
            order_transactions_orders: {
              connect: {
                id: order.id,
              },
            },
            order_transactions_terminals: {
              connect: {
                id: order.orders_terminals.id,
              },
            },
            order_transactions_couriers: {
              connect: {
                id: order.courier_id,
              },
            },
            order_transactions_organizations: {
              connect: {
                id: order.organization_id,
              },
            },
            amount: order.delivery_price,
            not_paid_amount: order.delivery_price,
            transaction_type: 'order',
            transaction_payment_type: order_transaction_payment_type.cash,
          },
        });

        const courierTerminalBalance = await this.prismaService.courier_terminal_balance.findFirst({
          where: {
            courier_id: order.courier_id,
            terminal_id: order.orders_terminals.id,
          },
        });
        if (courierTerminalBalance) {
          await this.prismaService.courier_terminal_balance.update({
            where: {
              id: courierTerminalBalance.id,
            },
            data: {
              balance: courierTerminalBalance.balance + order.delivery_price,
            },
          });
        } else {
          await this.prismaService.courier_terminal_balance.create({
            data: {
              courier_id: order.courier_id,
              terminal_id: order.orders_terminals.id,
              balance: order.delivery_price,
              organization_id: order.organization_id,
            },
          });
        }
        // await this.prismaService.users.update({
        //   where: {
        //     id: order.courier_id,
        //   },
        //   data: {
        //     wallet_balance: {
        //       increment: order.delivery_price,
        //     },
        //   },
        // });
      } catch (e) {
        console.log('error while incrementing', e);
      }
    } else if (organization.payment_type == organization_payment_types.card) {
      const courierData = await this.prismaService.users.findFirst({
        where: {
          id: order.courier_id,
        },
        select: {
          card_number: true,
        },
      });
      if (!courierData.card_number) {
        const transaction = await this.prismaService.order_transactions.create({
          data: {
            order_transactions_orders: {
              connect: {
                id: order.id,
              },
            },
            order_transactions_terminals: {
              connect: {
                id: order.terminal_id,
              },
            },
            order_transactions_couriers: {
              connect: {
                id: order.courier_id,
              },
            },
            order_transactions_organizations: {
              connect: {
                id: order.organization_id,
              },
            },
            amount: order.delivery_price,
            transaction_type: 'order',
            transaction_payment_type: order_transaction_payment_type.card,
            status: order_transaction_status.failed,
            error_text: 'Карта не привязана',
          },
        });
      } else {
        const transaction = await this.prismaService.order_transactions.create({
          data: {
            order_transactions_orders: {
              connect: {
                id: order.id,
              },
            },
            order_transactions_terminals: {
              connect: {
                id: order.terminal_id,
              },
            },
            order_transactions_couriers: {
              connect: {
                id: order.courier_id,
              },
            },
            order_transactions_organizations: {
              connect: {
                id: order.organization_id,
              },
            },
            amount: order.delivery_price,
            transaction_type: 'order',
            transaction_payment_type: order_transaction_payment_type.card,
            card_number: courierData.card_number,
          },
        });

        this.orderCompleteService.payTransaction(transaction);
      }
    }
  }
}
