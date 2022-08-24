import { Injectable } from '@nestjs/common';
import { FindManyrolesPermissionsArgs } from 'src/@generated/prisma/find-manyroles-permissions.args';
import { UpdateOnerolesPermissionsArgs } from 'src/@generated/prisma/update-oneroles-permissions.args';
import { roles_permissionsWhereInput } from 'src/@generated/roles-permissions/roles-permissions-where.input';
import { CreateOnerolesPermissionsArgs } from 'src/helpers/create-one.args';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RolesPermissionsService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createRolesPermissionInput: CreateOnerolesPermissionsArgs) {
    return this.prismaService.roles_permissions.create(createRolesPermissionInput);
  }

  findAll(params: FindManyrolesPermissionsArgs) {
    return this.prismaService.roles_permissions.findMany(params);
  }

  roles_permissionsConnection(where: roles_permissionsWhereInput) {
    return this.prismaService.roles_permissions.aggregate({
      _count: {
        _all: true,
      },
      where,
    });
  }

  findOne(role_id: string, permission_id: string) {
    return this.prismaService.roles_permissions.findUnique({
      where: {
        role_id_permission_id: {
          role_id,
          permission_id,
        },
      },
    });
  }

  update(updateRolesPermissionInput: UpdateOnerolesPermissionsArgs) {
    this.prismaService.roles_permissions.update(updateRolesPermissionInput);
  }

  remove(id: string) {
    return `This action removes a #${id} rolesPermission`;
  }
}
