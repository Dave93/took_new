import { Injectable } from '@nestjs/common';
import { roles_permissionsWhereInput } from 'src/@generated/roles-permissions/roles-permissions-where.input';
import { FindManyrolesArgs } from 'src/@generated/roles/find-manyroles.args';
import { rolesWhereInput } from 'src/@generated/roles/roles-where.input';
import { UpdateOnerolesArgs } from 'src/@generated/roles/update-oneroles.args';
import { CreateOnerolesArgs } from 'src/helpers/create-one.args';
import { PrismaService } from 'src/prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';

@Injectable()
export class RolesService {
  constructor(private readonly prismaService: PrismaService, private readonly cacheControl: CacheControlService) {}
  async create(createRolesInput: CreateOnerolesArgs) {
    const res = this.prismaService.roles.create(createRolesInput);
    await this.cacheControl.invalidateCache('roles');
    return res;
  }

  findAll(params: FindManyrolesArgs) {
    return this.prismaService.roles.findMany(params);
  }

  rolesConnection(where: rolesWhereInput) {
    return this.prismaService.roles.aggregate({
      _count: {
        id: true,
      },
      where,
    });
  }

  findOne(id: string) {
    return this.prismaService.roles.findUnique({
      where: {
        id,
      },
    });
  }

  async update(updateRoleInput: UpdateOnerolesArgs) {
    const res = this.prismaService.roles.update(updateRoleInput);
    await this.cacheControl.invalidateCache('roles');
    return res;
  }

  remove(id: number) {
    return `This action removes a #${id} permission`;
  }

  findManyRolePermissions(where: roles_permissionsWhereInput) {
    return this.prismaService.roles_permissions.findMany({ where, include: { permissions: true } });
  }

  async assignRolePermissions(role_id: string, permission_ids: string[]) {
    await this.prismaService.roles_permissions.deleteMany({
      where: {
        role_id,
      },
    });
    const res = this.prismaService.roles_permissions.createMany({
      data: permission_ids.map((permission_id) => ({
        role_id,
        permission_id,
      })),
    });
    await this.cacheControl.invalidateCache('roles');
    return res;
  }
}
