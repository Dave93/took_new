import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PermissionsService } from './permissions.service';
import { permissions } from 'src/@generated/permissions/permissions.model';
import { UpdateOnepermissionsArgs } from 'src/@generated/permissions/update-onepermissions.args';
import { FindManypermissionsArgs } from 'src/@generated/permissions/find-manypermissions.args';
import { permissionsCreateInput } from 'src/@generated/permissions/permissions-create.input';
import { permissionsUpdateInput } from 'src/@generated/permissions/permissions-update.input';
import { permissionsWhereInput } from 'src/@generated/permissions/permissions-where.input';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { CreateOnepermissionsArgs } from 'src/@generated/permissions/create-onepermissions.args';

@Resolver(() => permissions)
export class PermissionsResolver {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Mutation(() => permissions)
  createPermission(@Args() createPermissionInput: CreateOnepermissionsArgs) {
    return this.permissionsService.create(createPermissionInput);
  }

  @Query(() => [permissions], { name: 'permissions' })
  findAll(@Args() params: FindManypermissionsArgs) {
    return this.permissionsService.findAll(params);
  }

  @Query(() => PrismaAggregateCount, { name: 'permissionsConnection' })
  permissionsConnection(@Args('where') where: permissionsWhereInput) {
    return this.permissionsService.permissionsConnection(where);
  }

  @Query(() => permissions, { name: 'permission' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.permissionsService.findOne(id);
  }

  @Mutation(() => permissions)
  updatePermission(@Args() updatePermissionInput: UpdateOnepermissionsArgs) {
    return this.permissionsService.update(updatePermissionInput);
  }

  @Mutation(() => permissions)
  removePermission(@Args('id', { type: () => Int }) id: number) {
    return this.permissionsService.remove(id);
  }
}
