import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { PrismaService } from 'src/prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { TokenModule } from '@modules/auth/token.module';
import { SearchService } from '@modules/search/search.service';
import { ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { AsssetsService } from '@modules/asssets/asssets.service';

@Module({
  imports: [TokenModule, HttpModule],
  providers: [
    OrdersResolver,
    OrdersService,
    PrismaService,
    CacheControlService,
    ConfigService,
    SearchService,
    AsssetsService,
  ],
})
export class OrdersModule {}
