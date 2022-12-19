import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCourierTerminalBalanceInput } from './dto/create-courier_terminal_balance.input';
import { UpdateCourierTerminalBalanceInput } from './dto/update-courier_terminal_balance.input';
import { user_status, users } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
import { ManagerCouriersBalance } from '@modules/courier_terminal_balance/dto/manager_couriers_balance';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { order_transaction_status } from '../../@generated/prisma/order-transaction-status.enum';

@Injectable()
export class CourierTerminalBalanceService {
  constructor(private readonly prismaService: PrismaService, private readonly cacheService: CacheControlService) {}
  create(createCourierTerminalBalanceInput: CreateCourierTerminalBalanceInput) {
    return 'This action adds a new courierTerminalBalance';
  }

  findAll() {
    return `This action returns all courierTerminalBalance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courierTerminalBalance`;
  }

  update(id: number, updateCourierTerminalBalanceInput: UpdateCourierTerminalBalanceInput) {
    return `This action updates a #${id} courierTerminalBalance`;
  }

  remove(id: number) {
    return `This action removes a #${id} courierTerminalBalance`;
  }

  async getMyTotalBalance(user: users) {
    let res = 0;
    const agg = await this.prismaService.courier_terminal_balance.aggregate({
      where: {
        courier_id: user.id,
      },
      _sum: {
        balance: true,
      },
    });
    if (agg._sum.balance) {
      res = agg._sum.balance;
    }
    return res;
  }

