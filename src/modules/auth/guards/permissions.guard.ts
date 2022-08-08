import { Reflector } from '@nestjs/core';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { users } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private readonly prismaService: PrismaService, private reflector: Reflector) {}

  /**
   * Check if the user has permission to access the resource
   * @param context {ExecutionContext}
   * @returns{boolean}
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const permissions = this.reflector.get<string[]>('permissions', context.getHandler());
    if (!permissions?.length) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    return this.matchPermissions(permissions, user);
  }

  /**
   * Verifies permissions match the user's permissions
   * @param permissions {string[]}
   * @param user {UserEntity}
   * @returns {boolean}
   */
  async matchPermissions(permissions: string[], user: users): Promise<boolean> {
    const permissionDto = await this.prismaService.users_permissions.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        permissions: true,
      },
    });

    const roles = await this.prismaService.users_roles.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        roles: true,
      },
    });

    const rolePermissions = await this.prismaService.roles_permissions.findMany({
      where: {
        role_id: {
          in: roles.map((role) => role.role_id),
        },
      },
      include: {
        permissions: true,
      },
    });

    let allPermissions: string[] = permissionDto.map(({ permissions: { slug } }) => slug);
    const rolePermissionsSlug = rolePermissions.map(({ permissions: { slug } }) => slug);
    allPermissions = allPermissions.concat(rolePermissionsSlug);
    // roles.forEach(({  permissions }) => {
    //   const rolePermissions = permissions.map(({ slug }) => slug);
    //   allPermissions = allPermissions.concat(rolePermissions);
    // });

    return permissions.some((permission) => allPermissions?.includes(permission));
  }
}
