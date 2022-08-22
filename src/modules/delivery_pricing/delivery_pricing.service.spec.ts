import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryPricingService } from './delivery_pricing.service';

describe('DeliveryPricingService', () => {
  let service: DeliveryPricingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliveryPricingService],
    }).compile();

    service = module.get<DeliveryPricingService>(DeliveryPricingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
