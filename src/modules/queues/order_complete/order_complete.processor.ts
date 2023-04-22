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
    // if (organization.payment_type == organization_payment_types.client) {
    //   return;
    // }
    console.log('order.courier_id', order.courier_id);
    // check if order transaction exists
    const orderTransaction = await this.prismaService.order_transactions.findFirst({
      where: {
        order_id: order.id,
      },
    });
    if (orderTransaction) {
      return;
    }
    console.log('order.courier_id', order.courier_id);
    const courierTerminalBalance = await this.prismaService.courier_terminal_balance.findFirst({
      where: {
        courier_id: order.courier_id,
        terminal_id: order.orders_terminals.id,
      },
    });
    let startBalance = 0;
    if (courierTerminalBalance) {
      startBalance = courierTerminalBalance.balance;
    }
    // if (order.courier_id == '9f450b5a-79c2-4fa2-be88-be45cc9404c9') {
    let orderBonusPricing = await this.cacheService.getBonusPricing(order.organization_id);
    orderBonusPricing = sort(orderBonusPricing, (d) => d.min_distance_km, true);
    console.log('orderBonusPricing', orderBonusPricing);
    if (orderBonusPricing.length > 0) {
      const activeOrderBonusPricing = orderBonusPricing.filter((d) => {
        const res = false;
        const startTime = dayjs.tz(d.start_time, 'Asia/Tashkent').add(5, 'hour').format('HH:mm');
        const endTime = dayjs.tz(d.end_time, 'Asia/Tashkent').add(5, 'hour').format('HH:mm');
        const currentTime = new Date();
        const now = getMinutesNow();
        let start = getMinutes(startTime);
        let end = getMinutes(endTime);

        if (end < start && now < start) {
          start -= getMinutes('24:00');
        } else if (start > end) end += getMinutes('24:00');

        const fullYear = currentTime.getFullYear();
        if (now > start && now < end && d.active && order.pre_distance * 1000 >= d.min_distance_km) {
          if (d.courier_id === null && d.terminal_id === null) {
            return true;
          } else if (d.terminal_id === null && d.courier_id === order.courier_id) {
            return true;
          } else if (d.courier_id === null && d.terminal_id === order.terminal_id) {
            return true;
          }
        }
        return res;
      });

      const activeOrderBonusPricingSorted = sort(activeOrderBonusPricing, (i) => +i.min_distance_km);
      let minDistance = 0;
      let minDeliveryPricing = null;

      for (let i = 0; i < activeOrderBonusPricingSorted.length; i++) {
        const d = activeOrderBonusPricingSorted[i];
        minDistance = d.min_distance_km;
        if (typeof d.rules === 'string') {
          d.rules = JSON.parse(d.rules);
        }
        const maxDistance: any = max(d.rules as any[], (i: any) => +i.to);
        if (d.min_distance_km <= order.pre_distance * 1000) {
          minDeliveryPricing = d;
        }

        if (order.pre_distance * 1000 <= maxDistance && order.pre_distance * 1000 >= minDistance) {
          minDeliveryPricing = d;
        }
      }

      if (minDeliveryPricing) {
        let price = 0;
        let distance = order.pre_distance;
        if (minDeliveryPricing.rules) {
          minDeliveryPricing.rules.forEach((r: any) => {
            const { from, to, price: rulePrice } = r;
            if (distance >= 0) {
              distance -= +to - +from;
              price += +rulePrice;
            }
          });
        }
        const orderTransaction = await this.prismaService.order_transactions.create({
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
            amount: price,
            not_paid_amount: price,
            transaction_type: 'order_bonus',
            transaction_payment_type: order_transaction_payment_type.cash,
          },
        });
        console.log('courierTerminalBalance', courierTerminalBalance);
        if (courierTerminalBalance) {
          startBalance += price;
          await this.prismaService.courier_terminal_balance.update({
            where: {
              id: courierTerminalBalance.id,
            },
            data: {
              balance: startBalance,
            },
          });
        } else {
          await this.prismaService.courier_terminal_balance.create({
            data: {
              courier_id: order.courier_id,
              terminal_id: order.orders_terminals.id,
              balance: price,
              organization_id: order.organization_id,
            },
          });
        }
      }
    }
    // }

    let isCash = false;
    if (organization.payment_type == order_transaction_payment_type.cash) {
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

        if (courierTerminalBalance) {
          startBalance += order.delivery_price;
          await this.prismaService.courier_terminal_balance.update({
            where: {
              id: courierTerminalBalance.id,
            },
            data: {
              balance: startBalance,
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
