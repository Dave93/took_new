import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PrismaService } from 'src/prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [AuthResolver, AuthService, PrismaService],
  imports: [ConfigModule.forRoot()],
})
export class AuthModule {}
