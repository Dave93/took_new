import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrganizationsService } from './organizations.service';
import { Organization } from './entities/organization.entity';
import { organizationCreateArgs } from 'src/helpers/create-one.args';
import { organization } from 'src/@generated/organization/organization.model';
import { FindManyorganizationArgs } from 'src/@generated/organization/find-manyorganization.args';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { organizationWhereInput } from 'src/@generated/organization/organization-where.input';
import { UpdateOneorganizationArgs } from 'src/@generated/organization/update-oneorganization.args';
import { Permissions } from '@auth';

@Resolver(() => organization)
export class OrganizationsResolver {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Mutation(() => organization)
  @Permissions('organization.create')
  organizationCreate(@Args() createOrganizationInput: organizationCreateArgs) {
    return this.organizationsService.create(createOrganizationInput);
  }

  @Query(() => [organization], { name: 'organizations' })
  @Permissions('organization.list')
  findAll(@Args() params: FindManyorganizationArgs) {
    return this.organizationsService.findAll(params);
  }

  @Query(() => [organization], { name: 'cachedOrganizations' })
  @Permissions('organization.list')
  getAllCached() {
    return this.organizationsService.getAllCached();
  }

  @Query(() => PrismaAggregateCount, { name: 'organizationsConnection' })
  @Permissions('organization.list')
  organizationConnection(@Args('where') where: organizationWhereInput) {
    return this.organizationsService.organizationConnection(where);
  }

  @Query(() => organization, { name: 'organization' })
  @Permissions('organization.show')
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.organizationsService.findOne(id);
  }

  @Mutation(() => organization)
  @Permissions('organization.edit')
  updateOrganization(@Args() updateOrganizationInput: UpdateOneorganizationArgs) {
    return this.organizationsService.update(updateOrganizationInput);
  }

  @Mutation(() => Organization)
  @Permissions('organization.delete')
  removeOrganization(@Args('id', { type: () => String }) id: string) {
    return this.organizationsService.remove(id);
  }
}
