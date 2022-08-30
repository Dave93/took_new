import { Reflector } from '@nestjs/core';
import { Injectable, ExecutionContext, UnauthorizedException, Inject } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { InvalidTokenException } from '@common/http/exceptions';
import { TokenService } from '../services';
import { TokenType } from '../enums';
import { SKIP_AUTH } from '../constants';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly tokenService: TokenService, private reflector: Reflector) {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  /**
   * Verify the token is valid
   * @param context {ExecutionContext}
   * @returns super.canActivate(context)
   */
  canActivate(context: ExecutionContext) {
    let ctx;
    let request = context.switchToHttp().getRequest();
    if (request) {
      ctx = context;
    } else {
      ctx = GqlExecutionContext.create(context);
      request = ctx.getContext().req;
    }
    const skipAuth = this.reflector.getAllAndOverride<boolean>(SKIP_AUTH, [ctx.getHandler(), ctx.getClass()]);
    if (skipAuth) {
      return true;
    }

    const accessToken = ExtractJwt.fromAuthHeaderAsBearerToken()(request);
    if (!accessToken) {
      throw new InvalidTokenException();
    }

    const payload = this.tokenService.verifyToken(accessToken, TokenType.AccessToken);
    if (!payload) {
      throw new UnauthorizedException();
    }
    return super.canActivate(context);
  }

  /**
   * Handle request and verify if exist an error or there's not user
   * @param error
   * @param user
   * @returns user || error
   */
  handleRequest(error, user) {
    if (error || !user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
