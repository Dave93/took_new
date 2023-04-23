import { CacheModule, Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CacheControlService } from './cache_control.service';
import {ConfigService} from "@nestjs/config";

@Module({
  providers: [CacheControlService, PrismaService,
    ConfigService],
})
export class CacheControlModule {}
