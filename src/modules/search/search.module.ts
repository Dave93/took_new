import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SearchService } from './search.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { PrismaService } from '../../prisma.service';
import { CacheControlModule } from '@modules/cache_control/cache_control.module';

@Global()
@Module({
  imports: [ConfigModule, CacheControlModule],
  providers: [ConfigService, SearchService, PrismaService, CacheControlService],
})
export class SearchModule {}
