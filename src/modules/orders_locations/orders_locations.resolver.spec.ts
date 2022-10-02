import { Test, TestingModule } from '@nestjs/testing';
import { OrdersLocationsResolver } from './orders_locations.resolver';
import { OrdersLocationsService } from './orders_locations.service';

describe('OrdersLocationsResolver', () => {
  let resolver: OrdersLocationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersLocationsResolver, OrdersLocationsService],
    }).compile();

    resolver = module.get<OrdersLocationsResolver>(OrdersLocationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
