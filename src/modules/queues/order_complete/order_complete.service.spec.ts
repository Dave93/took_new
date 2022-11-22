import { Test, TestingModule } from '@nestjs/testing';
import { OrderCompleteService } from './order_complete.service';

describe('OrderCompleteService', () => {
  let service: OrderCompleteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderCompleteService],
    }).compile();

    service = module.get<OrderCompleteService>(OrderCompleteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
