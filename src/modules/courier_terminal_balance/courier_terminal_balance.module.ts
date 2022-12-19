import { Module } from '@nestjs/common';
import { CourierTerminalBalanceService } from './courier_terminal_balance.service';
import { CourierTerminalBalanceResolver } from './courier_terminal_balance.resolver';
import { TokenModule } from '@modules/auth/token.module';
import { PrismaService } from '../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';

@Module({
  imports: [TokenModule],
  providers: [CourierTerminalBalanceResolver, CourierTerminalBalanceService, PrismaService, CacheControlService],
})
export class CourierTerminalBalanceModule {}
