import { Test, TestingModule } from '@nestjs/testing';
import { OrderTransactionsService } from './order_transactions.service';

describe('OrderTransactionsService', () => {
  let service: OrderTransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderTransactionsService],
    }).compile();

    service = module.get<OrderTransactionsService>(OrderTransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
