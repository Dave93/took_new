import { Resolver, Query, Mutation, Args, Int, Subscription } from '@nestjs/graphql';
import { OrdersLocationsService } from './orders_locations.service';
import { OrdersLocationEntity } from './entities/orders_location.entity';
import { CreateOrdersLocationInput } from './dto/create-orders_location.input';
import { UpdateOrdersLocationInput } from './dto/update-orders_location.input';
import { order_locations } from '../../@generated/order-locations/order-locations.model';
import { UseGuards } from '@nestjs/common';
import { CurrentUser, JwtAuthGuard } from '@auth';
import { users } from '@prisma/client';
import { TookSuccessResponse } from '@helpers';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver(() => order_locations)
export class OrdersLocationsResolver {
  constructor(private readonly ordersLocationsService: OrdersLocationsService) {}

  @Mutation(() => TookSuccessResponse)
  @UseGuards(JwtAuthGuard)
  storeLocation(@Args() data: CreateOrdersLocationInput, @CurrentUser() user: users) {
    return this.ordersLocationsService.storeLocation(data, user);
  }

  @Query(() => [OrdersLocationEntity], { name: 'locationsForOrder' })
  @UseGuards(JwtAuthGuard)
  findOrderLocations(@Args('orderId', { type: () => String }) orderId: string) {
    return this.ordersLocationsService.findOrderLocations(orderId);
  }

  @Subscription((returns) => order_locations, { name: 'orderLocationAdded' })
  orderLocationAdded() {
    return pubSub.asyncIterator('orderLocationAdded');
  }
}
