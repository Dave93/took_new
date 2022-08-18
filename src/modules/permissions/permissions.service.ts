import { Injectable } from '@nestjs/common';
import { FindManypermissionsArgs } from 'src/@generated/permissions/find-manypermissions.args';
import { permissionsCreateInput } from 'src/@generated/permissions/permissions-create.input';
import { permissionsUpdateInput } from 'src/@generated/permissions/permissions-update.input';
import { permissionsWhereInput } from 'src/@generated/permissions/permissions-where.input';
import { UpdateOnepermissionsArgs } from 'src/@generated/permissions/update-onepermissions.args';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PermissionsService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createPermissionInput: permissionsCreateInput) {
    return this.prismaService.permissions.create({ data: createPermissionInput });
  }

  findAll(params: FindManypermissionsArgs) {
    return this.prismaService.permissions.findMany({ ...params });
  }

  permissionsConnection(where: permissionsWhereInput) {
    return this.prismaService.permissions.aggregate({
      _count: {
        id: true,
      },
      where,
    });
  }

  findOne(id: string) {
    return this.prismaService.permissions.findUnique({
      where: {
        id,
      },
    });
  }

  update(updatePermissionInput: UpdateOnepermissionsArgs) {
    return this.prismaService.permissions.update(updatePermissionInput);
  }

  remove(id: number) {
    return `This action removes a #${id} permission`;
  }
}
