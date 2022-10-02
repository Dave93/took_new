import { Reflector } from '@nestjs/core';
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { users } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ExtractJwt } from 'passport-jwt';
import { InvalidTokenException } from '@common/http/exceptions';
import { TokenType } from '@modules/auth/enums';
import { TokenService } from '@auth';
import { CacheControlService } from '@modules/cache_control/cache_control.service';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly tokenService: TokenService,
    private readonly cacheControl: CacheControlService,
    private reflector: Reflector,
  ) {}

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

    let ctx;
    let request = context.switchToHttp().getRequest();
    if (request) {
      ctx = context;
    } else {
      ctx = GqlExecutionContext.create(context);
      request = ctx.getContext().req;
    }
    const accessToken = ExtractJwt.fromAuthHeaderAsBearerToken()(request);
    if (!accessToken) {
      throw new InvalidTokenException();
    }

    const payload = this.tokenService.verifyToken(accessToken, TokenType.AccessToken);
    if (!payload) {
      throw new UnauthorizedException();
    }
    const { id } = payload;
    return this.matchPermissions(permissions, id);
  }

  /**
   * Verifies permissions match the user's permissions
   * @param permissions {string[]}
   * @param user {UserEntity}
   * @returns {boolean}
   */
  async matchPermissions(permissions: string[], userId: string): Promise<boolean> {
    const userRoles = await this.prismaService.users_roles.findMany({
      where: {
        user_id: userId,
      },
      select: {
        role_id: true,
      },
    });

    const userRoleIds = userRoles.map((role) => role.role_id);
    console.log(userRoleIds);
    const roles: any = await this.cacheControl.getCachedRoles();

    const rolePermissions = [];
    const rolePermissionsSlug = [];
    roles
      .filter((role) => userRoleIds.includes(role.id))
      .map((role) => {
        const permissions = role.permissions;
        permissions.map((permission) => {
          rolePermissionsSlug.push(permission);
        });
        return [...permissions];
      });
    console.log(rolePermissionsSlug);
    let allPermissions: string[] = [];
    allPermissions = allPermissions.concat(rolePermissionsSlug);
    // roles.forEach(({  permissions }) => {
    //   const rolePermissions = permissions.map(({ slug }) => slug);
    //   allPermissions = allPermissions.concat(rolePermissions);
    // });
    return permissions.some((permission) => allPermissions?.includes(permission));
  }
}
