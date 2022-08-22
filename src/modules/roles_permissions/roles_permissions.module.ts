import { Module } from '@nestjs/common';
import { RolesPermissionsService } from './roles_permissions.service';
import { RolesPermissionsResolver } from './roles_permissions.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [RolesPermissionsResolver, RolesPermissionsService, PrismaService],
})
export class RolesPermissionsModule {}
