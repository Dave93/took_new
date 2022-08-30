import { CacheModule, Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsResolver } from './organizations.resolver';
import { PrismaService } from 'src/prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';

@Module({
  imports: [CacheModule.register()],
  providers: [OrganizationsResolver, OrganizationsService, PrismaService, CacheControlService],
})
export class OrganizationsModule {}
