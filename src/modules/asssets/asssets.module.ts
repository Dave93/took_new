import { Module } from '@nestjs/common';
import { AsssetsService } from './asssets.service';
import { AsssetsResolver } from './asssets.resolver';
import { PrismaService } from '../../prisma.service';
import { ConfigService } from '@nestjs/config';
import { TokenModule } from '@modules/auth/token.module';

@Module({
  imports: [TokenModule],
  providers: [AsssetsResolver, AsssetsService, PrismaService, ConfigService],
})
export class AsssetsModule {}
