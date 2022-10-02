import { Test, TestingModule } from '@nestjs/testing';
import { ApiTokensResolver } from './api_tokens.resolver';
import { ApiTokensService } from './api_tokens.service';

describe('ApiTokensResolver', () => {
  let resolver: ApiTokensResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiTokensResolver, ApiTokensService],
    }).compile();

    resolver = module.get<ApiTokensResolver>(ApiTokensResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
