import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SystemConfigsService } from './system_configs.service';
import { SystemConfig } from './entities/system_config.entity';
import { CreateSystemConfigInput } from './dto/create-system_config.input';
import { UpdateSystemConfigInput } from './dto/update-system_config.input';
import { system_configs } from '../../@generated/system-configs/system-configs.model';
import { Permissions } from '@auth';
import { FindManysystemConfigsArgs } from '../../@generated/prisma/find-manysystem-configs.args';

@Resolver(() => SystemConfig)
export class SystemConfigsResolver {
  constructor(private readonly systemConfigsService: SystemConfigsService) {}

  @Mutation(() => [system_configs])
  createSystemConfig(@Args('data') createSystemConfigInput: CreateSystemConfigInput) {
    return this.systemConfigsService.create(createSystemConfigInput);
  }

  @Query(() => [system_configs], { name: 'systemConfigs' })
  @Permissions('system_configs.list')
  findAll(@Args() params: FindManysystemConfigsArgs) {
    return this.systemConfigsService.findAll(params);
  }

  @Query(() => SystemConfig, { name: 'systemConfig' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.systemConfigsService.findOne(id);
  }

  @Mutation(() => SystemConfig)
  updateSystemConfig(@Args('updateSystemConfigInput') updateSystemConfigInput: UpdateSystemConfigInput) {
    return this.systemConfigsService.update(updateSystemConfigInput.id, updateSystemConfigInput);
  }

  @Mutation(() => SystemConfig)
  removeSystemConfig(@Args('id', { type: () => Int }) id: number) {
    return this.systemConfigsService.remove(id);
  }

  @Query(() => system_configs, { name: 'systemConfigByKey' })
  systemConfigByKey(@Args('key') key: string) {
    return this.systemConfigsService.systemConfigByKey(key);
  }
}
