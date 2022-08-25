import { Test, TestingModule } from '@nestjs/testing';
import { TerminalsResolver } from './terminals.resolver';
import { TerminalsService } from './terminals.service';

describe('TerminalsResolver', () => {
  let resolver: TerminalsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TerminalsResolver, TerminalsService],
    }).compile();

    resolver = module.get<TerminalsResolver>(TerminalsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
