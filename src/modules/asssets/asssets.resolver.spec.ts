import { Test, TestingModule } from '@nestjs/testing';
import { AsssetsResolver } from './asssets.resolver';
import { AsssetsService } from './asssets.service';

describe('AsssetsResolver', () => {
  let resolver: AsssetsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsssetsResolver, AsssetsService],
    }).compile();

    resolver = module.get<AsssetsResolver>(AsssetsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
