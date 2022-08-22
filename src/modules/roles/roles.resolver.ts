import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { RolesService } from './roles.service';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { CreateOnerolesArgs } from 'src/@generated/roles/create-oneroles.args';
import { FindManyrolesArgs } from 'src/@generated/roles/find-manyroles.args';
import { roles } from 'src/@generated/roles/roles.model';
import { rolesWhereInput } from 'src/@generated/roles/roles-where.input';
import { UpdateOnerolesArgs } from 'src/@generated/roles/update-oneroles.args';
import { roles_permissions } from 'src/@generated/roles-permissions/roles-permissions.model';
import { roles_permissionsWhereInput } from 'src/@generated/roles-permissions/roles-permissions-where.input';
import { BatchPayload } from '@helpers';

@Resolver(() => roles)
export class RolesResolver {
  constructor(private readonly rolesService: RolesService) {}

  @Mutation(() => roles)
  createRole(@Args() createPermissionInput: CreateOnerolesArgs) {
    return this.rolesService.create(createPermissionInput);
  }

  @Query(() => [roles], { name: 'roles' })
  findAll(@Args() params: FindManyrolesArgs) {
    return this.rolesService.findAll(params);
  }

  @Query(() => PrismaAggregateCount, { name: 'rolesConnection' })
  rolesConnection(@Args('where') where: rolesWhereInput) {
    return this.rolesService.rolesConnection(where);
  }

  @Query(() => roles, { name: 'role' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.rolesService.findOne(id);
  }

  @Mutation(() => roles)
  updateRole(@Args() updateRoleInput: UpdateOnerolesArgs) {
    return this.rolesService.update(updateRoleInput);
  }

  @Mutation(() => roles)
  removeRole(@Args('id', { type: () => Int }) id: number) {
    return this.rolesService.remove(id);
  }

  @Query(() => [roles_permissions], { name: 'manyRolePermissions' })
  findManyRolePermissions(@Args('where') where: roles_permissionsWhereInput) {
    return this.rolesService.findManyRolePermissions(where);
  }

  @Mutation(() => BatchPayload, { name: 'assignRolePermissions' })
  async assignRolePermissions(
    @Args('role_id', { type: () => ID }) role_id: string,
    @Args('permission_ids', { type: () => [String!] }) permission_ids: string[],
  ) {
    let res = await this.rolesService.assignRolePermissions(role_id, permission_ids);
    console.log(res);
    return res;
  }
}
