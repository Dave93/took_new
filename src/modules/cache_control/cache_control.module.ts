import { CacheModule, Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CacheControlService } from './cache_control.service';

@Module({
  imports: [CacheModule.register()],
  providers: [CacheControlService, PrismaService],
})
export class CacheControlModule {}
