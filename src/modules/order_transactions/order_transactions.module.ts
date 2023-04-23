import { Module } from '@nestjs/common';
import { OrderTransactionsService } from './order_transactions.service';
import { OrderTransactionsResolver } from './order_transactions.resolver';
import { TokenModule } from '@modules/auth/token.module';
import { HttpModule } from '@nestjs/axios';
import { PrismaService } from '../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TokenModule],
  providers: [OrderTransactionsResolver, OrderTransactionsService, PrismaService, CacheControlService],
})
export class OrderTransactionsModule {}
