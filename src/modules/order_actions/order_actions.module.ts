import { Module } from '@nestjs/common';
import { OrderActionsService } from './order_actions.service';
import { OrderActionsResolver } from './order_actions.resolver';
import { PrismaService } from 'src/prisma.service';
import { TokenModule } from '@modules/auth/token.module';

@Module({
  imports: [TokenModule],
  providers: [OrderActionsResolver, OrderActionsService, PrismaService],
})
export class OrderActionsModule {}
