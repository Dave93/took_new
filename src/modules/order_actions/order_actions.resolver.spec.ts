import { Test, TestingModule } from '@nestjs/testing';
import { OrderActionsResolver } from './order_actions.resolver';
import { OrderActionsService } from './order_actions.service';

describe('OrderActionsResolver', () => {
  let resolver: OrderActionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderActionsResolver, OrderActionsService],
    }).compile();

    resolver = module.get<OrderActionsResolver>(OrderActionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
