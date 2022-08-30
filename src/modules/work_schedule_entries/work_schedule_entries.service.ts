import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Cache } from 'cache-manager';
import OpenTimeEntryArgs from './dto/open-time-entry.args';
import { RealIP } from 'nestjs-real-ip';
import { CurrentUser } from '@modules/auth/decorators';
import { users, user_status } from '@prisma/client';
import { getDistance } from 'geolib';

@Injectable()
export class WorkScheduleEntriesService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache, private readonly prismaService: PrismaService) {}

  async openTimeEntry(workScheduleId: OpenTimeEntryArgs, @RealIP() ip: string, @CurrentUser() currentUser: users) {
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
              },
            },
          },
        },
      },
    });
    if (!user) {
      throw new Error('User not found');
    }

    if (user.status != user_status.active) {
      throw new Error('User is not active');
    }

    if (user.users_roles_usersTousers_roles_user_id.length == 0) {
      throw new Error('User has no roles');
    }

    let courierRole = user.users_roles_usersTousers_roles_user_id.find((role) => role.roles.code == 'courier');

    console.log(courierRole);

    if (!courierRole) {
      throw new Error('User is not a courier');
    }

    let openedOpenTime = await this.prismaService.work_schedule_entries.findFirst({
      where: {
        current_status: 'open',
      },
    });

    if (openedOpenTime) {
      throw new Error('There is already an open time entry');
    }

    console.log('workScheduleId', workScheduleId);
    console.log('ip', ip);
  }
}
