import { Module } from '@nestjs/common';
import { ApiTokensService } from './api_tokens.service';
import { ApiTokensResolver } from './api_tokens.resolver';
import { PrismaService } from '../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { TokenModule } from '@modules/auth/token.module';

@Module({
  imports: [TokenModule],
  providers: [ApiTokensResolver, ApiTokensService, PrismaService, CacheControlService],
})
export class ApiTokensModule {}
