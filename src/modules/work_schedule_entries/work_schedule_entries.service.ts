import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import OpenTimeEntryArgs, { CloseTimeEntryArgs } from './dto/open-time-entry.args';
import { RealIP } from 'nestjs-real-ip';
import { CurrentUser } from '@modules/auth/decorators';
import { Prisma, users, user_status, work_schedule_entry_status } from '@prisma/client';
import { getDistance } from 'geolib';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import {
  RollCallItem,
  WorkScheduleEntriesReportCouriers,
  WorkScheduleEntriesReportRecord,
  WorkScheduleEntriesReportRes,
} from '@helpers';
import { WorkScheduleEntriesReportArgs } from './dto/report.args';
import dayjs from 'dayjs';
import { sortBy } from 'lodash';
import { UserIp } from '../../decorators/user_id';
import { Cron } from '@nestjs/schedule';
import { order_transaction_payment_type } from '../../@generated/prisma/order-transaction-payment-type.enum';

@Injectable()
export class WorkScheduleEntriesService {
  constructor(private readonly prismaService: PrismaService, private readonly cacheControl: CacheControlService) {}

  async openTimeEntry(openTimeLocation: OpenTimeEntryArgs, @UserIp() ip: string, @CurrentUser() currentUser: users) {
    const user = await this.prismaService.users.findUnique({
      where: {
        id: currentUser.id,
      },
      include: {
        users_roles_usersTousers_roles_user_id: {
          include: {
            roles: {
              select: {
                id: true,
                name: true,
                code: true,
              },
            },
          },
        },
        users_terminals: {
          include: {
            terminals: {
              select: {
                id: true,
                longitude: true,
                latitude: true,
                organization_id: true,
              },
            },
          },
        },
        users_work_schedules: {
          include: {
            work_schedules: {
              select: {
                id: true,
                start_time: true,
                end_time: true,
                days: true,
                max_start_time: true,
                name: true,
                bonus_price: true,
              },
            },
          },
        },
      },
    });
    if (!user) {
      return new BadRequestException('User not found');
    }

    if (user.status != user_status.active) {
      return new BadRequestException('User is not active');
    }

    if (user.users_roles_usersTousers_roles_user_id.length == 0) {
      return new BadRequestException('User has no roles');
    }

    const courierRole = user.users_roles_usersTousers_roles_user_id.find((role) => role.roles.code == 'courier');

    if (!courierRole) {
      return new BadRequestException('User is not a courier');
    }

    const openedOpenTime = await this.prismaService.work_schedule_entries.findFirst({
      where: {
        user_id: user.id,
        current_status: 'open',
      },
    });

    if (openedOpenTime) {
      return new BadRequestException('There is already an open time entry');
    }

    if (user.users_terminals.length == 0) {
      return new BadRequestException('User has no terminals');
    }

    let minDistance = null;
    let organizationId = null;
    let terminalId = null;

    user.users_terminals.forEach((terminal) => {
      organizationId = terminal.terminals.organization_id;
      terminalId = terminal.terminals.id;
      const distance = getDistance(
        { latitude: terminal.terminals.latitude, longitude: terminal.terminals.longitude },
        { latitude: openTimeLocation.lat_open, longitude: openTimeLocation.lon_open },
      );
      if (!minDistance || distance < minDistance) {
        minDistance = distance;
      }
    });

    const organization = await this.cacheControl.getOrganization(organizationId);

    if (minDistance > organization.max_distance) {
      return new BadRequestException('User is too far away');
    }

    const workSchedules = [];

    user.users_work_schedules.forEach((schedule) => {
      const currentDay = new Date().getDay() == 0 ? 7 : new Date().getDay();
      if (schedule.work_schedules.days.includes(currentDay.toString())) {
        workSchedules.push(schedule.work_schedules);
      }
    });

    if (workSchedules.length == 0) {
      return new BadRequestException('User has no work schedules');
    }

    const settingsWorkStartTime = new Date(await this.cacheControl.getSetting('work_start_time')).getHours();
    const settingsWorkEndTime = new Date(await this.cacheControl.getSetting('work_end_time')).getHours();
    const currentHours = new Date().getHours();

    let minStartTime = null;
    let maxEndTime = null;

    const formattedDay = dayjs().format('YYYY-MM-DD');

    workSchedules.forEach((schedule) => {
      const startTime = new Date(`${schedule.max_start_time}`);
      const endTime = new Date(`${schedule.end_time}`);
      if (currentHours < settingsWorkEndTime) {
        startTime.setDate(new Date().getDate() - 1);
        startTime.setMonth(new Date().getMonth());
        startTime.setFullYear(new Date().getFullYear());
        endTime.setDate(new Date().getDate());
        endTime.setMonth(new Date().getMonth());
        endTime.setFullYear(new Date().getFullYear());
      } else {
        startTime.setDate(new Date().getDate());
        startTime.setMonth(new Date().getMonth());
        startTime.setFullYear(new Date().getFullYear());
        if (endTime.getHours() < startTime.getHours()) {
          endTime.setDate(new Date().getDate() + 1);
          endTime.setMonth(new Date().getMonth());
          endTime.setFullYear(new Date().getFullYear());
        } else {
          endTime.setDate(new Date().getDate());
          endTime.setMonth(new Date().getMonth());
          endTime.setFullYear(new Date().getFullYear());
        }
      }

      if (!minStartTime || startTime < minStartTime) {
        minStartTime = startTime;
      }
      if (!maxEndTime || endTime > maxEndTime) {
        maxEndTime = endTime;
      }
    });

    const currentDate = new Date();
    let isLate = false;
    if (currentDate > minStartTime) {
      isLate = true;
    }
    let workSchedule = null;
    let timesheetDate = null;

    workSchedules.forEach((schedule) => {
      const startTime = new Date(`${schedule.max_start_time}`);
      const endTime = new Date(`${schedule.end_time}`);
      if (currentHours < settingsWorkEndTime) {
        startTime.setDate(new Date().getDate() - 1);
        startTime.setMonth(new Date().getMonth());
        startTime.setFullYear(new Date().getFullYear());
        endTime.setDate(new Date().getDate());
        endTime.setMonth(new Date().getMonth());
        endTime.setFullYear(new Date().getFullYear());
      } else {
        startTime.setDate(new Date().getDate());
        startTime.setMonth(new Date().getMonth());
        startTime.setFullYear(new Date().getFullYear());
        if (endTime.getHours() < startTime.getHours()) {
          endTime.setDate(new Date().getDate() + 1);
          endTime.setMonth(new Date().getMonth());
          endTime.setFullYear(new Date().getFullYear());
        } else {
          endTime.setDate(new Date().getDate());
          endTime.setMonth(new Date().getMonth());
          endTime.setFullYear(new Date().getFullYear());
        }
      }

      if (currentDate >= startTime && currentDate <= endTime) {
        if (!workSchedule && !timesheetDate) {
          startTime.setHours(0);
          startTime.setMinutes(0);
          startTime.setSeconds(0);
          timesheetDate = startTime;
          workSchedule = schedule;
        }
      }
    });

    if (!timesheetDate) {
      workSchedules.forEach((schedule) => {
        const startTime = new Date(`${schedule.max_start_time}`);
        const endTime = new Date(`${schedule.end_time}`);
        startTime.setHours(startTime.getHours() - 1.5);
        if (currentHours < settingsWorkEndTime) {
          startTime.setDate(new Date().getDate() - 1);
          startTime.setMonth(new Date().getMonth());
          startTime.setFullYear(new Date().getFullYear());
          endTime.setDate(new Date().getDate());
          endTime.setMonth(new Date().getMonth());
          endTime.setFullYear(new Date().getFullYear());
        } else {
          startTime.setDate(new Date().getDate());
          startTime.setMonth(new Date().getMonth());
          startTime.setFullYear(new Date().getFullYear());
          if (endTime.getHours() < startTime.getHours()) {
            endTime.setDate(new Date().getDate() + 1);
            endTime.setMonth(new Date().getMonth());
            endTime.setFullYear(new Date().getFullYear());
          } else {
            endTime.setDate(new Date().getDate());
            endTime.setMonth(new Date().getMonth());
            endTime.setFullYear(new Date().getFullYear());
          }
        }

        if (currentDate >= startTime && currentDate <= endTime) {
          if (!workSchedule && !timesheetDate) {
            startTime.setHours(0);
            startTime.setMinutes(0);
            startTime.setSeconds(0);
            timesheetDate = startTime;
            workSchedule = schedule;
          }
        }
      });
    }

    // console.log(timesheetDate);

    if (!timesheetDate) {
      throw new BadRequestException('График работы не найден');
    }

    const timesheet = await this.prismaService.timesheet.findFirst({
      where: {
        user_id: user.id,
        date: timesheetDate,
      },
    });

    if (!timesheet) {
      await this.prismaService.timesheet.create({
        data: {
          user_id: user.id,
          date: timesheetDate,
          is_late: isLate,
        },
      });
    }

    await this.prismaService.users.update({
      where: {
        id: user.id,
      },
      data: {
        is_online: true,
        latitude: openTimeLocation.lat_open,
        longitude: openTimeLocation.lon_open,
      },
    });

    const workScheduleEntry = await this.prismaService.work_schedule_entries.create({
      data: {
        ip_open: ip ?? '127.0.0.1',
        lat_open: openTimeLocation.lat_open,
        lon_open: openTimeLocation.lon_open,
        current_status: work_schedule_entry_status.open,
        late: isLate,
        date_start: new Date(),
        work_schedule_id: workSchedule.id,
        user_id: user.id,
      },
    });

    if (!isLate) {
      if (user.id == '9f450b5a-79c2-4fa2-be88-be45cc9404c9') {
        console.log('workSchedule.bonus_price', workSchedule.bonus_price);
        if (workSchedule.bonus_price > 0) {
          const courierTerminalBalance = await this.prismaService.courier_terminal_balance.findFirst({
            where: {
              courier_id: user.id,
              terminal_id: terminalId,
            },
          });
          let startBalance = 0;
          if (courierTerminalBalance) {
            startBalance = courierTerminalBalance.balance;
          }
          startBalance += workSchedule.bonus_price;

          // find order_transaction with type work_schedule_bonus for today
          const orderTransaction = await this.prismaService.order_transactions.findFirst({
            where: {
              order_transactions_couriers: {
                id: user.id,
              },
              transaction_type: 'work_schedule_bonus',
              transaction_payment_type: order_transaction_payment_type.cash,
              created_at: {
                gte: new Date(new Date().setHours(0, 0, 0, 0)),
                lte: new Date(new Date().setHours(23, 59, 59, 999)),
              },
            },
          });

          if (!orderTransaction) {
            await this.prismaService.order_transactions.create({
              data: {
                order_transactions_terminals: {
                  connect: {
                    id: terminalId,
                  },
                },
                order_transactions_couriers: {
                  connect: {
                    id: user.id,
                  },
                },
                order_transactions_organizations: {
                  connect: {
                    id: organizationId,
                  },
                },
                amount: workSchedule.bonus_price,
                not_paid_amount: workSchedule.bonus_price,
                transaction_type: 'work_schedule_bonus',
                transaction_payment_type: order_transaction_payment_type.cash,
              },
            });
            if (courierTerminalBalance) {
              startBalance += workSchedule.bonus_price;
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
                  courier_id: user.id,
                  terminal_id: terminalId,
                  balance: workSchedule.bonus_price,
                  organization_id: organizationId,
                },
              });
            }
          }
        }
      }
    }

    return workScheduleEntry;
  }

  async closeTimeEntry(openTimeLocation: CloseTimeEntryArgs, @UserIp() ip: string, @CurrentUser() currentUser: users) {
    let openedOpenTime = await this.prismaService.work_schedule_entries.findFirst({
      where: {
        user_id: currentUser.id,
        current_status: 'open',
      },
    });

    if (!openedOpenTime) {
      return new BadRequestException('There is no open time entry');
    }

    await this.prismaService.users.update({
      where: {
        id: currentUser.id,
      },
      data: {
        is_online: {
          set: false,
        },
        latitude: {
          set: openTimeLocation.lat_close,
        },
        longitude: {
          set: openTimeLocation.lon_close,
        },
      },
    });

    let dateStart = new Date(openedOpenTime.date_start);
    let dateEnd = new Date();
    // get duration in seconds
    let duration = Math.floor((dateEnd.getTime() - dateStart.getTime()) / 1000);
    await this.prismaService.work_schedule_entries.update({
      where: {
        id: openedOpenTime.id,
      },
      data: {
        ip_close: ip ?? '127.0.0.1',
        lat_close: openTimeLocation.lat_close,
        lon_close: openTimeLocation.lon_close,
        current_status: work_schedule_entry_status.closed,
        duration,
        date_finish: new Date(),
      },
    });
    return openedOpenTime;
  }

  async workScheduleEntriesReport(params: WorkScheduleEntriesReportArgs, user) {
    // const currentUser = await this.prismaService.users.findUnique({
    //   where: {
    //     id: user.id,
    //   },
    //   select: {
    //     status: true,
    //     users_roles_usersTousers_roles_user_id: {
    //       select: {
    //         roles: {
    //           select: {
    //             code: true,
    //           },
    //         },
    //       },
    //     },
    //     users_terminals: {
    //       select: {
    //         terminal_id: true,
    //       },
    //     },
    //   },
    // });
    //
    // if (!currentUser) {
    //   return new BadRequestException('User not found');
    // }
    //
    // if (currentUser.status != user_status.active) {
    //   return new BadRequestException('User is not active');
    // }
    //
    // if (currentUser.users_roles_usersTousers_roles_user_id.length == 0) {
    //   return new BadRequestException('User has no roles');
    // }
    //
    // const rolesCode = currentUser.users_roles_usersTousers_roles_user_id.map((role) => role.roles.code);
    // const terminalsWhereString = '';
    // if (rolesCode.includes('manager')) {
    //   if (params.where) {
    //     if (params.where.terminal_id && params.where.terminal_id.in) {
    //       if (
    //         !currentUser.users_terminals.find((terminal) => params.where.terminal_id.in.includes(terminal.terminal_id))
    //       ) {
    //         // splice this terminal from where
    //         params.where.terminal_id.in = params.where.terminal_id.in.filter((terminal) =>
    //           currentUser.users_terminals.find((userTerminal) => userTerminal.terminal_id == terminal),
    //         );
    //       }
    //     } else {
    //       params.where.terminal_id = {
    //         in: currentUser.users_terminals.map((terminal) => terminal.terminal_id),
    //       };
    //     }
    //   } else {
    //     params.where = {
    //       terminal_id: {
    //         in: currentUser.users_terminals.map((terminal) => terminal.terminal_id),
    //       },
    //     };
    //   }
    // }
    params.where.report_end.setHours(23, 59, 59);
    let records = await this.prismaService.$queryRaw<WorkScheduleEntriesReportRecord[]>`
        SELECT wse.user_id, sum(wse.duration) as duration, DATE_TRUNC('day', wse.date_start) as day, bool_or(wse.late) as late, us.first_name, us.last_name
        FROM work_schedule_entries wse
        left join users us ON us.id = wse.user_id
        WHERE wse.current_status = 'closed' 
              AND wse.date_start >= ${params.where.report_start}
              AND wse.date_start <= ${params.where.report_end}
        group by wse.user_id, DATE_TRUNC('day', wse.date_start), us.first_name, us.last_name`;

    records = records.map((record) => {
      record.duration = parseInt(record.duration.toString());
      return record;
    });

    let users: WorkScheduleEntriesReportCouriers[] = await this.prismaService.users.findMany({
      where: {
        users_roles_usersTousers_roles_user_id: {
          some: {
            roles: {
              code: 'courier',
            },
          },
        },
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
      },
      // include: {
      //   users_roles_usersTousers_roles_user_id: {
      //     include: {
      //       roles: {
      //         select:
      //       },
      //     }
      //   }
      // }
    });

    return {
      users: users,
      work_schedule_entries: records,
    };
  }

  async closeFreeTimeEntry() {
    const couriers = await this.prismaService.users.findMany({
      where: {
        users_roles_usersTousers_roles_user_id: {
          some: {
            roles: {
              code: 'courier',
            },
          },
        },
        status: user_status.active,
        is_online: true,
      },
      select: {
        id: true,
        users_work_schedules: {
          select: {
            work_schedules: {
              select: {
                id: true,
                start_time: true,
                end_time: true,
              },
            },
          },
        },
      },
    });
    for (const courier of couriers) {
      let minStartTime;
      let maxEndTime;
      for (const workSchedule of courier.users_work_schedules) {
        const startTime = new Date(workSchedule.work_schedules.start_time);
        const endTime = new Date(workSchedule.work_schedules.end_time);

        // set today day, month and year to start and end time
        startTime.setDate(new Date().getDate());
        startTime.setMonth(new Date().getMonth());
        startTime.setFullYear(new Date().getFullYear());
        endTime.setDate(new Date().getDate());
        endTime.setMonth(new Date().getMonth());
        endTime.setFullYear(new Date().getFullYear());

        if (endTime.getHours() < startTime.getHours()) {
          endTime.setDate(new Date().getDate() + 1);
        }

        if (!minStartTime || startTime < minStartTime) {
          minStartTime = startTime;
        }
        if (!maxEndTime || endTime > maxEndTime) {
          maxEndTime = endTime;
        }
      }
      const currentTime = new Date();
      if (currentTime < minStartTime || currentTime > maxEndTime) {
        const openedOpenTime = await this.prismaService.work_schedule_entries.findFirst({
          where: {
            user_id: courier.id,
            current_status: 'open',
          },
        });

        if (!openedOpenTime) {
          return new BadRequestException('There is no open time entry');
        }

        await this.prismaService.users.update({
          where: {
            id: courier.id,
          },
          data: {
            is_online: {
              set: false,
            },
          },
        });

        const dateStart = new Date(openedOpenTime.date_start);
        const dateEnd = new Date();
        // get duration in seconds
        const duration = Math.floor((dateEnd.getTime() - dateStart.getTime()) / 1000);
        await this.prismaService.work_schedule_entries.update({
          where: {
            id: openedOpenTime.id,
          },
          data: {
            ip_close: '127.0.0.1',
            current_status: work_schedule_entry_status.closed,
            duration,
            date_finish: new Date(),
          },
        });
      }
    }
  }

  async rollCallList(date: Date) {
    let terminals = await this.cacheControl.getTerminals();
    terminals = terminals.filter((terminal) => terminal.active);
    const res = {};
    terminals.forEach((terminal) => {
      res[terminal.id] = {
        id: terminal.id,
        name: terminal.name,
        couriers: [],
      };
    });

    const couriers = await this.prismaService.users.findMany({
      where: {
        users_roles_usersTousers_roles_user_id: {
          some: {
            roles: {
              code: 'courier',
            },
          },
        },
        status: user_status.active,
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        is_online: true,
        drive_type: true,
        phone: true,
        app_version: true,
        users_terminals: {
          select: {
            terminals: {
              select: {
                id: true,
              },
            },
          },
        },
        timesheet_users: {
          where: {
            date: dayjs(date).hour(0).minute(0).second(0).millisecond(0).toDate(),
          },
          select: {
            id: true,
            date: true,
            created_at: true,
            is_late: true,
          },
        },
      },
    });
    couriers.forEach((courier) => {
      courier.users_terminals.forEach((userTerminal) => {
        if (res[userTerminal.terminals.id]) {
          res[userTerminal.terminals.id].couriers.push({
            id: courier.id,
            first_name: courier.first_name,
            last_name: courier.last_name,
            is_online: courier.is_online,
            drive_type: courier.drive_type,
            phone: courier.phone,
            created_at: courier.timesheet_users[0]?.created_at,
            is_late: courier.timesheet_users[0]?.is_late,
            date: courier.timesheet_users[0]?.date,
            app_version: courier.app_version,
          });
        }
      });
    });

    return sortBy(Object.values(res), ['name']);
  }

  // cron to every day at 04:30
  @Cron('0 30 4 * * *')
  async closeOpenTimeEntries() {
    const openTimeEntries = await this.prismaService.work_schedule_entries.findMany({
      where: {
        current_status: work_schedule_entry_status.open,
      },
      select: {
        id: true,
        date_start: true,
        user_id: true,
      },
    });

    for (const openTimeEntry of openTimeEntries) {
      try {
        const dateStart = new Date(openTimeEntry.date_start);
        const dateEnd = new Date();
        // get duration in seconds
        const duration = Math.floor((dateEnd.getTime() - dateStart.getTime()) / 1000);
        await this.prismaService.work_schedule_entries.update({
          where: {
            id: openTimeEntry.id,
          },
          data: {
            ip_close: '127.0.0.1',
            current_status: work_schedule_entry_status.closed,
            duration,
            date_finish: new Date(),
          },
        });

        await this.prismaService.users.update({
          where: {
            id: openTimeEntry.user_id,
          },
          data: {
            is_online: {
              set: false,
            },
          },
        });
      } catch (e) {}
    }
  }

  courierRollCallList(startDate: Date, endDate: Date, courierId: string) {
    return this.prismaService.timesheet.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
        user_id: courierId,
      },
      select: {
        id: true,
        date: true,
        is_late: true,
        created_at: true,
      },
      orderBy: {
        date: 'desc',
      },
    });
  }
}
