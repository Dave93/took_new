import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RolesPermissionsService } from './roles_permissions.service';
import { roles_permissions } from 'src/@generated/roles-permissions/roles-permissions.model';
import { FindManyrolesPermissionsArgs } from 'src/@generated/prisma/find-manyroles-permissions.args';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { roles_permissionsWhereInput } from 'src/@generated/roles-permissions/roles-permissions-where.input';
import { UpdateOnerolesPermissionsArgs } from 'src/@generated/prisma/update-oneroles-permissions.args';
import { CreateOnerolesPermissionsArgs } from 'src/helpers/create-one.args';

@Resolver(() => roles_permissions)
export class RolesPermissionsResolver {
  constructor(private readonly rolesPermissionsService: RolesPermissionsService) {}

  @Mutation(() => roles_permissions)
  createRolesPermission(@Args() createRolesPermissionInput: CreateOnerolesPermissionsArgs) {
    return this.rolesPermissionsService.create(createRolesPermissionInput);
  }

  @Query(() => [roles_permissions], { name: 'rolesPermissions' })
  findAll(@Args() params: FindManyrolesPermissionsArgs) {
    return this.rolesPermissionsService.findAll(params);
  }

  @Query(() => PrismaAggregateCount, { name: 'rolesPermissionsConnection' })
  rolesPermissionsConnection(@Args('where') where: roles_permissionsWhereInput) {
    return this.rolesPermissionsService.roles_permissionsConnection(where);
  }

  @Query(() => roles_permissions, { name: 'rolesPermission' })
  findOne(
    @Args('role_id', { type: () => String }) role_id: string,
    @Args('permission_id', { type: () => String }) permission_id: string,
  ) {
    return this.rolesPermissionsService.findOne(role_id, permission_id);
  }

  @Mutation(() => roles_permissions)
  updateRolesPermission(@Args() updateRolesPermissionInput: UpdateOnerolesPermissionsArgs) {
    return this.rolesPermissionsService.update(updateRolesPermissionInput);
  }

  @Mutation(() => roles_permissions)
  removeRolesPermission(@Args('id', { type: () => String }) id: string) {
    return this.rolesPermissionsService.remove(id);
  }
}
