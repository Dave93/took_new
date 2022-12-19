import { Module } from '@nestjs/common';
import { SystemConfigsService } from './system_configs.service';
import { SystemConfigsResolver } from './system_configs.resolver';
import { PrismaService } from '../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';

@Module({
  providers: [SystemConfigsResolver, SystemConfigsService, PrismaService, CacheControlService],
})
export class SystemConfigsModule {}
