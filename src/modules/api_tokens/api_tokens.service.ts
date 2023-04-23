import { Injectable } from '@nestjs/common';
import Hashids from 'hashids';
import { PrismaService } from '../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';
import { api_tokensCreateArgs } from '../../helpers/create-one.args';
import { api_tokensWhereInput } from '../../@generated/api-tokens/api-tokens-where.input';
import { FindManyapiTokensArgs } from '../../@generated/prisma/find-manyapi-tokens.args';
import { UpdateOneapiTokensArgs } from '../../@generated/prisma/update-oneapi-tokens.args';

@Injectable()
export class ApiTokensService {
  constructor(private readonly prismaService: PrismaService, private readonly cacheControl: CacheControlService) {}
  async create(createApiTokenInput: api_tokensCreateArgs) {
    const res = this.prismaService.api_tokens.create(createApiTokenInput);
    await this.cacheControl.cacheApiTokens();
    return res;
  }

  async findAll(params: FindManyapiTokensArgs) {
    return this.prismaService.api_tokens.findMany({
      ...params,
      include: {
        api_tokens_organization: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.api_tokens.findUnique({
      where: {
        id,
      },
    });
  }

  async update(updateApiTokenInput: UpdateOneapiTokensArgs) {
    const res = await this.prismaService.api_tokens.update(updateApiTokenInput);
    await this.cacheControl.cacheApiTokens();
    return res;
  }

  async remove(id: string) {
    const res = await this.prismaService.api_tokens.delete({
      where: {
        id,
      },
    });
    await this.cacheControl.cacheApiTokens();
    return res;
  }

  orderStatusConnection(where: api_tokensWhereInput) {
    return this.prismaService.api_tokens.aggregate({
      where,
      _count: {
        id: true,
      },
    });
  }
}
