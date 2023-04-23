import { Module } from '@nestjs/common';
import { ExternalService } from './external.service';
import { ExternalController } from './external.controller';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { PrismaService } from '../../prisma.service';
import { ConfigService } from '@nestjs/config';
import { TokenModule } from '@modules/auth/token.module';
import { BullModule } from '@nestjs/bull';
import { SearchService } from '@modules/search/search.service';
import { SystemConfigsService } from '@modules/system_configs/system_configs.service';

@Module({
  imports: [TokenModule],
  controllers: [ExternalController],
  providers: [ExternalService, PrismaService, CacheControlService, SearchService, SystemConfigsService],
})
export class ExternalModule {}
