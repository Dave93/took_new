import { Test, TestingModule } from '@nestjs/testing';
import { SystemConfigsResolver } from './system_configs.resolver';
import { SystemConfigsService } from './system_configs.service';

describe('SystemConfigsResolver', () => {
  let resolver: SystemConfigsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemConfigsResolver, SystemConfigsService],
    }).compile();

    resolver = module.get<SystemConfigsResolver>(SystemConfigsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
