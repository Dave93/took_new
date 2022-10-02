import { CacheModule, Module } from '@nestjs/common';
import { TerminalsService } from './terminals.service';
import { TerminalsResolver } from './terminals.resolver';
import { PrismaService } from 'src/prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { TokenModule } from '@modules/auth/token.module';

@Module({
  imports: [CacheModule.register(), TokenModule],
  providers: [TerminalsResolver, TerminalsService, PrismaService, CacheControlService],
})
export class TerminalsModule {}
