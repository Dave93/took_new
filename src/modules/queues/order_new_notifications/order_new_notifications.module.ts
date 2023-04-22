import { Module } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { SearchService } from '@modules/search/search.service';
import { ConfigService } from '@nestjs/config';
import { OrderNewNotificationsProcessor } from '@modules/queues/order_new_notifications/order_new_notifications.processor';
import { SystemConfigsService } from '@modules/system_configs/system_configs.service';

@Module({
  providers: [
    OrderNewNotificationsProcessor,
    PrismaService,
    CacheControlService,
    SystemConfigsService,
    SearchService,
    ConfigService,
  ],
})
export class OrderNewNotificationsModule {}
