import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsResolver } from './organizations.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [OrganizationsResolver, OrganizationsService, PrismaService],
})
export class OrganizationsModule {}
