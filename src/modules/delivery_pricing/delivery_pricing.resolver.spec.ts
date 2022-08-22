import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryPricingResolver } from './delivery_pricing.resolver';
import { DeliveryPricingService } from './delivery_pricing.service';

describe('DeliveryPricingResolver', () => {
  let resolver: DeliveryPricingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliveryPricingResolver, DeliveryPricingService],
    }).compile();

    resolver = module.get<DeliveryPricingResolver>(DeliveryPricingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
