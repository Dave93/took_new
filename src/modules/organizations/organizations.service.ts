import { Injectable } from '@nestjs/common';
import { FindManyorganizationArgs } from 'src/@generated/organization/find-manyorganization.args';
import { organizationWhereInput } from 'src/@generated/organization/organization-where.input';
import { UpdateOneorganizationArgs } from 'src/@generated/organization/update-oneorganization.args';
import { organizationCreateArgs } from 'src/helpers/create-one.args';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrganizationsService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createOrganizationInput: organizationCreateArgs) {
    return this.prismaService.organization.create(createOrganizationInput);
  }

  organizationConnection(where: organizationWhereInput) {
    return this.prismaService.organization.aggregate({
      _count: {
        id: true,
      },
      where,
    });
  }

  findAll(params: FindManyorganizationArgs) {
    return this.prismaService.organization.findMany(params);
  }

  findOne(id: string) {
    return this.prismaService.organization.findUnique({
      where: {
        id,
      },
    });
  }

  update(updateOrganizationInput: UpdateOneorganizationArgs) {
    return this.prismaService.organization.update(updateOrganizationInput);
  }

  remove(id: string) {
    return `This action removes a #${id} organization`;
  }
}
