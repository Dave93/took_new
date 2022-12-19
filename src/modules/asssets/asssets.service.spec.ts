import { Test, TestingModule } from '@nestjs/testing';
import { AsssetsService } from './asssets.service';

describe('AsssetsService', () => {
  let service: AsssetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsssetsService],
    }).compile();

    service = module.get<AsssetsService>(AsssetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
