import { Module } from '@nestjs/common';
import { ExternalService } from './external.service';
import { ExternalController } from './external.controller';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { PrismaService } from '../../prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [ExternalController],
  providers: [ExternalService, PrismaService, CacheControlService, ConfigService],
})
export class ExternalModule {}
