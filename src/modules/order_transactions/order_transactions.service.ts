import { Injectable } from '@nestjs/common';
import { CreateOrderTransactionInput } from './dto/create-order_transaction.input';
import { UpdateOrderTransactionInput } from './dto/update-order_transaction.input';
import { FindManyorderTransactionsArgs } from '../../@generated/prisma/find-manyorder-transactions.args';
import { PrismaService } from '../../prisma.service';
import { order_transactionsWhereInput } from '../../@generated/order-transactions/order-transactions-where.input';
import { UpdateOneorderTransactionsArgs } from '../../@generated/prisma/update-oneorder-transactions.args';
import { CreateOneorderTransactionsArgs } from '../../helpers/create-one.args';
import { users } from '@prisma/client';
import { CacheControlService } from '@modules/cache_control/cache_control.service';

@Injectable()
export class OrderTransactionsService {
  constructor(private readonly prismaService: PrismaService, private readonly cacheControl: CacheControlService) {}

  async create(createOrderTransactionInput: CreateOneorderTransactionsArgs, user: users) {
    createOrderTransactionInput.data.created_by = user.id;
    const terminals = await this.cacheControl.getTerminals();
    const terminal = terminals.find((t) => t.id === createOrderTransactionInput.data.terminal_id);
    if (terminal) {
      createOrderTransactionInput.data.organization_id = terminal.organization_id;
    }
    createOrderTransactionInput.data.not_paid_amount = createOrderTransactionInput.data.amount;
    const courierTerminalBalance = await this.prismaService.courier_terminal_balance.findFirst({
      where: {
        courier_id: createOrderTransactionInput.data.courier_id,
        terminal_id: createOrderTransactionInput.data.terminal_id,
      },
    });
    createOrderTransactionInput.data.balance_before = courierTerminalBalance?.balance || 0;
    createOrderTransactionInput.data.balance_after =
      createOrderTransactionInput.data.balance_before + createOrderTransactionInput.data.amount;
    const res = await this.prismaService.order_transactions.create(createOrderTransactionInput);
    if (courierTerminalBalance) {
      await this.prismaService.courier_terminal_balance.update({
        where: {
          id: courierTerminalBalance.id,
        },
        data: {
          balance: courierTerminalBalance.balance + res.amount,
        },
      });
    } else {
      await this.prismaService.courier_terminal_balance.create({
        data: {
          courier_id: res.courier_id,
          terminal_id: res.terminal_id,
          balance: res.amount,
          organization_id: res.organization_id,
        },
      });
    }
    return res;
  }

  async findAll(params: FindManyorderTransactionsArgs) {
    const res = await this.prismaService.order_transactions.findMany({
      ...params,
      include: {
        order_transactions_couriers: true,
        order_transactions_created_byTousers: true,
        order_transactions_terminals: true,
        order_transactions_orders: true,
      },
    });
    return res;
  }

  findOne(id: string) {
    return this.prismaService.order_transactions.findUnique({
      where: {
        id,
      },
    });
  }

  update(updateOrderTransactionInput: UpdateOneorderTransactionsArgs) {
    return this.prismaService.order_transactions.update(updateOrderTransactionInput);
  }

  remove(id: number) {
    return `This action removes a #${id} orderTransaction`;
  }

  orderTransactionsConnection(where: order_transactionsWhereInput) {
    return this.prismaService.order_transactions.aggregate({
      _count: {
        id: true,
      },
      where,
    });
  }
}
