import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SearchService } from './search.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { PrismaService } from '../../prisma.service';
import { CacheControlModule } from '@modules/cache_control/cache_control.module';
import { SystemConfigsService } from '@modules/system_configs/system_configs.service';

@Global()
@Module({
  imports: [ConfigModule, CacheControlModule],
  providers: [SearchService, PrismaService, SystemConfigsService, CacheControlService],
})
export class SearchModule {}
