import { Test, TestingModule } from '@nestjs/testing';
import { CacheControlService } from './cache_control.service';

describe('CacheControlService', () => {
  let service: CacheControlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CacheControlService],
    }).compile();

    service = module.get<CacheControlService>(CacheControlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
