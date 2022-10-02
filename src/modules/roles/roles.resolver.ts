import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { RolesService } from './roles.service';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { FindManyrolesArgs } from 'src/@generated/roles/find-manyroles.args';
import { roles } from 'src/@generated/roles/roles.model';
import { rolesWhereInput } from 'src/@generated/roles/roles-where.input';
import { UpdateOnerolesArgs } from 'src/@generated/roles/update-oneroles.args';
import { roles_permissions } from 'src/@generated/roles-permissions/roles-permissions.model';
import { roles_permissionsWhereInput } from 'src/@generated/roles-permissions/roles-permissions-where.input';
import { BatchPayload } from '@helpers';
import { CreateOnerolesArgs } from 'src/helpers/create-one.args';
import { Permissions } from '@auth';

@Resolver(() => roles)
export class RolesResolver {
  constructor(private readonly rolesService: RolesService) {}

  @Mutation(() => roles)
  @Permissions('roles.create')
  roleCreate(@Args() createPermissionInput: CreateOnerolesArgs) {
    return this.rolesService.create(createPermissionInput);
  }

  @Query(() => [roles], { name: 'roles' })
  @Permissions('roles.list')
  findAll(@Args() params: FindManyrolesArgs) {
    return this.rolesService.findAll(params);
  }

  @Query(() => PrismaAggregateCount, { name: 'rolesConnection' })
  @Permissions('roles.list')
  rolesConnection(@Args('where') where: rolesWhereInput) {
    return this.rolesService.rolesConnection(where);
  }

  @Query(() => roles, { name: 'role' })
  @Permissions('roles.show')
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.rolesService.findOne(id);
  }

  @Mutation(() => roles)
  @Permissions('roles.edit')
  updateRole(@Args() updateRoleInput: UpdateOnerolesArgs) {
    return this.rolesService.update(updateRoleInput);
  }

  @Mutation(() => roles)
  @Permissions('roles.delete')
  removeRole(@Args('id', { type: () => Int }) id: number) {
    return this.rolesService.remove(id);
  }

  @Query(() => [roles_permissions], { name: 'manyRolePermissions' })
  @Permissions('roles.list')
  findManyRolePermissions(@Args('where') where: roles_permissionsWhereInput) {
    return this.rolesService.findManyRolePermissions(where);
  }

  @Mutation(() => BatchPayload, { name: 'assignRolePermissions' })
  @Permissions('roles.edit')
  async assignRolePermissions(
    @Args('role_id', { type: () => ID }) role_id: string,
    @Args('permission_ids', { type: () => [String!] }) permission_ids: string[],
  ) {
    let res = await this.rolesService.assignRolePermissions(role_id, permission_ids);
    return res;
  }
}
