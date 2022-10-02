import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ApiTokensService } from './api_tokens.service';
import { ApiToken } from './entities/api_token.entity';
import { CreateApiTokenInput } from './dto/create-api_token.input';
import { UpdateApiTokenInput } from './dto/update-api_token.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard, Permissions } from '@auth';
import { api_tokens } from '../../@generated/api-tokens/api-tokens.model';
import { api_tokensCreateArgs } from '../../helpers/create-one.args';
import { PrismaAggregateCount } from '@common/dtos/prisma-aggregate-count';
import { order_statusWhereInput } from '../../@generated/order-status/order-status-where.input';
import { api_tokensWhereInput } from '../../@generated/api-tokens/api-tokens-where.input';
import { FindManyapiTokensArgs } from '../../@generated/prisma/find-manyapi-tokens.args';
import { UpdateOneapiTokensArgs } from '../../@generated/prisma/update-oneapi-tokens.args';

@Resolver(() => api_tokens)
export class ApiTokensResolver {
  constructor(private readonly apiTokensService: ApiTokensService) {}

  @Mutation(() => api_tokens)
  @UseGuards(JwtAuthGuard)
  @Permissions('api_tokens.create')
  apiTokenCreate(@Args() createApiTokenInput: api_tokensCreateArgs) {
    return this.apiTokensService.create(createApiTokenInput);
  }

  @Query(() => PrismaAggregateCount, { name: 'apiTokensConnection' })
  @Permissions('api_tokens.list')
  apiTokensConnection(@Args('where') where: api_tokensWhereInput) {
    return this.apiTokensService.orderStatusConnection(where);
  }

  @Query(() => [api_tokens], { name: 'apiTokens' })
  @Permissions('api_tokens.list')
  findAll(@Args() params: FindManyapiTokensArgs) {
    return this.apiTokensService.findAll(params);
  }

  @Query(() => ApiToken, { name: 'apiToken' })
  @Permissions('api_tokens.show')
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.apiTokensService.findOne(id);
  }

  @Mutation(() => ApiToken)
  @Permissions('api_tokens.edit')
  updateApiToken(@Args() updateApiTokenInput: UpdateOneapiTokensArgs) {
    return this.apiTokensService.update(updateApiTokenInput);
  }

  @Mutation(() => ApiToken)
  @Permissions('api_tokens.delete')
  removeApiToken(@Args('id', { type: () => String }) id: string) {
    return this.apiTokensService.remove(id);
  }
}
