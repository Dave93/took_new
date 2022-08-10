import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsResolver } from './permissions.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PermissionsResolver, PermissionsService, PrismaService],
})
export class PermissionsModule {}
