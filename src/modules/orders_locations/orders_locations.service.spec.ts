import { Test, TestingModule } from '@nestjs/testing';
import { OrdersLocationsService } from './orders_locations.service';

describe('OrdersLocationsService', () => {
  let service: OrdersLocationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersLocationsService],
    }).compile();

    service = module.get<OrdersLocationsService>(OrdersLocationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
