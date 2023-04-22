import { Test, TestingModule } from '@nestjs/testing';
import { OrderBonusPricingService } from './order_bonus_pricing.service';

describe('OrderBonusPricingService', () => {
  let service: OrderBonusPricingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderBonusPricingService],
    }).compile();

    service = module.get<OrderBonusPricingService>(OrderBonusPricingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
