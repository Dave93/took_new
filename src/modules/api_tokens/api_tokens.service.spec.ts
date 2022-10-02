import { Test, TestingModule } from '@nestjs/testing';
import { ApiTokensService } from './api_tokens.service';

describe('ApiTokensService', () => {
  let service: ApiTokensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiTokensService],
    }).compile();

    service = module.get<ApiTokensService>(ApiTokensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
