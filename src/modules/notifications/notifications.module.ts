import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsResolver } from './notifications.resolver';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SearchService } from '@modules/search/search.service';
import { TokenModule } from '@modules/auth/token.module';
import { CacheControlModule } from '@modules/cache_control/cache_control.module';
import { PrismaService } from '../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { SystemConfigsService } from '@modules/system_configs/system_configs.service';

@Module({
  imports: [TokenModule, CacheControlModule, ConfigModule],
  providers: [
    ConfigService,
    SearchService,
    PrismaService,
    CacheControlService,
    SystemConfigsService,
    NotificationsResolver,
    NotificationsService,
  ],
})
export class NotificationsModule {}
