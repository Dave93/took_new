import { Test, TestingModule } from '@nestjs/testing';
import { OrderActionsService } from './order_actions.service';

describe('OrderActionsService', () => {
  let service: OrderActionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderActionsService],
    }).compile();

    service = module.get<OrderActionsService>(OrderActionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
