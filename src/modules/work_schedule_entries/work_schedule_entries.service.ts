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

@Injectable()
export class WorkScheduleEntriesService {
  constructor(private readonly prismaService: PrismaService, private readonly cacheControl: CacheControlService) {}

  async openTimeEntry(openTimeLocation: OpenTimeEntryArgs, @RealIP() ip: string, @CurrentUser() currentUser: users) {
    let user = await this.prismaService.users.findUnique({
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

    let courierRole = user.users_roles_usersTousers_roles_user_id.find((role) => role.roles.code == 'courier');

    if (!courierRole) {
      return new BadRequestException('User is not a courier');
    }

    let openedOpenTime = await this.prismaService.work_schedule_entries.findFirst({
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
      let distance = getDistance(
        { latitude: terminal.terminals.latitude, longitude: terminal.terminals.longitude },
        { latitude: openTimeLocation.lat_open, longitude: openTimeLocation.lon_open },
      );
      if (!minDistance || distance < minDistance) {
        minDistance = distance;
      }
    });

    let organization = await this.cacheControl.getOrganization(organizationId);

    if (minDistance > organization.max_distance) {
      return new BadRequestException('User is too far away');
    }

    let workSchedules = [];

    user.users_work_schedules.forEach((schedule) => {
      if (schedule.work_schedules.days.includes(new Date().getDay().toString())) {
        workSchedules.push(schedule.work_schedules);
      }
    });

    if (workSchedules.length == 0) {
      return new BadRequestException('User has no work schedules');
    }

    let workSchedule = workSchedules.find((schedule) => {
      /*
        check if the time  is between the time of start and end
      */
      let startTime = new Date(schedule.start_time);
      let endTime = new Date(schedule.end_time);
      let currentTime = new Date();
      if (currentTime.getHours() >= startTime.getHours() && currentTime.getHours() < endTime.getHours()) {
        return true;
      }
      return false;
    });

    if (!workSchedule) {
      return new BadRequestException('User is not working');
    }

    let startTime = new Date(workSchedule.start_time);
    let maxStartTime = new Date(workSchedule.max_start_time);
    let startTimeMinutes = startTime.getHours() * 60 + startTime.getMinutes();
    let maxStartTimeMinutes = maxStartTime.getHours() * 60 + maxStartTime.getMinutes();

    let isLate = true;
    let currentTime = new Date();
    let currentTimeMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    if (currentTimeMinutes <= maxStartTimeMinutes && currentTimeMinutes >= startTimeMinutes) {
      isLate = false;
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

    let workScheduleEntry = await this.prismaService.work_schedule_entries.create({
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

  async closeTimeEntry(openTimeLocation: CloseTimeEntryArgs, @RealIP() ip: string, @CurrentUser() currentUser: users) {
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
        is_online: false,
        latitude: openTimeLocation.lat_close,
        longitude: openTimeLocation.lon_close,
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

    console.log(records.map((record) => parseInt(record.duration.toString())));

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

    console.log(users);

    return {
      users: users,
      work_schedule_entries: records,
    };
  }
}
