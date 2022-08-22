import { Test, TestingModule } from '@nestjs/testing';
import { RolesPermissionsResolver } from './roles_permissions.resolver';
import { RolesPermissionsService } from './roles_permissions.service';

describe('RolesPermissionsResolver', () => {
  let resolver: RolesPermissionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesPermissionsResolver, RolesPermissionsService],
    }).compile();

    resolver = module.get<RolesPermissionsResolver>(RolesPermissionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