  myBalanceByTerminal(user: users) {
    return this.prismaService.courier_terminal_balance.findMany({
      where: {
        courier_id: user.id,
      },
      select: {
        balance: true,
        courier_terminal_balance_terminals: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async managerCouriersBalance(user: users) {
    const currentUser = await this.prismaService.users.findUnique({
      where: {
        id: user.id,
      },
      select: {
        status: true,
        users_roles_usersTousers_roles_user_id: {
          select: {
            roles: {
              select: {
                code: true,
              },
            },
          },
        },
        users_terminals: {
          select: {
            terminal_id: true,
          },
        },
      },
    });

    if (!currentUser) {
      return new BadRequestException('User not found');
    }

    if (currentUser.status != user_status.active) {
      return new BadRequestException('User is not active');
    }

    if (currentUser.users_roles_usersTousers_roles_user_id.length == 0) {
      return new BadRequestException('User has no roles');
    }

    const managerRole = currentUser.users_roles_usersTousers_roles_user_id.find((role) => role.roles.code == 'manager');

    if (!managerRole) {
      return new BadRequestException('User is not a manager');
    }

    const terminalIds = currentUser.users_terminals.map((terminal) => terminal.terminal_id);
    console.log(terminalIds);

    const couriers = await this.prismaService.users.findMany({
      where: {
        users_terminals: {
          some: {
            terminal_id: {
              in: terminalIds,
            },
          },
        },
        status: user_status.active,
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        phone: true,
        users_terminals: {
          select: {
            terminal_id: true,
            terminals: {
              select: {
                name: true,
                organization_id: true,
              },
            },
          },
        },
      },
    });
    console.log(couriers);

    const res: ManagerCouriersBalance[] = [];

    for (const terminal of terminalIds) {
      for (const courier of couriers) {
        const courierTerminal = courier.users_terminals.find((userTerminal) => userTerminal.terminal_id == terminal);
        if (courierTerminal) {
          const courierTerminalBalance = await this.prismaService.courier_terminal_balance.findFirst({
            where: {
              courier_id: courier.id,
              terminal_id: terminal,
            },
            select: {
              id: true,
              balance: true,
            },
          });
          if (courierTerminalBalance) {
            res.push({
              id: courierTerminalBalance.id,
              first_name: courier.first_name,
              last_name: courier.last_name,
              phone: courier.phone,
              balance: courierTerminalBalance.balance,
              terminal_id: courierTerminal.terminal_id,
              courier_id: courier.id,
              terminal_name: courierTerminal.terminals.name,
            });
          } else {
            const courierTerminalBalance = await this.prismaService.courier_terminal_balance.create({
              data: {
                balance: 0,
                courier_id: courier.id,
                terminal_id: terminal,
                organization_id: courierTerminal.terminals.organization_id,
              },
            });
            res.push({
              id: courierTerminalBalance.id,
              first_name: courier.first_name,
              last_name: courier.last_name,
              phone: courier.phone,
              balance: courierTerminalBalance.balance,
              terminal_id: courierTerminal.terminal_id,
              courier_id: courier.id,
              terminal_name: courierTerminal.terminals.name,
            });
          }
        }
      }
    }

    return res;
  }

  async withdrawCourierBalance(user: users, amount: number, courier_id: string, terminal_id: string) {
    const currentBalance = await this.prismaService.courier_terminal_balance.findFirst({
      where: {
        courier_id: courier_id,
        terminal_id: terminal_id,
      },
      select: {
        id: true,
        balance: true,
        organization_id: true,
      },
    });

    if (amount > currentBalance.balance) {
      return new BadRequestException('Not enough balance');
    }

    const newBalance = currentBalance.balance - amount;

    const workStartTime = new Date(await this.cacheService.getSetting('work_start_time')).getHours();
    const workEndTime = new Date(await this.cacheService.getSetting('work_end_time')).getHours();
    // check current hour is between work start and end time even if end time is less than start time
    const currentHour = new Date().getHours();
    const currentDate = new Date();
    const isWorkTime =
      workStartTime < workEndTime
        ? currentHour >= workStartTime && currentHour <= workEndTime
        : currentHour >= workStartTime || currentHour <= workEndTime;

    if (isWorkTime) {
      if (currentHour < workStartTime) {
        currentDate.setDate(currentDate.getDate() - 1);
        currentDate.setHours(22);
      }
    }

    const managerWithdraw = await this.prismaService.manager_withdraw.create({
      data: {
        amount: amount,
        manager_id: user.id,
        courier_id: courier_id,
        terminal_id: terminal_id,
        organization_id: currentBalance.organization_id,
        amount_before: currentBalance.balance,
        amount_after: newBalance,
        payed_date: currentDate,
      },
    });

    const res = await this.prismaService.courier_terminal_balance.update({
      where: {
        id: currentBalance.id,
      },
      data: {
        balance: newBalance,
      },
    });

    const order_transactions = await this.prismaService.order_transactions.findMany({
      where: {
        courier_id: courier_id,
        terminal_id: terminal_id,
        status: order_transaction_status.pending,
        not_paid_amount: {
          gt: 0,
        },
      },
      orderBy: {
        created_at: 'asc',
      },
    });

    let amountToWithdraw = amount;
    for (const order_transaction of order_transactions) {
      if (amountToWithdraw > 0) {
        if (amountToWithdraw >= order_transaction.not_paid_amount) {
          amountToWithdraw = amountToWithdraw - order_transaction.not_paid_amount;
          await this.prismaService.manager_withdraw_transactions.create({
            data: {
              amount: order_transaction.not_paid_amount,
              withdraw_id: managerWithdraw.id,
              transaction_id: order_transaction.id,
              payed_date: currentDate,
            },
          });
          await this.prismaService.order_transactions.update({
            where: {
              id: order_transaction.id,
            },
            data: {
              not_paid_amount: 0,
              status: order_transaction_status.success,
            },
          });
        } else {
          await this.prismaService.manager_withdraw_transactions.create({
            data: {
              amount: amountToWithdraw,
              withdraw_id: managerWithdraw.id,
              transaction_id: order_transaction.id,
              payed_date: currentDate,
            },
          });
          await this.prismaService.order_transactions.update({
            where: {
              id: order_transaction.id,
            },
            data: {
              not_paid_amount: order_transaction.not_paid_amount - amountToWithdraw,
            },
          });
          amountToWithdraw = 0;
        }
      }
    }

    return res;
  }
}
