import { Test, TestingModule } from '@nestjs/testing';
import { CourierTerminalBalanceResolver } from './courier_terminal_balance.resolver';
import { CourierTerminalBalanceService } from './courier_terminal_balance.service';

describe('CourierTerminalBalanceResolver', () => {
  let resolver: CourierTerminalBalanceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourierTerminalBalanceResolver, CourierTerminalBalanceService],
    }).compile();

    resolver = module.get<CourierTerminalBalanceResolver>(CourierTerminalBalanceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
