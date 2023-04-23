import { Injectable } from '@nestjs/common';
import {
  CreateNotificationInput,
  CreateOnenotificationArgs,
  NotificationCreateArgs,
} from './dto/create-notification.input';
import { UpdateNotificationInput } from './dto/update-notification.input';
import { SearchService } from '@modules/search/search.service';
import { PrismaService } from '../../prisma.service';
import {
  FindManynotificationsArgs,
  notificationsWhereInput,
} from '@modules/notifications/dto/find-many-notifications-args';
import { users } from '@prisma/client';
import { deleteNotificationArgs } from '@modules/notifications/entities/notification.entity';
import {ConfigService} from "@nestjs/config";

@Injectable()
export class NotificationsService {
  constructor(private readonly searchService: SearchService, private readonly prismaService: PrismaService, private readonly configService: ConfigService) {}
  async ensureIndexExists(): Promise<void> {
    const projectPrefix = await this.configService.get('PROJECT_PREFIX');
    const indexName = `${projectPrefix}_notifications`;
    await this.searchService.ensureIndexExists(indexName, {
      properties: {
        title: {
          type: 'text',
        },
        body: {
          type: 'text',
        },
        send_at: {
          type: 'date',
        },
        created_at: {
          type: 'date',
        },
        status: {
          type: 'keyword',
        },
        receiver_user_ids: {
          type: 'keyword',
        },
        sent_user_ids: {
          type: 'keyword',
        },
        read_user_ids: {
          type: 'keyword',
        },
        role: {
          type: 'keyword',
        },
        public: {
          type: 'boolean',
        },
      },
    });
  }

  async create(createNotificationInput: CreateOnenotificationArgs) {
    const { role, send_at } = createNotificationInput.data;

    const sentUserIds = await this.prismaService.users
      .findMany({
        where: {
          users_roles_usersTousers_roles_user_id: {
            some: {
              role_id: {
                equals: role,
              },
            },
          },
        },
        select: {
          id: true,
        },
      })
      .then((users) => users.map((user) => user.id));
    const res = await this.searchService.createNotification({
      ...createNotificationInput.data,
      send_at: send_at.toISOString(),
      receiver_user_ids: sentUserIds,
      created_at: new Date().toISOString(),
      status: 'pending',
      public: createNotificationInput.data.public !== undefined ? createNotificationInput.data.public : true,
    });
    return res;
  }

  async findAll(params: FindManynotificationsArgs) {
    await this.ensureIndexExists();
    return this.searchService.getAllNotifications(params);
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  update(id: number, updateNotificationInput: UpdateNotificationInput) {
    return `This action updates a #${id} notification`;
  }

  remove(id: deleteNotificationArgs) {
    return this.searchService.deleteNotification(id);
  }

  async notificationsConnection(where: notificationsWhereInput, user: users) {
    return this.searchService.notificationsConnection(where, user);
  }

  myNotifications(user: users) {
    return this.searchService.myNotifications(user);
  }

  async myUnreadNotifications(user: users) {
    const res = await this.searchService.myUnreadNotifications(user);
    return res.count;
  }

  async markAsRead(id: string, user: users) {
    const res = await this.searchService.markAsRead(id, user);
    console.log('res', res);
    return res;
  }

  async notificationStatistic(id: string, user: users) {
    /**
     * 1. Get notification by id
     * 2. Get all user ids from fields receiver_user_id, read_user_ids and sent_user_ids
     * 3. Remove duplicates
     * 4. Get all users by ids
     * 5. If user id is in read_user_ids, set field deliver_status to 'read', if user id is in sent_user_ids, set field deliver_status to 'sent', if user id is in receiver_user_id, set field deliver_status to 'not_sent', else set field deliver_status to 'not_received'
     */
    const res = await this.searchService.notificationStatistic(id, user);
    let allUserIds = [
      // @ts-ignore
      ...res._source.receiver_user_ids,
    ];
    // @ts-ignore
    if (res._source.read_user_ids) {
      // @ts-ignore
      allUserIds = [...allUserIds, ...res._source.read_user_ids];
    }
    // @ts-ignore
    if (res._source.sent_user_ids) {
      // @ts-ignore
      allUserIds = [...allUserIds, ...res._source.sent_user_ids];
    }

    const uniqueUserIds = [...new Set(allUserIds)];

    const users = await this.prismaService.users.findMany({
      where: {
        id: {
          in: uniqueUserIds,
        },
      },
      select: {
        id: true,
        last_name: true,
        first_name: true,
      },
    });

    const usersWithDeliverStatus = users.map((user) => {
      let deliverStatus = 'not_sent';
      // @ts-ignore
      if (res._source.read_user_ids && res._source.read_user_ids.includes(user.id)) {
        deliverStatus = 'read';
      }

      // @ts-ignore
      if (res._source.sent_user_ids && res._source.sent_user_ids.includes(user.id)) {
        deliverStatus = 'sent';
      }

      return {
        id: res._id,
        // @ts-ignore
        ...res._source,
        user,
        deliver_status: deliverStatus,
      };
    });

    return usersWithDeliverStatus;
  }
}
