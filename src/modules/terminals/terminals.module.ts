import { CacheModule, Module } from '@nestjs/common';
import { TerminalsService } from './terminals.service';
import { TerminalsResolver } from './terminals.resolver';
import { PrismaService } from 'src/prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';

@Module({
  imports: [CacheModule.register()],
  providers: [TerminalsResolver, TerminalsService, PrismaService, CacheControlService],
})
export class TerminalsModule {}
