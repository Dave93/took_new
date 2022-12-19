import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import OpenTimeEntryArgs, { CloseTimeEntryArgs } from './dto/open-time-entry.args';
import { RealIP } from 'nestjs-real-ip';
import { CurrentUser } from '@modules/auth/decorators';
import { Prisma, users, user_status, work_schedule_entry_status } from '@prisma/client';
import { getDistance } from 'geolib';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import {
  WorkScheduleEntriesReportCouriers,
  WorkScheduleEntriesReportRecord,
  WorkScheduleEntriesReportRes,
} from '@helpers';
import { WorkScheduleEntriesReportArgs } from './dto/report.args';
import { UserIp } from '../../decorators/user_id';

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

    user.users_terminals.forEach((terminal) => {
      organizationId = terminal.terminals.organization_id;
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
      if (schedule.work_schedules.days.includes(new Date().getDay().toString())) {
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

    workSchedules.forEach((schedule) => {
      const startTime = new Date(schedule.max_start_time);
      const endTime = new Date(schedule.end_time);
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
      const startTime = new Date(schedule.max_start_time);
      const endTime = new Date(schedule.end_time);
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
        startTime.setHours(0);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        timesheetDate = startTime;
        workSchedule = schedule;
      }
    });

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

  async workScheduleEntriesReport(params: WorkScheduleEntriesReportArgs): Promise<WorkScheduleEntriesReportRes> {
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
}
