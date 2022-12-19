import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'src/prisma.service';
import { SearchService } from '@modules/search/search.service';
import { ConfigService } from '@nestjs/config';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { TokenModule } from '@modules/auth/token.module';

@Module({
  imports: [TokenModule],
  providers: [UsersResolver, UsersService, PrismaService, SearchService, ConfigService, CacheControlService],
})
export class UsersModule {}
