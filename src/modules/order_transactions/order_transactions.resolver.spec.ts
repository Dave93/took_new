import { Test, TestingModule } from '@nestjs/testing';
import { OrderTransactionsResolver } from './order_transactions.resolver';
import { OrderTransactionsService } from './order_transactions.service';

describe('OrderTransactionsResolver', () => {
  let resolver: OrderTransactionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderTransactionsResolver, OrderTransactionsService],
    }).compile();

    resolver = module.get<OrderTransactionsResolver>(OrderTransactionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
