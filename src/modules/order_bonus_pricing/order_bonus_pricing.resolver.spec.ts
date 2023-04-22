import { Test, TestingModule } from '@nestjs/testing';
import { OrderBonusPricingResolver } from './order_bonus_pricing.resolver';
import { OrderBonusPricingService } from './order_bonus_pricing.service';

describe('OrderBonusPricingResolver', () => {
  let resolver: OrderBonusPricingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderBonusPricingResolver, OrderBonusPricingService],
    }).compile();

    resolver = module.get<OrderBonusPricingResolver>(OrderBonusPricingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
