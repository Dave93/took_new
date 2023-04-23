import { Injectable } from '@nestjs/common';
import { CreateSystemConfigInput } from './dto/create-system_config.input';
import { UpdateSystemConfigInput } from './dto/update-system_config.input';
import { FindManysystemConfigsArgs } from '../../@generated/prisma/find-manysystem-configs.args';
import { PrismaService } from '../../prisma.service';
import { CacheControlService } from '@modules/cache_control/cache_control.service';

@Injectable()
export class SystemConfigsService {
  constructor(private readonly prismaService: PrismaService, private readonly cacheControl: CacheControlService) {}
  async create(createSystemConfigInput: CreateSystemConfigInput) {
    await createSystemConfigInput.items.forEach(async (item) => {
      return this.prismaService.system_configs.upsert({
        where: {
          name: item.name,
        },
        update: {
          value: item.value,
        },
        create: {
          name: item.name,
          value: item.value,
        },
      });
    });
    await this.cacheControl.cacheSystemConfigs();
    return this.prismaService.system_configs.findMany();
  }

  findAll(params: FindManysystemConfigsArgs) {
    return this.prismaService.system_configs.findMany(params);
  }

  findOne(id: number) {
    return `This action returns a #${id} systemConfig`;
  }

  update(id: number, updateSystemConfigInput: UpdateSystemConfigInput) {
    return `This action updates a #${id} systemConfig`;
  }

  remove(id: number) {
    return `This action removes a #${id} systemConfig`;
  }

  async systemConfigByKey(key: string) {
    const systemConfig = await this.prismaService.system_configs.findUnique({
      where: {
        name: key,
      },
    });
    return systemConfig;
  }
}
