import { Test, TestingModule } from '@nestjs/testing';
import { CourierTerminalBalanceService } from './courier_terminal_balance.service';

describe('CourierTerminalBalanceService', () => {
  let service: CourierTerminalBalanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourierTerminalBalanceService],
    }).compile();

    service = module.get<CourierTerminalBalanceService>(CourierTerminalBalanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
