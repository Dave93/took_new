import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { users } from '@prisma/client';

export const CurrentUser = createParamDecorator<users>((data: unknown, context: ExecutionContext) => {
  let ctx;
  let request = context.switchToHttp().getRequest();
  if (request) {
    ctx = context;
  } else {
    ctx = GqlExecutionContext.create(context);
    request = ctx.getContext().req;
  }
  return request.user;
});
