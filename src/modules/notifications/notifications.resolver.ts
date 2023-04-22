import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NotificationsService } from './notifications.service';
import {
  deleteNotificationArgs,
  ElasticNotificationModel,
  Notification,
  NotificationStatistic,
} from './entities/notification.entity';
import { CurrentUser, JwtAuthGuard, Permissions } from '@modules/auth';
import {
  CreateNotificationInput,
  CreateOnenotificationArgs,
  NotificationCreateArgs,
} from './dto/create-notification.input';
import { UpdateNotificationInput } from './dto/update-notification.input';
import {
  FindManynotificationsArgs,
  notificationsWhereInput,
} from '@modules/notifications/dto/find-many-notifications-args';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { UseGuards } from '@nestjs/common';
import { ordersWhereInput } from '../../@generated/orders/orders-where.input';
import { users } from '../../@generated/users/users.model';

@Resolver(() => Notification)
export class NotificationsResolver {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Mutation(() => Notification)
  @Permissions('notifications.create')
  notificationCreate(@Args() createNotificationInput: CreateOnenotificationArgs) {
    return this.notificationsService.create(createNotificationInput);
  }

  @Query(() => PrismaAggregateCount, { name: 'notificationsConnection' })
  @Permissions('notifications.list')
  @UseGuards(JwtAuthGuard)
  notificationsConnection(@Args('where') where: notificationsWhereInput, @CurrentUser() user: users) {
    return this.notificationsService.notificationsConnection(where, user);
  }

  @Query(() => [Notification], { name: 'notifications' })
  @Permissions('notifications.list')
  findAll(@Args() params: FindManynotificationsArgs) {
    return this.notificationsService.findAll(params);
  }

  @Query(() => Notification, { name: 'notification' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.notificationsService.findOne(id);
  }

  @Mutation(() => Notification)
  updateNotification(@Args('updateNotificationInput') updateNotificationInput: UpdateNotificationInput) {
    return this.notificationsService.update(updateNotificationInput.id, updateNotificationInput);
  }

  @Mutation(() => Notification)
  deleteNotification(@Args() deleteNotification: deleteNotificationArgs) {
    return this.notificationsService.remove(deleteNotification);
  }

  @Query(() => [ElasticNotificationModel], { name: 'myNotifications' })
  @Permissions('notifications.list')
  @UseGuards(JwtAuthGuard)
  myNotifications(@CurrentUser() user: users) {
    return this.notificationsService.myNotifications(user);
  }

  @Query(() => Int, { name: 'myUnreadNotifications' })
  @Permissions('notifications.list')
  @UseGuards(JwtAuthGuard)
  myUnreadNotifications(@CurrentUser() user: users) {
    return this.notificationsService.myUnreadNotifications(user);
  }

  @Mutation(() => Notification)
  @Permissions('notifications.list')
  @UseGuards(JwtAuthGuard)
  markAsRead(@Args('id', { type: () => String }) id: string, @CurrentUser() user: users) {
    return this.notificationsService.markAsRead(id, user);
  }

  @Query(() => [NotificationStatistic], { name: 'notificationStatistic' })
  @Permissions('notifications.list')
  @UseGuards(JwtAuthGuard)
  notificationStatistic(@Args('id', { type: () => String }) id: string, @CurrentUser() user: users) {
    return this.notificationsService.notificationStatistic(id, user);
  }
}
