import { Test, TestingModule } from '@nestjs/testing';
import { PubsubResolver } from './pubsub.resolver';
import { PubsubService } from './pubsub.service';

describe('PubsubResolver', () => {
  let resolver: PubsubResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PubsubResolver, PubsubService],
    }).compile();

    resolver = module.get<PubsubResolver>(PubsubResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
