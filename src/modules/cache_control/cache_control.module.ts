import { CacheModule, Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CacheControlService } from './cache_control.service';

@Module({
  providers: [CacheControlService, PrismaService],
})
export class CacheControlModule {}
