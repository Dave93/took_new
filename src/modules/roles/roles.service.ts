import { Injectable } from '@nestjs/common';
import { FindManycityArgs } from 'src/@generated/city/find-manycity.args';
import { roles_permissionsWhereInput } from 'src/@generated/roles-permissions/roles-permissions-where.input';
import { CreateOnerolesArgs } from 'src/@generated/roles/create-oneroles.args';
import { FindManyrolesArgs } from 'src/@generated/roles/find-manyroles.args';
import { rolesWhereInput } from 'src/@generated/roles/roles-where.input';
import { UpdateOnerolesArgs } from 'src/@generated/roles/update-oneroles.args';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RolesService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createRolesInput: CreateOnerolesArgs) {
    return this.prismaService.roles.create(createRolesInput);
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

  update(updateRoleInput: UpdateOnerolesArgs) {
    return this.prismaService.roles.update(updateRoleInput);
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
    return this.prismaService.roles_permissions.createMany({
      data: permission_ids.map((permission_id) => ({
        role_id,
        permission_id,
      })),
    });
  }
}
