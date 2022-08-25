import { Test, TestingModule } from '@nestjs/testing';
import { TerminalsService } from './terminals.service';

describe('TerminalsService', () => {
  let service: TerminalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TerminalsService],
    }).compile();

    service = module.get<TerminalsService>(TerminalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
